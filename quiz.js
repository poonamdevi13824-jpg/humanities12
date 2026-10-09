const subjectSelect = document.getElementById('subjectSelect');
const bookSelect = document.getElementById('bookSelect');
const chapterSelect = document.getElementById('chapterSelect');
const modeSelect = document.getElementById('modeSelect');
const chapterSearch = document.getElementById('chapterSearch');
const quizArea = document.getElementById('quizArea');
const startQuizBtn = document.getElementById('startQuizBtn');
const resetQuizBtn = document.getElementById('resetQuizBtn');

let currentLevel = 1;
let currentQuestionIndex = 0;
let selectedAnswer = null;
let levelScore = 0;
let totalScore = 0;
let currentData = [];
let selectedSubject = 'history';
let satAvatar = null;
let voiceEnabled = true;
let translationEnabled = false;
let questionRenderSequence = 0;
let displayedQuestion = '';
let displayedOptions = [];
let speechRequestSequence = 0;
const translationCache = new Map();
const quizSubjectList = subjectList.filter((key) => !subjectCatalog[key].bookOnly);

function containsHindi(text) {
  return /[\u0900-\u097F]/.test(text);
}

function decodeTranslation(text) {
  return new DOMParser().parseFromString(text, 'text/html').documentElement.textContent || text;
}

async function translateToHindi(text) {
  if (!text || containsHindi(text)) return text;
  if (translationCache.has(text)) return translationCache.get(text);
  const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en%7Chi`;
  const response = await fetch(url);
  if (!response.ok) throw new Error('Hindi translation is unavailable right now.');
  const data = await response.json();
  const translated = data.responseData?.translatedText;
  if (!translated) throw new Error('Hindi translation is unavailable right now.');
  const cleanText = decodeTranslation(translated);
  translationCache.set(text, cleanText);
  return cleanText;
}

function getSpeechVoice(language) {
  const voices = window.speechSynthesis?.getVoices() || [];
  const preferredName = language === 'hi-IN' ? /hemant/i : /ravi/i;
  return voices.find((voice) => voice.lang.toLowerCase() === language.toLowerCase() && preferredName.test(voice.name))
    || voices.find((voice) => voice.lang.toLowerCase() === language.toLowerCase());
}

function waitForSpeechVoice(language) {
  const voice = getSpeechVoice(language);
  if (voice || !window.speechSynthesis?.addEventListener) return Promise.resolve(voice);
  return new Promise((resolve) => {
    const synth = window.speechSynthesis;
    let timer;
    const finish = () => {
      synth.removeEventListener('voiceschanged', finish);
      window.clearTimeout(timer);
      resolve(getSpeechVoice(language));
    };
    synth.addEventListener('voiceschanged', finish, { once: true });
    timer = window.setTimeout(finish, 1200);
  });
}

function updateVoiceLabel() {
  const voiceToggle = document.getElementById('voiceToggle');
  if (!voiceToggle) return;
  const language = selectedSubject === 'hindi' || translationEnabled ? 'Hindi' : 'Indian English';
  voiceToggle.textContent = voiceEnabled ? `Voice: ${language}` : 'Voice off';
  voiceToggle.setAttribute('aria-pressed', String(voiceEnabled));
}

function populateSubjectSelect() {
  subjectSelect.innerHTML = quizSubjectList
    .map((key) => `<option value="${key}">${subjectCatalog[key].name}</option>`)
    .join('');
  subjectSelect.value = selectedSubject;
}

function populateBookSelect() {
  bookSelect.innerHTML = subjectCatalog[selectedSubject].books
    .map((book, index) => `<option value="${index}">${book}</option>`)
    .join('');
}

function getAvailableChapters() {
  const selectedBook = Number(bookSelect.value);
  return subjectCatalog[selectedSubject].chapters.filter((chapter) => chapter.bookIndex === undefined || chapter.bookIndex === selectedBook);
}

function populateChapterSelect() {
  const chapters = getAvailableChapters();
  chapterSelect.innerHTML = chapters
    .map((chapter) => `<option value="${chapter.id}">${chapter.name}</option>`)
    .join('');
}

function searchChapters(term) {
  const chapters = getAvailableChapters();
  const query = term.trim().toLowerCase();
  if (!query) return chapters;
  return chapters.filter((chapter) => chapter.name.toLowerCase().includes(query));
}

function updateChapterSuggestions() {
  const matches = searchChapters(chapterSearch.value);
  chapterSelect.innerHTML = matches
    .map((chapter) => `<option value="${chapter.id}">${chapter.name}</option>`)
    .join('');
  if (!matches.length) {
    chapterSelect.innerHTML = '<option value="">No matching chapter</option>';
  }
}

function makeQuestion(level, mode, subjectKey, chapterId, index) {
  const chapterName = subjectCatalog[subjectKey].chapters.find((chapter) => chapter.id === chapterId)?.name || 'General Chapter';
  const base = subjectCatalog[subjectKey].questionBank[chapterId] || [];
  const question = base[index % base.length];
  const baseText = `Level ${level} • ${mode.toUpperCase()} • ${chapterName}`;

  return {
    prompt: `${baseText}: ${question.q}`,
    options: question.options,
    answer: question.answer
  };
}

function buildQuizData(subjectKey, chapterId, mode) {
  const levels = [];
  const subject = subjectCatalog[subjectKey];
  const chapterName = subject.chapters.find((chapter) => chapter.id === chapterId)?.name || 'General Chapter';
  const questionBank = subject.verifiedQuestionBank?.[chapterId] || [];
  if (!questionBank.length) return levels;

  const levelCount = 10;
  for (let levelIndex = 0; levelIndex < levelCount; levelIndex++) {
    const questions = Array.from({ length: 10 }, (_, index) => {
      const source = questionBank[(levelIndex * 10 + index) % questionBank.length];
      const optionShift = (levelIndex + index) % source.options.length;
      const options = source.options.slice(optionShift).concat(source.options.slice(0, optionShift));
      return {
        prompt: source.q,
        options,
        answer: (source.answer - optionShift + source.options.length) % source.options.length,
        explanation: source.explanation
      };
    });
    levels.push({ level: levelIndex + 1, questions, questionPoolSize: questionBank.length });
  }

  return levels;
}

function renderLevel(levelNumber) {
  currentLevel = levelNumber;
  currentQuestionIndex = 0;
  selectedAnswer = null;
  levelScore = 0;
  const levelData = currentData[levelNumber - 1];
  if (!levelData) return;

  quizArea.innerHTML = `
    <div class="quiz-game">
      <section class="sat-column" aria-label="Sat, your quiz companion">
        <p class="sat-label">Your quiz companion</p>
        <h2 class="sat-title">Sat</h2>
        <div class="sat-canvas-host" id="satCanvasHost" role="img" aria-label="Animated 3D character Sat"></div>
        <div class="sat-dialogue" aria-live="polite">
          <strong>Sat</strong>
          <p id="satDialogue">Ready? I’ll ask each question one at a time.</p>
        </div>
        <div class="sat-tools">
          <button id="repeatQuestionBtn" type="button">Repeat question</button>
          <button class="voice-toggle" id="voiceToggle" type="button" aria-pressed="true">Voice: Indian English</button>
          <button class="translation-toggle" id="translationToggle" type="button" aria-pressed="false">हिंदी में पढ़ें</button>
        </div>
        <p class="sat-start-note" id="voiceNote"></p>
      </section>
      <section class="game-main" id="gameMain" aria-label="Quiz question">
        <div class="game-progress">
          <span id="levelLabel"></span>
          <span id="questionLabel"></span>
        </div>
        <p class="question-pool-note" id="questionPoolNote"></p>
        <div class="progress-track" aria-hidden="true"><div class="progress-fill" id="progressFill"></div></div>
        <h2 class="game-question" id="gameQuestion"></h2>
        <div class="game-options" id="gameOptions"></div>
        <p class="game-feedback" id="gameFeedback" aria-live="polite"></p>
        <div class="game-actions">
          <button class="primary-game-btn" id="submitAnswerBtn" type="button" disabled>Lock in answer</button>
          <button class="primary-game-btn" id="nextQuestionBtn" type="button" hidden>Next question</button>
        </div>
        <div class="scorecard" id="scorecard" hidden aria-live="polite"></div>
      </section>
    </div>
  `;

  const voiceNote = document.getElementById('voiceNote');
  const voiceToggle = document.getElementById('voiceToggle');
  const translationToggle = document.getElementById('translationToggle');
  updateVoiceLabel();
  if (!('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') {
    voiceEnabled = false;
    voiceToggle.disabled = true;
    voiceToggle.textContent = 'Voice unavailable';
    voiceNote.textContent = 'Your browser can still show Sat’s questions and reactions.';
  }

  voiceToggle.addEventListener('click', () => {
    voiceEnabled = !voiceEnabled;
    updateVoiceLabel();
    if (!voiceEnabled && 'speechSynthesis' in window) {
      speechRequestSequence += 1;
      window.speechSynthesis.cancel();
    }
    if (voiceEnabled) askCurrentQuestion();
  });
  translationToggle.disabled = selectedSubject === 'hindi';
  if (selectedSubject === 'hindi') translationToggle.textContent = 'प्रश्न हिंदी में हैं';
  translationToggle.addEventListener('click', async () => {
    if (selectedAnswer !== null || selectedSubject === 'hindi') return;
    translationEnabled = !translationEnabled;
    translationToggle.setAttribute('aria-pressed', String(translationEnabled));
    translationToggle.textContent = translationEnabled ? 'Show English' : 'हिंदी में पढ़ें';
    updateVoiceLabel();
    await showCurrentQuestion();
  });
  document.getElementById('repeatQuestionBtn').addEventListener('click', askCurrentQuestion);
  document.getElementById('submitAnswerBtn').addEventListener('click', submitCurrentAnswer);
  document.getElementById('nextQuestionBtn').addEventListener('click', advanceQuestion);

  try {
    satAvatar = window.SatAvatar?.mount(document.getElementById('satCanvasHost')) || null;
  } catch (error) {
    document.getElementById('satCanvasHost').textContent = 'Sat’s 3D view needs WebGL. The quiz is still playable.';
  }
  showCurrentQuestion();
}

async function speakSat(text, mood = 'talking') {
  satAvatar?.setMood(mood);
  if (!voiceEnabled || !('speechSynthesis' in window) || typeof SpeechSynthesisUtterance === 'undefined') return;
  const requestSequence = ++speechRequestSequence;
  window.speechSynthesis.cancel();
  const language = selectedSubject === 'hindi' || translationEnabled ? 'hi-IN' : 'en-IN';
  const voice = await waitForSpeechVoice(language);
  if (requestSequence !== speechRequestSequence || !voiceEnabled) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;
  utterance.voice = voice || null;
  utterance.rate = 0.94;
  utterance.onend = () => satAvatar?.setMood('idle');
  window.speechSynthesis.speak(utterance);
}

function askCurrentQuestion() {
  const question = currentData[currentLevel - 1]?.questions[currentQuestionIndex];
  if (!question) return;
  const optionText = displayedOptions.map((option, index) => `${String.fromCharCode(65 + index)}. ${option}`).join('. ');
  speakSat(`${translationEnabled ? 'प्रश्न' : 'Question'} ${currentQuestionIndex + 1}. ${displayedQuestion}. ${optionText}`, 'talking');
}

async function showCurrentQuestion() {
  const level = currentData[currentLevel - 1];
  const question = level?.questions[currentQuestionIndex];
  if (!question) return;

  const renderSequence = ++questionRenderSequence;
  selectedAnswer = null;
  document.getElementById('levelLabel').textContent = `Level ${currentLevel} of ${currentData.length}`;
  document.getElementById('questionLabel').textContent = `Question ${currentQuestionIndex + 1} of ${level.questions.length}`;
  const poolSize = level.questionPoolSize || level.questions.length;
  document.getElementById('questionPoolNote').textContent = poolSize < 100
    ? `This chapter has ${poolSize} distinct saved questions. They repeat in varied answer order across 10 levels while more questions are added.`
    : '';
  document.getElementById('progressFill').style.width = `${((currentQuestionIndex + 1) / level.questions.length) * 100}%`;
  const gameQuestion = document.getElementById('gameQuestion');
  const gameOptions = document.getElementById('gameOptions');
  const translationToggle = document.getElementById('translationToggle');
  document.getElementById('gameFeedback').textContent = '';
  document.getElementById('submitAnswerBtn').disabled = true;
  document.getElementById('submitAnswerBtn').hidden = false;
  document.getElementById('nextQuestionBtn').hidden = true;
  document.getElementById('scorecard').hidden = true;
  translationToggle.disabled = selectedSubject === 'hindi';

  let questionText = question.prompt;
  let optionTexts = [...question.options];
  if (translationEnabled) {
    gameQuestion.textContent = 'हिंदी अनुवाद लोड हो रहा है…';
    gameOptions.replaceChildren();
    document.getElementById('satDialogue').textContent = 'मैं इस प्रश्न का हिंदी अनुवाद ला रहा हूँ।';
    try {
      [questionText, ...optionTexts] = await Promise.all([question.prompt, ...question.options].map(translateToHindi));
    } catch (error) {
      translationEnabled = false;
      translationToggle.setAttribute('aria-pressed', 'false');
      translationToggle.textContent = 'हिंदी में पढ़ें';
      document.getElementById('gameFeedback').textContent = 'Hindi translation could not load. Showing the original English question.';
      updateVoiceLabel();
    }
  }
  if (renderSequence !== questionRenderSequence) return;

  displayedQuestion = questionText;
  displayedOptions = optionTexts;
  gameQuestion.textContent = questionText;
  gameOptions.innerHTML = optionTexts.map((option, index) => `
    <button class="game-option" type="button" data-option="${index}" aria-pressed="false">
      <span class="option-letter">${String.fromCharCode(65 + index)}</span>
      <span>${option}</span>
    </button>
  `).join('');
  gameOptions.querySelectorAll('.game-option').forEach((button) => {
    button.addEventListener('click', () => {
      selectedAnswer = Number(button.dataset.option);
      gameOptions.querySelectorAll('.game-option').forEach((option) => {
        option.classList.toggle('selected', option === button);
        option.setAttribute('aria-pressed', String(option === button));
      });
      document.getElementById('submitAnswerBtn').disabled = false;
      translationToggle.disabled = true;
    });
  });

  document.getElementById('satDialogue').textContent = `${translationEnabled ? 'प्रश्न' : 'Question'} ${currentQuestionIndex + 1}: ${questionText}`;
  window.setTimeout(askCurrentQuestion, 280);
}

async function submitCurrentAnswer() {
  if (selectedAnswer === null) return;
  const question = currentData[currentLevel - 1].questions[currentQuestionIndex];
  const correct = selectedAnswer === question.answer;
  const selectedOption = document.querySelector(`.game-option[data-option="${selectedAnswer}"]`);
  const correctOption = document.querySelector(`.game-option[data-option="${question.answer}"]`);
  correctOption.classList.add('correct');
  if (!correct) selectedOption.classList.add('incorrect');
  document.querySelectorAll('.game-option').forEach((button) => { button.disabled = true; });

  if (correct) levelScore += 1;
  totalScore += correct ? 1 : 0;
  let feedback = correct
    ? `That's right! ${question.explanation || ''}`
    : `Not quite. The answer is ${question.options[question.answer]}. ${question.explanation || ''}`;
  if (translationEnabled) {
    document.getElementById('submitAnswerBtn').disabled = true;
    try {
      feedback = await translateToHindi(feedback);
    } catch (error) {
      feedback = `अनुवाद उपलब्ध नहीं है। ${feedback}`;
    }
  }
  document.getElementById('gameFeedback').textContent = feedback;
  document.getElementById('satDialogue').textContent = translationEnabled
    ? (correct ? 'बहुत अच्छा जवाब!' : 'कोई बात नहीं, सही जवाब देखते हैं।')
    : (correct ? 'Nice answer!' : 'Good try. Let’s learn from it.');
  satAvatar?.setMood(correct ? 'happy' : 'thinking');
  document.getElementById('submitAnswerBtn').hidden = true;

  const nextButton = document.getElementById('nextQuestionBtn');
  nextButton.hidden = false;
  nextButton.textContent = currentQuestionIndex === currentData[currentLevel - 1].questions.length - 1 ? 'Show level score' : 'Next question';
  speakSat(feedback, correct ? 'happy' : 'thinking');
}

function advanceQuestion() {
  const levelQuestions = currentData[currentLevel - 1].questions;
  if (currentQuestionIndex < levelQuestions.length - 1) {
    currentQuestionIndex += 1;
    showCurrentQuestion();
    return;
  }
  showLevelScorecard();
}

async function showLevelScorecard() {
  const scorecard = document.getElementById('scorecard');
  const finalLevel = currentLevel >= currentData.length;
  document.getElementById('gameQuestion').textContent = finalLevel ? 'Chapter complete!' : `Level ${currentLevel} complete!`;
  document.getElementById('gameOptions').replaceChildren();
  document.getElementById('gameFeedback').textContent = '';
  document.getElementById('nextQuestionBtn').hidden = true;
  scorecard.hidden = false;
  scorecard.innerHTML = `
    <h3>Level ${currentLevel} scorecard</h3>
    <p>You scored <strong>${levelScore} / ${currentData[currentLevel - 1].questions.length}</strong> on this level.</p>
    <p>Chapter total so far: <strong>${totalScore}</strong> correct answers.</p>
    <div class="game-actions">
      ${finalLevel
        ? '<button class="primary-game-btn" id="finishQuizBtn" type="button">Back to quiz setup</button>'
        : '<button class="primary-game-btn" id="continueLevelBtn" type="button">Continue to next level</button>'}
    </div>
  `;
  document.getElementById(finalLevel ? 'finishQuizBtn' : 'continueLevelBtn').addEventListener('click', () => {
    if (finalLevel) {
      window.speechSynthesis?.cancel();
      quizArea.innerHTML = '';
      return;
    }
    renderLevel(currentLevel + 1);
  });
  let satLine = finalLevel ? `We finished the chapter. Your level score is ${levelScore}.` : `Level complete! You scored ${levelScore} correct. Ready for the next level?`;
  if (translationEnabled) {
    try {
      satLine = await translateToHindi(satLine);
    } catch (error) {
      satLine = `आपका स्कोर ${levelScore} है।`;
    }
  }
  document.getElementById('satDialogue').textContent = satLine;
  speakSat(satLine, 'happy');
}

function startQuiz() {
  selectedSubject = subjectSelect.value;
  const chapterId = chapterSelect.value;
  const mode = modeSelect.value;
  currentData = buildQuizData(selectedSubject, chapterId, mode);
  currentLevel = 1;
  currentQuestionIndex = 0;
  totalScore = 0;
  translationEnabled = false;
  if (!currentData.length) {
    const subject = subjectCatalog[selectedSubject];
    const chapter = subject.chapters.find((item) => item.id === chapterId);
    const fileName = subject.bookFiles?.[chapter?.bookIndex];
    const sourceLink = fileName ? `<a href="books/${fileName}" target="_blank" rel="noopener noreferrer">Open the source textbook PDF</a>` : '';
    const paperLink = subject.pyqSource ? `<a href="${subject.pyqSource}" target="_blank" rel="noopener noreferrer">Download official 2025 board papers (ZIP)</a>` : '';
    quizArea.innerHTML = `
      <p>Interactive questions for this chapter are not ready yet. Use these verified sources for practice:</p>
      <p>${sourceLink} ${paperLink} <a href="https://www.cbse.gov.in/cbsenew/question-paper.html" target="_blank" rel="noopener noreferrer">Browse older CBSE papers</a></p>
    `;
    return;
  }
  renderLevel(currentLevel);
}

subjectSelect.addEventListener('change', () => {
  selectedSubject = subjectSelect.value;
  populateBookSelect();
  populateChapterSelect();
  chapterSearch.value = '';
  chapterSelect.value = subjectCatalog[selectedSubject].chapters[0]?.id || '';
  if (!chapterSelect.value) {
    chapterSelect.innerHTML = '<option value="">No chapter list available</option>';
  }
});

bookSelect.addEventListener('change', () => {
  populateChapterSelect();
  chapterSearch.value = '';
  updateChapterSuggestions();
});

chapterSearch.addEventListener('input', () => {
  updateChapterSuggestions();
});

startQuizBtn.addEventListener('click', startQuiz);
resetQuizBtn.addEventListener('click', () => {
  subjectSelect.value = 'history';
  selectedSubject = 'history';
  populateBookSelect();
  populateChapterSelect();
  modeSelect.value = 'easy';
  chapterSearch.value = '';
  quizArea.innerHTML = '';
});

populateSubjectSelect();
populateBookSelect();
populateChapterSelect();
const params = new URLSearchParams(window.location.search);
const preselectedSubject = params.get('subject');
const preselectedChapter = params.get('chapter');
if (preselectedSubject && subjectCatalog[preselectedSubject]) {
  selectedSubject = quizSubjectList.includes(preselectedSubject) ? preselectedSubject : quizSubjectList[0];
  subjectSelect.value = selectedSubject;
  populateBookSelect();
  const preselectedChapterEntry = subjectCatalog[selectedSubject].chapters.find((chapter) => chapter.id === preselectedChapter);
  const requestedBook = params.get('book');
  if (requestedBook !== null) {
    bookSelect.value = requestedBook;
  } else if (preselectedChapterEntry?.bookIndex !== undefined) {
    bookSelect.value = String(preselectedChapterEntry.bookIndex);
  }
  populateChapterSelect();
  if (preselectedChapter) {
    chapterSelect.value = preselectedChapter;
  }
}

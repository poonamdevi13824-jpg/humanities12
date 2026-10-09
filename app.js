const subjectSearch = document.getElementById('subjectSearch');
const suggestionsList = document.getElementById('suggestions');
const flashcards = document.getElementById('flashcards');
const bookShelfGrid = document.getElementById('bookShelfGrid');
const selectedSubjectTitle = document.getElementById('selectedSubjectTitle');
const bookSelect = document.getElementById('bookSelect');
const chapterSearch = document.getElementById('chapterSearch');
const chapterSuggestions = document.getElementById('chapterSuggestions');
const chapterHint = document.getElementById('chapterHint');
const contentArea = document.getElementById('contentArea');
const resetButton = document.getElementById('resetSubject');
const modeButtons = document.querySelectorAll('.mode-btn');

let selectedSubject = 'history';
let selectedMode = 'notes';
let selectedChapterId = '';

function buildSubjectCards() {
  flashcards.innerHTML = subjectList
    .map((key) => {
      const subject = subjectCatalog[key];
      return `
        <article class="subject-card">
          <div class="cover ${subject.cover}">${subject.name}</div>
          <div class="subject-card-content">
            <h3>${subject.name}</h3>
            <p>${subject.tagline}</p>
            <button type="button" data-subject="${key}">Open subject</button>
          </div>
        </article>
      `;
    })
    .join('');

  flashcards.querySelectorAll('button[data-subject]').forEach((button) => {
    button.addEventListener('click', () => {
      selectedSubject = button.dataset.subject;
      updateStudyPanel();
      document.getElementById('study-panel').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

function buildBookShelf() {
  bookShelfGrid.innerHTML = textbookLibrary
    .map((book) => `
      <article class="book-shelf-item">
        <div>
          <span>${book.subject}</span>
          <h3>${book.title}</h3>
        </div>
        <div class="book-shelf-actions">
          <a href="books/${book.file}" target="_blank" rel="noopener noreferrer">Open PDF</a>
          <a href="books/${book.file}" download>Download</a>
        </div>
      </article>
    `)
    .join('');
}

function getSuggestions(query) {
  const value = (query || '').trim().toLowerCase();
  if (!value) {
    return subjectList.map((subjectKey) => subjectCatalog[subjectKey].name);
  }

  const terms = [];
  subjectList.forEach((key) => {
    const subject = subjectCatalog[key];
    if (subject.name.toLowerCase().includes(value) || subject.tagline.toLowerCase().includes(value)) {
      terms.push(subject.name);
    }
    subject.chapters.forEach((chapter) => {
      if (chapter.name.toLowerCase().includes(value)) {
        terms.push(`${subject.name}: ${chapter.name}`);
      }
    });
  });

  return [...new Set(terms)].slice(0, 8);
}

function getSelectedChapter() {
  const value = chapterSearch.value.trim().toLocaleLowerCase();
  return getAvailableChapters().find((chapter) => chapter.name.trim().toLocaleLowerCase() === value);
}

function getAvailableChapters() {
  const subject = subjectCatalog[selectedSubject];
  const selectedBook = Number(bookSelect.value);
  return subject.chapters.filter((chapter) => chapter.bookIndex === undefined || chapter.bookIndex === selectedBook);
}

function updateChapterSuggestions() {
  const query = chapterSearch.value.trim().toLocaleLowerCase();
  const chapters = getAvailableChapters();
  const matches = query
    ? chapters.filter((chapter) => chapter.name.toLocaleLowerCase().includes(query))
    : chapters;
  chapterSuggestions.innerHTML = matches
    .map((chapter) => `<option value="${chapter.name}"></option>`)
    .join('');

  const exactMatch = getSelectedChapter();
  chapterHint.textContent = exactMatch
    ? `Catalogue title matched: ${exactMatch.name}. Verify it against the selected book/part.`
    : 'Type the chapter title exactly as printed in your selected book/part.';
  chapterHint.classList.toggle('matched', Boolean(exactMatch));
  chapterHint.classList.toggle('unmatched', Boolean(query) && !exactMatch);
}

function renderSuggestions() {
  const value = subjectSearch.value;
  const suggestions = getSuggestions(value);
  suggestionsList.innerHTML = suggestions
    .map((item) => `<li data-value="${item}">${item}</li>`)
    .join('');

  suggestionsList.querySelectorAll('li').forEach((item) => {
    item.addEventListener('click', () => {
      const val = item.dataset.value;
      const [subjectName, chapterName] = val.split(': ');
      let foundKey = subjectList.find((key) => subjectCatalog[key].name === subjectName);

      if (!foundKey) {
        foundKey = subjectList.find((key) => subjectCatalog[key].name.toLowerCase().includes(val.toLowerCase()));
      }

      if (foundKey) {
        selectedSubject = foundKey;
        updateStudyPanel();
        if (chapterName) {
          chapterSearch.value = chapterName;
          selectedChapterId = getSelectedChapter()?.id || '';
          updateChapterSuggestions();
          renderStudyContent();
        }
      }
      subjectSearch.value = val;
      renderSuggestions();
    });
  });
}

function populateBookSelect() {
  const subject = subjectCatalog[selectedSubject];
  bookSelect.innerHTML = subject.books
    .map((book, index) => `<option value="${index}">${book}</option>`)
    .join('');
}

function populateChapterSelect() {
  const subject = subjectCatalog[selectedSubject];
  const chapters = getAvailableChapters();
  const current = chapters.find((chapter) => chapter.id === selectedChapterId) || chapters[0];
  if (!current) {
    selectedChapterId = '';
    chapterSearch.value = '';
    updateChapterSuggestions();
    return;
  }
  selectedChapterId = current.id;
  chapterSearch.value = current.name;
  updateChapterSuggestions();
}

function buildNotesPages(subjectKey, chapter, bookName) {
  const subject = subjectCatalog[subjectKey];
  const points = chapter.points || [];
  const pageContent = [
    {
      title: 'Chapter overview',
      paragraphs: [
        chapter.summary,
        `Selected book/part: ${bookName}. This chapter belongs to ${subject.name}. Use the ideas below to connect the chapter's central theme with evidence, examples, and the wider course.`,
        `Guiding question: What is the main process or idea in ${chapter.title}, and how does it shape society, institutions, people, or the economy?`,
        'Learning targets: define the central idea, explain its causes and effects, connect the key points, and support an answer with accurate examples from the textbook.'
      ]
    },
    {
      title: 'Core ideas and key terms',
      paragraphs: [
        ...points.map((point, index) => `Key idea ${index + 1}: ${point} In your own words, explain what changed, who was affected, and why the change mattered.`),
        `Central theme: ${chapter.title} should be studied as a connected topic rather than as a list of facts. Identify the conditions that shaped it and the consequences that followed.`,
        'Context: place the topic in its relevant time, place, institution, or economic setting. Context makes a definition more precise and prevents a short answer from becoming vague.'
      ]
    },
    {
      title: 'Explanation and connections',
      paragraphs: [
        `Begin with the chapter's central question: ${chapter.summary}`,
        ...points.map((point) => `Connection: ${point} This point can be linked to the chapter's broader theme by tracing its causes, the people or institutions involved, and its short- and long-term effects.`),
        'When revising, arrange the material in a cause -> process -> outcome sequence. If the chapter compares groups, regions, policies, or periods, note both similarities and differences.'
      ]
    },
    {
      title: 'Examples and evidence',
      paragraphs: [
        'Use named examples, dates, places, policies, institutions, or data from the textbook wherever the chapter provides them. A specific piece of evidence is stronger than a general statement.',
        ...points.map((point, index) => `Evidence prompt ${index + 1}: Find one textbook example that demonstrates this idea: ${point}`),
        `For a case study of ${chapter.title}, record the setting, the actors involved, the action or change, and its result. Keep the evidence tied directly to the question.`,
        'Do not treat this draft as a substitute for facts, maps, sources, or case studies in your prescribed book. Add those details from the book when it is available.'
      ]
    },
    {
      title: 'Board-answer method',
      paragraphs: [
        `Practice question: ${chapter.exam}`,
        'Suggested structure: define the topic in the opening; organise the explanation into clear points; support each point with textbook evidence; end by answering the question directly.',
        ...points.map((point, index) => `Possible paragraph ${index + 1}: State the point, explain its meaning, add a relevant example from the book, and link it back to the question. Starting idea: ${point}`),
        'For evaluation questions, show more than one side or consequence. For comparison questions, use the same criteria for each side. For causes or effects, group related factors instead of repeating them.'
      ]
    },
    {
      title: 'Revision and self-check',
      paragraphs: [
        'Quick recap: explain the chapter in one sentence, list its three most important ideas, and give one supporting example for each.',
        ...points.map((point, index) => `Recall ${index + 1}: Can you explain this without looking, then support it with a textbook example? ${point}`),
        'Self-check: Can you define the main term? Can you explain causes and consequences? Can you name the people, places, or institutions involved? Can you build a clear answer using evidence?',
        'Board exam focus: ' + chapter.exam,
        'These are expandable draft study notes built from the current interim chapter catalogue. They will be aligned to the exact textbook chapter titles and content after you provide the book PDFs.'
      ]
    }
  ];

  return pageContent;
}

function escapePdfText(text) {
  return text
    .normalize('NFKD')
    .replace(/[^\x20-\x7E]/g, '')
    .replaceAll('\\', '\\\\')
    .replaceAll('(', '\\(')
    .replaceAll(')', '\\)');
}

function wrapPdfText(text, maxLength = 88) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = '';
  words.forEach((word) => {
    if (line && `${line} ${word}`.length > maxLength) {
      lines.push(line);
      line = word;
    } else {
      line = line ? `${line} ${word}` : word;
    }
  });
  if (line) lines.push(line);
  return lines;
}

function downloadNotesPdf(subjectKey, chapter, bookName) {
  const subject = subjectCatalog[subjectKey];
  const pages = buildNotesPages(subjectKey, chapter, bookName);
  const objects = [];
  const pageIds = [];
  objects.push('<< /Type /Catalog /Pages 2 0 R >>');
  objects.push('');
  objects.push('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');

  pages.forEach((page, index) => {
    const pageId = objects.length + 1;
    const contentId = pageId + 1;
    pageIds.push(pageId);
    const textLines = [
      { text: `${subject.name} | ${bookName} | ${chapter.title}`, size: 17, gap: 28 },
      { text: page.title, size: 13, gap: 23 },
      ...page.paragraphs.flatMap((paragraph) => [
        ...wrapPdfText(paragraph).map((line) => ({ text: line, size: 10, gap: 14 })),
        { text: '', size: 10, gap: 8 }
      ]),
      { text: `Study notes | Page ${index + 1} of ${pages.length}`, size: 9, gap: 16 }
    ];
    let y = 790;
    const commands = ['BT', '/F1 10 Tf'];
    textLines.forEach((line, lineIndex) => {
      y -= line.gap;
      if (y < 42) return;
      if (lineIndex < 2) commands.push(`/F1 ${line.size} Tf`);
      else if (lineIndex === 2) commands.push('/F1 10 Tf');
      commands.push(`1 0 0 1 52 ${y} Tm (${escapePdfText(line.text)}) Tj`);
    });
    commands.push('ET');
    const stream = commands.join('\n');
    objects.push(`<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 3 0 R >> >> /Contents ${contentId} 0 R >>`);
    objects.push(`<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`);
  });

  objects[1] = `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${pageIds.length} >>`;
  let pdf = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, index) => {
    offsets.push(pdf.length);
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
  });
  const xrefOffset = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, '0')} 00000 n \n`;
  });
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`;

  const url = URL.createObjectURL(new Blob([pdf], { type: 'application/pdf' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `${subjectKey}-${chapter.id}-study-notes.pdf`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function renderNotesContent(subjectKey, chapterId) {
  const subject = subjectCatalog[subjectKey];
  const chapter = subject.chapters.find((item) => item.id === chapterId);
  const verifiedNotes = subject.verifiedNoteContent?.[chapterId];
  if (!chapter) {
    contentArea.innerHTML = '<p>Please select a valid chapter.</p>';
    return;
  }

  if (!verifiedNotes) {
    const fileName = subject.bookFiles?.[chapter.bookIndex];
    const sourceLink = fileName ? `<a href="books/${fileName}" target="_blank" rel="noopener noreferrer">Open the source textbook PDF</a>` : '';
    contentArea.innerHTML = `
      <h3>${subject.name} · ${chapter.name}</h3>
      <p>Verified notes for this chapter have not been prepared from the supplied textbook yet. The earlier placeholder notes are no longer shown.</p>
      ${sourceLink}
    `;
    return;
  }

  const bookName = bookSelect.options[bookSelect.selectedIndex]?.text || 'Book/part not selected';
  const pages = buildNotesPages(subjectKey, verifiedNotes, bookName);
  contentArea.innerHTML = `
    <div class="notes-heading">
      <div>
        <p class="eyebrow">Chapter notes · six pages</p>
        <h3>${subject.name} · ${verifiedNotes.title}</h3>
        <p class="selected-book">${bookName}</p>
      </div>
      <button class="primary-btn" id="downloadNotes" type="button">Download notes PDF</button>
    </div>
    <div class="notes-reader">
      ${pages.map((page, index) => `
        <article class="notes-page">
          <span class="page-number">${String(index + 1).padStart(2, '0')} / 06</span>
          <h4>${page.title}</h4>
          ${page.paragraphs.map((paragraph) => `<p>${paragraph}</p>`).join('')}
        </article>
      `).join('')}
    </div>
  `;
  document.getElementById('downloadNotes').addEventListener('click', () => downloadNotesPdf(subjectKey, verifiedNotes, bookName));
}

function renderTextbookContent(subjectKey, chapterId) {
  const subject = subjectCatalog[subjectKey];
  const chapterName = subject.chapters.find((chapter) => chapter.id === chapterId)?.name || '';
  const bookIndex = Number(bookSelect.value);
  const bookName = subject.books[bookIndex];
  const fileName = subject.bookFiles?.[bookIndex];
  if (!fileName) {
    contentArea.innerHTML = `<h3>${subject.name} · ${chapterName}</h3><p>No original textbook PDF for ${bookName || subject.name} has been supplied yet.</p>`;
    return;
  }
  const localFile = `books/${fileName}`;
  contentArea.innerHTML = `
    <h3>${bookName}</h3>
    ${chapterName ? `<p class="book-context">${subject.name} · ${chapterName}</p>` : ''}
    <div class="book-list">
      <div class="book-item">
        <strong>Original textbook PDF</strong>
        <div class="book-actions">
          <a href="${localFile}" target="_blank" rel="noopener noreferrer">Open PDF</a>
          <a href="${localFile}" download>Download</a>
        </div>
      </div>
    </div>
  `;
}

function renderQuizCard(subjectKey, chapterId) {
  const subject = subjectCatalog[subjectKey];
  const chapterName = subject.chapters.find((chapter) => chapter.id === chapterId)?.name || subject.chapters[0].name;
  const hasVerifiedQuestions = Boolean(subject.verifiedQuestionBank?.[chapterId]?.length);
  if (!hasVerifiedQuestions) {
    const chapter = subject.chapters.find((item) => item.id === chapterId);
    const fileName = subject.bookFiles?.[chapter?.bookIndex];
    const sourceLink = fileName ? `<a href="books/${fileName}" target="_blank" rel="noopener noreferrer">Open the source textbook PDF</a>` : '';
    const paperLink = subject.pyqSource ? `<a href="${subject.pyqSource}" target="_blank" rel="noopener noreferrer">Download official 2025 board papers (ZIP)</a>` : '';
    contentArea.innerHTML = `<h3>${subject.name} · ${chapterName}</h3><p>Interactive chapter questions are not ready yet. Use the supplied textbook or official paper bundle for verified practice.</p><div class="book-actions">${sourceLink}${paperLink}</div>`;
    return;
  }
  contentArea.innerHTML = `
    <h3>${subject.name} • ${chapterName}</h3>
    <div class="book-list">
      <div class="book-item">
        <strong>Quiz mode</strong>
        <div>
          <a href="quiz.html?subject=${subjectKey}&book=${bookSelect.value}&chapter=${chapterId}" target="_blank" rel="noopener noreferrer">Open ${subject.name} quiz setup</a>
        </div>
      </div>
    </div>
  `;
}

function renderPreviousYearContent(subjectKey, chapterId) {
  const subject = subjectCatalog[subjectKey];
  const chapterName = subject.chapters.find((chapter) => chapter.id === chapterId)?.name;
  const questions = subject.verifiedPreviousYears || [];
  const bookName = subject.books[Number(bookSelect.value)];
  const context = [bookName, chapterName].filter(Boolean).join(' · ');
  contentArea.innerHTML = `
    <h3>${subject.name}${context ? ` · ${context}` : ''}</h3>
    ${subject.pyqSource ? `<a class="primary-btn" href="${subject.pyqSource}" target="_blank" rel="noopener noreferrer">Download official 2025 question papers (ZIP)</a>` : ''}
    ${questions.length
      ? `<div class="question-list">${questions.map((question) => `<div class="question-item">${question}</div>`).join('')}</div>`
      : '<p>Choose Class XII, this subject, and an exam year in the official archive. Textbooks supplied to this site are not past papers, so no questions are labelled as previous-year questions unless verified.</p>'}
    <a class="primary-btn" href="https://www.cbse.gov.in/cbsenew/question-paper.html" target="_blank" rel="noopener noreferrer">Open official CBSE question-paper archive</a>
  `;
}

function renderStudyContent() {
  const subject = subjectCatalog[selectedSubject];
  const chapter = getSelectedChapter();
  const chapterId = chapter?.id || '';
  selectedSubjectTitle.textContent = subject.name;

  if (selectedMode === 'pyq') {
    renderPreviousYearContent(selectedSubject, chapterId);
    return;
  }

  if (!chapter) {
    if (selectedMode === 'textbook') {
      renderTextbookContent(selectedSubject, '');
      return;
    }
    contentArea.innerHTML = `
      <div class="chapter-empty-state">
        <h3>${subject.chapters.length ? 'Enter the exact chapter title' : 'Chapter list not indexed yet'}</h3>
        <p>${subject.chapters.length ? 'Choose the correct book/part, then type the chapter name exactly as printed on its contents page. Suggestions appear as you type; notes open only when the title matches.' : 'The original PDF is available in Textbook mode. Chapter names for this book are not available in the searchable catalogue yet.'}</p>
      </div>
    `;
    return;
  }

  if (selectedMode === 'notes') {
    renderNotesContent(selectedSubject, chapterId);
  } else if (selectedMode === 'textbook') {
    renderTextbookContent(selectedSubject, chapterId);
  } else if (selectedMode === 'quiz') {
    renderQuizCard(selectedSubject, chapterId);
  } else {
    renderPreviousYearContent(selectedSubject, chapterId);
  }
}

function updateStudyPanel() {
  const subject = subjectCatalog[selectedSubject];
  selectedSubjectTitle.textContent = subject.name;
  modeButtons.forEach((button) => {
    const available = !subject.bookOnly || button.dataset.mode === 'textbook';
    button.hidden = !available;
    if (available) button.classList.toggle('active', button.dataset.mode === selectedMode);
  });
  if (subject.bookOnly) {
    selectedMode = 'textbook';
    modeButtons.forEach((button) => button.classList.toggle('active', button.dataset.mode === selectedMode));
  } else if (selectedMode === 'textbook') {
    selectedMode = 'notes';
    modeButtons.forEach((button) => button.classList.toggle('active', button.dataset.mode === selectedMode));
  }
  populateBookSelect();
  populateChapterSelect();
  renderStudyContent();
}

subjectSearch.addEventListener('input', renderSuggestions);

bookSelect.addEventListener('change', () => {
  populateChapterSelect();
  renderStudyContent();
});

chapterSearch.addEventListener('input', () => {
  selectedChapterId = getSelectedChapter()?.id || '';
  updateChapterSuggestions();
  renderStudyContent();
});

resetButton.addEventListener('click', () => {
  selectedSubject = subjectList[0];
  selectedChapterId = subjectCatalog[selectedSubject].chapters[0].id;
  selectedMode = 'notes';
  modeButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === selectedMode);
  });
  updateStudyPanel();
});

modeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    selectedMode = button.dataset.mode;
    modeButtons.forEach((modeButton) => modeButton.classList.toggle('active', modeButton === button));
    renderStudyContent();
  });
});

buildSubjectCards();
buildBookShelf();
selectedSubject = subjectList[0];
selectedChapterId = subjectCatalog[selectedSubject].chapters[0].id;
updateStudyPanel();
renderSuggestions();

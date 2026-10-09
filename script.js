const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

const subjectButtons = document.querySelectorAll('.subject');
const bookCards = document.querySelectorAll('.book-card');
const searchInput = document.getElementById('bookSearch');

let activeFilter = 'all';

function filterBooks() {
  const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

  bookCards.forEach((card) => {
    const subject = card.dataset.subject;
    const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
    const paragraph = card.querySelector('p')?.textContent.toLowerCase() || '';
    const matchesFilter = activeFilter === 'all' || subject === activeFilter;
    const matchesQuery = !query || title.includes(query) || paragraph.includes(query) || subject.includes(query);

    card.classList.toggle('hidden', !(matchesFilter && matchesQuery));
  });
}

subjectButtons.forEach((button) => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    subjectButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
    filterBooks();
  });
});

if (searchInput) {
  searchInput.addEventListener('input', filterBooks);
}

filterBooks();

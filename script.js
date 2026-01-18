// ===============================
// THEME TOGGLE (FIXED & STABLE)
// ===============================
const toggleSwitch = document.getElementById('theme-switch');
const body = document.body;

function applyTheme(theme) {
    if (theme === 'light') {
        body.classList.add('light-mode');
        toggleSwitch.checked = true;
    } else {
        body.classList.remove('light-mode');
        toggleSwitch.checked = false;
    }

    // força repaint (corrige bugs visuais)
    body.style.display = 'none';
    body.offsetHeight;
    body.style.display = '';
}

// Tema salvo
const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

// Listener
toggleSwitch.addEventListener('change', () => {
    const newTheme = toggleSwitch.checked ? 'light' : 'dark';
    localStorage.setItem('theme', newTheme);
    applyTheme(newTheme);
});

console.log(
    '%cDeevChado Loads',
    'color:#4ade80;font-weight:bold;',
    '| Tema:',
    savedTheme
);


// ===============================
// SEARCH / FILTER (Games)
// ===============================
const searchInput = document.getElementById('searchInput');
const gameCards = document.querySelectorAll('.game-card');
const noResults = document.getElementById('noResults');

// Cache dos títulos (performance)
const cardsData = Array.from(gameCards).map(card => ({
    element: card,
    title: card.querySelector('h2')?.textContent.toLowerCase() || ''
}));

// Função de fade (usando CSS existente)
function showCard(card) {
    card.style.display = '';
    card.style.opacity = '0';
    card.style.transform = 'translateY(10px)';

    requestAnimationFrame(() => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
}

function hideCard(card) {
    card.style.transition = 'opacity 0.2s ease';
    card.style.opacity = '0';

    setTimeout(() => {
        card.style.display = 'none';
    }, 200);
}

// Listener de busca
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase().trim();
    let visibleCount = 0;

    cardsData.forEach(({ element, title }) => {
        if (!filter || title.includes(filter)) {
            if (element.style.display === 'none') {
                showCard(element);
            }
            visibleCount++;
        } else {
            hideCard(element);
        }
    });

    // Mensagem "nenhum resultado"
    noResults.style.display =
        visibleCount === 0 && filter !== '' ? 'block' : 'none';
});

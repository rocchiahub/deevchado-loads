// Toggle de tema claro/escuro - salva preferência no localStorage
const toggleSwitch = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme') || 'dark'; // Default dark

if (currentTheme === 'light') {
    document.body.classList.add('light-mode');
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        document.body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});

// Log simples para debug (opcional, pode remover)
console.log('DeevChado Loads V1.14 carregado! Tema atual:', currentTheme);

const searchInput = document.getElementById('searchInput');
        const gameCards = document.querySelectorAll('.game-card');
        const noResults = document.getElementById('noResults');

        searchInput.addEventListener('input', function() {
            const filter = searchInput.value.toLowerCase().trim();

            let visibleCount = 0;

            gameCards.forEach(card => {
                const titleElement = card.querySelector('h2');
                if (!titleElement) return; // segurança

                const title = titleElement.textContent.toLowerCase();

                if (title.includes(filter)) {
                    card.style.display = ''; // mostra (volta ao default do CSS)
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            });

            // Mostra mensagem se nada for encontrado
            noResults.style.display = (visibleCount === 0 && filter !== '') ? 'block' : 'none';
        });

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
console.log('DeevChado Loads V0.6 carregado! Tema atual:', currentTheme);

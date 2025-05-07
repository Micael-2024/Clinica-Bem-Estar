document.addEventListener('DOMContentLoaded', () => {
    // Lógica para mostrar/ocultar senha na tela de login
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const loginSenhaInput = document.getElementById('loginSenha');
    const loginForm = document.getElementById('loginForm');

    if (toggleLoginPassword && loginSenhaInput) {
        toggleLoginPassword.addEventListener('click', () => {
            const type = loginSenhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
            loginSenhaInput.setAttribute('type', type);
            toggleLoginPassword.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
        });
    }

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            event.preventDefault(); 
            window.location.href = 'agendamento.html';
        });
    }
});
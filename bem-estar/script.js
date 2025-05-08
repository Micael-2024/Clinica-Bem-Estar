document.addEventListener('DOMContentLoaded', () => {
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

    const toggleCadastroPassword = document.getElementById('toggleCadastroPassword');
    const cadastroSenhaInput = document.getElementById('cadastroSenha');

    if (toggleCadastroPassword && cadastroSenhaInput) {
        toggleCadastroPassword.addEventListener('click', () => {
            const type = cadastroSenhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
            cadastroSenhaInput.setAttribute('type', type);
            toggleCadastroPassword.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
        });
    }

    const toggleConfirmarPassword = document.getElementById('toggleConfirmarPassword');
    const confirmarSenhaInput = document.getElementById('confirmarSenha');

    if (toggleConfirmarPassword && confirmarSenhaInput) {
        toggleConfirmarPassword.addEventListener('click', () => {
            const type = confirmarSenhaInput.getAttribute('type') === 'password' ? 'text' : 'password';
            confirmarSenhaInput.setAttribute('type', type);
            toggleConfirmarPassword.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
        });
    }

    const agendamentoFormulario = document.getElementById('agendamentoForm');
    if (agendamentoFormulario) {
        agendamentoFormulario.addEventListener('submit', (event) => {
            event.preventDefault();
            const nomePaciente = document.getElementById('nomePaciente').value;
            const dataExame = document.getElementById('dataExame').value;
            const horaExame = document.getElementById('horaExame').value;
            const tipoExame = document.getElementById('tipoExame').value;

            alert(`Agendamento realizado!\nPaciente: ${nomePaciente}\nData: ${dataExame}\nHorário: ${horaExame}\nExame: ${tipoExame}`);
        });
    }
});
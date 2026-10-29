const form = document.querySelector('.login-form');
const campoEmail = document.getElementById('email');
const campoSenha = document.getElementById('senha');

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = campoEmail.value.trim();
    const senha = campoSenha.value;

    if (!regexEmail.test(email)) {
        alert('Email inválido: o formato deve ser exemplo@dominio.com');
    }

    if (senha.length < 6) {
        alert('Senha inválida: deve ter no mínimo 6 caracteres');
    }
});
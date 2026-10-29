const botoesAdicionar = document.querySelectorAll('.botao-adicionar');
const listaItens = document.getElementById('carrinho-itens');
const msgVazio = document.getElementById('carrinho-vazio');
const contador = document.getElementById('carrinho-contador');
const totalEl = document.getElementById('carrinho-total');
const botaoPresentear = document.getElementById('botao-presentear');

let itens = [];

function precoParaCentavos(texto) {
    const numero = texto.replace('R$', '').trim().replace(/\./g, '').replace(',', '.');
    return Math.round(parseFloat(numero) * 100);
}

function formatarMoeda(centavos) {
    return (centavos / 100).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function atualizarCarrinho() {
    listaItens.innerHTML = '';

    itens.forEach((item, indice) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.nome} - ${formatarMoeda(item.preco)} <button class="botao-remover" type="button">×</button>`;

        li.querySelector('.botao-remover').addEventListener('click', () => {
            itens.splice(indice, 1);
            atualizarCarrinho();
        });

        listaItens.appendChild(li);
    });

    const total = itens.reduce((soma, item) => soma + item.preco, 0);

    contador.textContent = itens.length;
    contador.setAttribute('aria-label', `${itens.length} itens`);
    totalEl.textContent = formatarMoeda(total);
    msgVazio.hidden = itens.length > 0;
    botaoPresentear.disabled = itens.length === 0;
}

botoesAdicionar.forEach((botao) => {
    botao.addEventListener('click', () => {
        const info = botao.closest('.produto-info');
        const nome = info.querySelector('h2').textContent;
        const preco = precoParaCentavos(info.querySelector('h3').textContent);

        itens.push({ nome, preco });
        atualizarCarrinho();
    });
});
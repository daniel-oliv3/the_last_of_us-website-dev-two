/* ======= script.js ======= */


/* Passo 1 */
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');


/* Passo 2 */
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        /* Passo 3 */
        desativarBotaoSelecionado();
        /* Passo 4 */
        selecionarBotaoCarrossel(botao);
        /* Passo 5 */
        esconderImagemAtiva();
        /* Passo 6 */
        mostrarImagemDeFundo(indice);
    });
});



/*Functions*/
function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}



/*Lógica

OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correnspondente

- passo 1 - dar um jeito de pegar o elemento HTML dos botoes
- passo 2 - dar um jeito de indentificar o clique do usuario no botão
- passo 3 - desmarcar o botão selecionado anterior
- passo 4 - marcar o botão clicado como se estivesse selecionado
- passo 5 - esconder a imagem ativa de fundo
- passo 6 - fazer aparecer a imagem correspondente ao botão clicado
*/






/*
    Autor: Daniel Oliveira
    Email: danieloliveira.webmaster@gmail.com
    Manaus/Amazonas/Brasil
    14/03/2023
*/
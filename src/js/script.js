/* ======= script.js ======= */


/* Passo 1 */
const botoesCarrossel = document.querySelectorAll('.botao');
//console.log(botoesCarrossel);


/* Passo 2 */
botoesCarrossel.forEach((botao) => {
    //console.log(botao);
    botao.addEventListener('click', () => {
        //console.log('Clicou no botão');
        /* Passo 3 */
        const botaoSelecionado = document.querySelector('.selecionado');
        // console.log(botaoSelecionado.classList);
        botaoSelecionado.classList.remove('selecionado');
        /* Passo 4 */
        botao.classList.add('selecionado');
        /* Passo 5 */
        const 
    });
});



// const botao1 = document.getElementById('botao1');
// //console.log(botao1);
// botao1.addEventListener('click', () => {
//     //console.log('clicou no botão 1');
// });









/* Passo 6 */

























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
/*
    Objetivo 1 - Quando o Usuário Clicar no Botão de Mostrar Mais Deve Abrir Os Projetos Que Estão Escondidos no HTML.

        Passo 1 - Pegar o Botão Mostrar Mais no JS Pra Poder Verificar Quando o Usuário Clicar Em Cima Dele.

        Passo 2 - Identificar o Clique No Botão.

        Passo 3 - Adicionar a Classe Ativo Nos Projetos Escondidos.

    Objetivo 2 - Esconder o Botão de Mostrar Mais.

        Passo 1 - Pegar o Botão e Esconder Ele.
*/


const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}
function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

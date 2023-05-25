let pratoEscolhido = '';
let bebidaEscolhido = '';
let sobremesaEscolhido = '';

function ativarBotao(){
    if(pratoEscolhido !== ''){
        if(bebidaEscolhido !== ''){
            if(sobremesaEscolhido !== ''){
                const botao = document.querySelector('.fechar');
                botao.classList.add('botao-ativado');
                botao.removeAttribute('disabled');
                botao.innerHTML = 'Fechar pedido';
            }
        }
    }
}

function selecionarPrato(selecao){
    const selecionado = document.querySelector('.container-prato .selecionado');
    if( selecionado !== null){
        selecionado.classList.remove('selecionado');
    }
    pratoEscolhido = document.querySelector(selecao);
    pratoEscolhido.classList.add('selecionado');
    
    ativarBotao();
}

function selecionarBebida(selecao){
    const selecionado = document.querySelector('.container-bebida .selecionado');
    if( selecionado !== null){
        selecionado.classList.remove('selecionado');
    }
    bebidaEscolhido = document.querySelector(selecao);
    bebidaEscolhido.classList.add('selecionado');
    
    ativarBotao();
}

function selecionarSobremesa(selecao){
    const selecionado = document.querySelector('.container-sobremesa .selecionado');
    if( selecionado !== null){
        selecionado.classList.remove('selecionado');
    }
    sobremesaEscolhido = document.querySelector(selecao);
    sobremesaEscolhido.classList.add('selecionado');
    
    ativarBotao();
}


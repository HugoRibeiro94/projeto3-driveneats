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

function somarPedido(){
    const prato = document.querySelector('.container-prato .selecionado .preço').innerText;
    const bebida = document.querySelector('.container-bebida .selecionado .preço').innerText;
    const sobremesa = document.querySelector('.container-sobremesa .selecionado .preço').innerText;

    const preçoPrato = prato.slice(3);
    const preçoBebida = bebida.slice(3);
    const preçoSobremesa = sobremesa.slice(3);
    
    let soma = parseInt(preçoPrato) + parseInt(preçoBebida) + parseInt(preçoSobremesa);
    enviarPedido(soma)
}

function enviarPedido(soma){
    const prato = document.querySelector('.container-prato .selecionado .descriçao').innerText;
    const bebida = document.querySelector('.container-bebida .selecionado .descriçao').innerText;
    const sobremesa = document.querySelector('.container-sobremesa .selecionado .descriçao').innerText;
    const mensagem = `Olá, gostaria de fazer o pedido\n
    -Prato: ${prato}\n
    -Bebida: ${bebida}\n
    -Sobremesa: ${sobremesa}\n
    -Total:R$${soma},00`;
    const urlText = encodeURIComponent(mensagem);
    const url = `https://wa.me/5524981030211?text=${urlText}`;
    window.open(url);
}
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

    let preçoPrato = prato.replace('R$','');
    preçoPrato = preçoPrato.replace(',','.');
    preçoPrato = Number(preçoPrato);

    let preçoBebida =  bebida.replace('R$','');
    preçoBebida = preçoBebida.replace(',','.');
    preçoBebida = Number(preçoBebida);

    let preçoSobremesa =  sobremesa.replace('R$','');
    preçoSobremesa = preçoSobremesa.replace(',','.');
    preçoSobremesa = Number(preçoSobremesa);
    
    let soma = preçoPrato + preçoBebida + preçoSobremesa;
    enviarPedido(soma)
}

function enviarPedido(soma){
    const nome = prompt('Digite seu nome:');
    const endereço = prompt('Digite seu endereço:');
    const prato = document.querySelector('.container-prato .selecionado .descriçao').innerText;
    const bebida = document.querySelector('.container-bebida .selecionado .descriçao').innerText;
    const sobremesa = document.querySelector('.container-sobremesa .selecionado .descriçao').innerText;

    
    const mensagem = `Olá, gostaria de fazer o pedido\n
    -Prato: ${prato}\n
    -Bebida: ${bebida}\n
    -Sobremesa: ${sobremesa}\n
    -Total:R$${soma.toFixed(2)}\n
    - Nome: ${nome}\n
    -Endereço: ${endereço}`;
    const urlText = encodeURIComponent(mensagem);
    const url = `https://wa.me/5524981030211/?text=${urlText}`;
    window.open(url);
}

function ativarBonus(){
    
    const bonus = document.querySelector('.bonus');
    bonus.classList.remove('display');

    const topo = document.querySelector('.topo');
    topo.classList.add('opacity');

    const body = document.querySelector('.container');
    body.classList.add('opacity');

    const rodape = document.querySelector('.rodape');
    rodape.classList.add('opacity');

    const prato = document.querySelector('.container-prato .selecionado .descriçao').innerText;
    const valorPrato = document.querySelector('.container-prato .selecionado .preço').innerText;
    const item1 = document.querySelector('.item1');
    item1.innerHTML = `${prato} ${valorPrato}`
   
    const bebida = document.querySelector('.container-bebida .selecionado .descriçao').innerText;
    const valorBebida = document.querySelector('.container-bebida .selecionado .preço').innerText;
    const item2 = document.querySelector('.item2');
    item2.innerHTML = `${bebida} ${valorBebida}`

    const sobremesa = document.querySelector('.container-sobremesa .selecionado .descriçao').innerText;
    const valorSobremesa = document.querySelector('.container-sobremesa .selecionado .preço').innerText;
    const item3 = document.querySelector('.item3');
    item3.innerHTML = `${sobremesa} ${valorSobremesa}`

    let preçoPrato = valorPrato.replace('R$','');
    preçoPrato = preçoPrato.replace(',','.');
    preçoPrato = Number(preçoPrato);

    let preçoBebida =  valorBebida.replace('R$','');
    preçoBebida = preçoBebida.replace(',','.');
    preçoBebida = Number(preçoBebida);

    let preçoSobremesa =  valorSobremesa.replace('R$','');
    preçoSobremesa = preçoSobremesa.replace(',','.');
    preçoSobremesa = Number(preçoSobremesa);
    
    let soma = preçoPrato + preçoBebida + preçoSobremesa;
    const total = document.querySelector('.total');
    total.innerHTML = `TOTAL R$${soma.toFixed(2)}`
}

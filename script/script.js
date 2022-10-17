// Selecionando os pratos
let prato;
let pratoSelecionado = false;
let valorPrato;

function selecionarPrato1(){
    document.getElementById("frango1").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "transparent";
    document.getElementById("frango3").style.borderColor = "transparent";
    document.getElementById("check-prato1").style.display = "block";
    document.getElementById("check-prato2").style.display = "none";
    document.getElementById("check-prato3").style.display = "none";
    prato = "Frango Yin Yang";
    pratoSelecionado = true;
    valorPrato = 14.90;
    verificaSelecionado();
}

function selecionarPrato2(){
    document.getElementById("frango2").style.borderColor = "#32B72F";
    document.getElementById("frango1").style.borderColor = "transparent";
    document.getElementById("frango3").style.borderColor = "transparent";
    document.getElementById("check-prato2").style.display = "block";
    document.getElementById("check-prato1").style.display = "none";
    document.getElementById("check-prato3").style.display = "none";
    prato = "Frango Yin Yang";
    pratoSelecionado = true;
    valorPrato = 14.90;
    verificaSelecionado();
}

function selecionarPrato3(){
    document.getElementById("frango3").style.borderColor = "#32B72F";
    document.getElementById("frango2").style.borderColor = "transparent";
    document.getElementById("frango1").style.borderColor = "transparent";
    document.getElementById("check-prato3").style.display = "block";
    document.getElementById("check-prato1").style.display = "none";
    document.getElementById("check-prato2").style.display = "none";
    prato = "Frango Yin Yang";
    pratoSelecionado = true;
    valorPrato = 14.90;
    verificaSelecionado();
}

// Selecionando as bebibas
let bebida;
let bebidaSelecionada = false;
let valorBebida;

function selecionarBebida1(){
    document.getElementById("bebida1").style.borderColor = "#32B72F";
    document.getElementById("bebida2").style.borderColor = "transparent";
    document.getElementById("bebida3").style.borderColor = "transparent";
    document.getElementById("check-bebida1").style.display = "block";
    document.getElementById("check-bebida2").style.display = "none";
    document.getElementById("check-bebida3").style.display = "none";
    bebida = "Coquinha gelada";
    bebidaSelecionada = true;
    valorBebida = 4.90;
    verificaSelecionado();
}

function selecionarBebida2(){
    document.getElementById("bebida2").style.borderColor = "#32B72F";
    document.getElementById("bebida1").style.borderColor = "transparent";
    document.getElementById("bebida3").style.borderColor = "transparent";
    document.getElementById("check-bebida2").style.display = "block";
    document.getElementById("check-bebida1").style.display = "none";
    document.getElementById("check-bebida3").style.display = "none";
    bebida = "Coquinha gelada";
    bebidaSelecionada = true;
    valorBebida = 4.90;
    verificaSelecionado();
}

function selecionarBebida3(){
    document.getElementById("bebida3").style.borderColor = "#32B72F";
    document.getElementById("bebida1").style.borderColor = "transparent";
    document.getElementById("bebida2").style.borderColor = "transparent";
    document.getElementById("check-bebida3").style.display = "block";
    document.getElementById("check-bebida1").style.display = "none";
    document.getElementById("check-bebida2").style.display = "none";
    bebida = "Coquinha gelada";
    bebidaSelecionada = true;
    valorBebida = 4.90;
    verificaSelecionado();
}

// Selecionando as sobremesas
let sobremesa;
let sobremesaSelecionada = false;
let valorSobremesa;

function selecionarSobremesa1(){
    document.getElementById("sobremesa1").style.borderColor = "#32B72F";
    document.getElementById("sobremesa2").style.borderColor = "transparent";
    document.getElementById("sobremesa3").style.borderColor = "transparent";
    document.getElementById("check-sobremesa1").style.display = "block";
    document.getElementById("check-sobremesa2").style.display = "none";
    document.getElementById("check-sobremesa3").style.display = "none";
    sobremesa = "Pudim";
    sobremesaSelecionada = true;
    valorSobremesa = 7.90;
    verificaSelecionado();
}

function selecionarSobremesa2(){
    document.getElementById("sobremesa2").style.borderColor = "#32B72F";
    document.getElementById("sobremesa1").style.borderColor = "transparent";
    document.getElementById("sobremesa3").style.borderColor = "transparent";
    document.getElementById("check-sobremesa2").style.display = "block";
    document.getElementById("check-sobremesa1").style.display = "none";
    document.getElementById("check-sobremesa3").style.display = "none";
    sobremesa = "Pudim";
    sobremesaSelecionada = true;
    valorSobremesa = 7.90;
    verificaSelecionado();
}

function selecionarSobremesa3(){
    document.getElementById("sobremesa3").style.borderColor = "#32B72F";
    document.getElementById("sobremesa1").style.borderColor = "transparent";
    document.getElementById("sobremesa2").style.borderColor = "transparent";
    document.getElementById("check-sobremesa3").style.display = "block";
    document.getElementById("check-sobremesa1").style.display = "none";
    document.getElementById("check-sobremesa2").style.display = "none";
    sobremesa = "Pudim";
    sobremesaSelecionada = true;
    valorSobremesa = 7.90;
    verificaSelecionado();
}

// Fechar pedido
function fecharPedido(){
    const mensagem = `Olá, gostaria de fazer o pedido:\n
    - Prato: ${prato}\n
    - Bebida: ${bebida}\n
    - Sobremesa: ${sobremesa}\n
    Total: R$ ${(valorPrato + valorBebida + valorSobremesa).toFixed(2)}`;
    encodeURIComponent(mensagem);
    window.open("https://wa.me/5521923623623?text=" + mensagem);
}

function verificaSelecionado(){
    const pedidoFechado = document.querySelector(".fechar-pedido");
        if(pratoSelecionado === true && bebidaSelecionada === true && sobremesaSelecionada === true){
        document.getElementById("botao-fechar-pedido").style.backgroundColor = "#32B72F";
        pedidoFechado.innerHTML = "Fechar pedido";
        document.getElementById("texto-fechar-pedido").style.fontWeight = "bold";
        document.getElementById("botao-fechar-pedido").removeAttribute("disabled");
    }
}
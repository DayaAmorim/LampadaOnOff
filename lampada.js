/* CRIANDO VARIÁVEIS COM D.O.M */
const turnOn = document.getElementById("turnOn");
const turnOff = document.getElementById("turnOff");
const lamp = document.getElementById("lamp");


/* CRIANDO EVENTO DO BOTÃO */

turnOn.addEventListener("click", lampOn); //.addEventListener é um escutador para um evento acontecer, aqui diz que quando o usuário clicar vai buscar uma função
turnOff.addEventListener("click", lampOff);

/* EVENTO MOUSE-OVER QUANDO O PONTEIRO ESTIVER SOBRE A LÂMPADA*/
lamp.addEventListener("mouseover", lampOn); //passando o mouse por cima da lâmpada
lamp.addEventListener("mouseleave", lampOff); 
lamp.addEventListener("dblclick", lampBroken); // duplo clique em cima da lâmpada

function isLampBrokem(){
    return lamp.src.indexOf("quebrada")>-1 //se no src a imagem for a "quebrada" a lâmpada não liga, retona -1. IndexOf procura pela a palvra no src
};


function lampOn(){
if(!isLampBrokem()){
    lamp.src = "./img/ligada.jpg"
}

}

function lampOff(){
    if(!isLampBrokem()){
        lamp.src = "./img/desligada.jpg"
    }
}

function lampBroken(){
    lamp.src = '.img/quebrada.jpg'
}




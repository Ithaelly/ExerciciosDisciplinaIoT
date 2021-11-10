function mudar(){
    alert("A lâmpada mudou! Você que não viu ainda. rsrs");
    document.getElementById("result").innerHTML= "Mudou!";
    for (var i = 1; i <= 10; i++) {
        alert("Mudou "+ i);
    }
}

function alterarImagem(obj, caminhoDaImagem){
    document.getElementById(obj).src=caminhoDaImagem;
}
function alterarImagem2(obj, caminhoDaImagem){
    document.getElementById(obj).src=caminhoDaImagem;
}

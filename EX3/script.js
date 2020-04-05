function carregadoSucesso(){
    document.getElementById("paragrafo").innerHTML = "Carregado com sucesso";
}
function carregar(){
    document.getElementById("paragrafo").innerHTML = "<img src='https://media.giphy.com/media/y1ZBcOGOOtlpC/200.gif'>";
    setTimeout(carregadoSucesso,1000)
}
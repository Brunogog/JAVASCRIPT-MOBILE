aux2 = -1;
function escrevaNumeros() {
    const inicio = document.getElementById('inicio').value;
    const final = document.getElementById('final').value;
    aux = inicio;
    aux2++;
    aux = + aux2;
    if (aux <= final) {
        console.log(aux);
        Alert();
    } 
    else {
        console.log('voce chegou ao fim');
        var para = document.createElement("P");
        para.innerText = "Fim";
        document.body.appendChild(para);
        aux = 0;
        aux2 = -1;
    }
}
function Escrever() {
    var para = document.createElement("P");
    para.innerText = aux;
    document.body.appendChild(para);
    escrevaNumeros();
}
function Alert() {
    let tempo = setTimeout(Escrever, 1000);
}
window.onload = function () {
    let numero1 = prompt("Inicio: ")
    let numero2 = prompt("Fim: ")
    setTimeout(function aninhado() {
        if (numero1 <= numero2) {
            let x = numero1;
            const body = document.querySelector("body");
            const livre = document.createElement("p");

            livre.innerHTML = x;
            body.appendChild(livre);
            console.log(numero1)
        }
        numero1++
        setTimeout(aninhado, 1000);
    }, 1000);
}
window.onload = function () {
   timerId();
}

function despertador() {
   alert('Tempo esgotado!')
}

function despertar() {
   let input = document.querySelector('#despertador')
   setTimeout(despertador, input.value)
}
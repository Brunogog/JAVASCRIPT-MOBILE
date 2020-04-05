window.onload = function () {
   teste6()
}
function teste6() {
   let i = 0;
   setTimeout(() => alert(i), 100); // ?
   for (let j = 0; j < 100000000; j++) {
      i++;
   }
   console.log('Depois do loop')
}
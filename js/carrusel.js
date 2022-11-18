// Usamos el queryselector para seleccionar una clase
let carrusel = document.querySelector(".listas");

// Vatiable para dar el sceoll al máximo
let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth
let íntervalo = null;
// Será para la velocidad de la barra
let step = 1;

const start = () => {
    íntervalo = setInterval( function(){

        carrusel.scrollLeft = carrusel.scrollLeft + step;
    //Hará que la imagen retroceda
    if (carrusel.scrollLeft === maxScrollLeft) {
      step = step * -1;
    } else if (carrusel.scrollLeft === 0) {
      step = step * -1;
    }

    }, 20); // Tiempo del ítervalo
};

//Creamos un intervalo de alto
const stop = () => {
    clearInterval(íntervalo);
}

//Cuando pare el mause quiero que funcione el ítervalo de stop
carrusel.addEventListener("mouseover", () =>{
    stop();
})
carrusel.addEventListener("mouseout", () =>{
    start();
})
//Ejecute sólo
start();
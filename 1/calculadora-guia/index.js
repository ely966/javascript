const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonesNumeros = document.querySelectorAll(".numero");
/*agrupa,mos todos los numeros*/
const botonesOperadores = document.querySelectorAll(".operador");
// const calculadora =
//   new Calculadora(); /*crear una isntancia d enuetsra claculadora*/
// /*Pruebas*/

// // console.log(calculadora.sumar(2, 3));
// // console.log(calculadora.multiplicar(2, 3));
// // console.log(calculadora.dividir(2, 3));
const display = new Display(
  displayValorAnterior,
  displayValorActual
); /*llamar a la clase*/

/*segundo*/
botonesNumeros.forEach((boton) => {
  boton.addEventListener("click", () => display.agregarNumero(boton.innerHTML));
});
//a cada boton añadirle el evento click, y que al clickear llamar al metodo de display para agrege el numero
//boton.addEventListener("click", () => {
/*cada vez que se presione un boton. el numero esta dentro del boton en html*/
//  display.agregarNumero(boton.innerHTML);
//});

botonesOperadores.forEach((boton) => {
  boton.addEventListener("click", () =>
    display.computar(boton.value)
  ); /*valor es el tipo de operacion. añadimos un value en botones*/
});

[1, 2, 3, 4, 5, 6];
("text");
1234;
{
  PDX: "PORTLAND";
}

let telefono = "(12)123-345";
let autorizado = true;

undefined;
//CONDICION
if (autorizado) {
  document.write("Bienvenido");
} else {
  alert("No autorizado");
}

//fucntions

function sumar(a, b) {
  return a + b;
}
sumar(1, 2);
//========================================
let lista = [1, 2, 3, 4, 5, 6];
for (elemento of lista) {
  let suma = sumar(element, 5);
  console.log(suma);
}

while (true) {
  console.log(i++);
}

//================================

class Animal {
  constructor(nombre, sonido) {
    this.nombre = nombre;
    this.sonido = sonido;
  }

  hazSonido() {
    console.log("soy un" + this.nombre + " y " + this.sonido);
  }
}

let perro = new Animal("perro", "woof");
let gato = new Animal("cat", "miau");
let tigre = new Animal("tigre", "grr");

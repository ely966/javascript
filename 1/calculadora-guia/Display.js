/*Clase encargada de controlar la calculadora y que va a interactuar con nuestros botones. y mostrar lo que debemos mostrar en el display*/
/*contructor, que para instanciarla tendremos que amndarle valores. la clase necesita estops ds valores displayValorAnterior  displayValorActual */
class Display {
  constructor(displayValorAnterior, displayValorActual) {
    this.displayValorActual = displayValorActual;
    this.displayValorAnterior = displayValorAnterior;
    this.calculador = new Calculadora();
    this.tipoOperacion = undefined;

    /*Numeros que estamos guardando*/
    this.valorActual = "";
    this.valorAnterior = "";
  }
  /*Borrar el ultimo numero añadido*/

  borrar() {
    this.valorActual = this.valorActual
      .toString()
      .slice(
        0,
        -1
      ); /*recortarlo a su ultimo. recortar solamente su ultimo número*/

    this.imprimirValores(); /*para que se actualice nuestro display*/
  }

  /*borrar todo*/
  borrarTodo() {
    this.valorActual = "";
    this.valorAnterior = "";
    this.tipoOperacion = undefined;
    this.imprimirValores(); /*para que se actualice nuestro display*/
  }

  /*Computar, hacer las operaciones llamando a calculadora*/
  /*tipo=tipoDeOperacion*/
  computar(tipo) {
    /*si el tipo es distinto al  igual(=),entonces vamos a calcular.*/
    /*pero si añadimos 20 - 10, el tipo anterior sera un -, asi que va a calcular cuando le demos al igual*/
    this.tipoOperacion !== "igual" && this.calcular();

    /*porque ahora se añadiria el igual*/
    this.tipoOperacion = tipo;
    /*^si hay un valor actual pues ese, sino el anterior*/
    /*valor actual es el resultado que recibimos de la operacion*/
    this.valorAnterior = this.valorActual || this.valorAnterior;
    this.valorActual = "";
    this.signos = { sumar: "+", dividir: "%", multiplicar: "x", restar: "-" };

    this.imprimirValores(); /*sino no funcionará el = y no se mostrara correctamente en el display/pantalla*/
  }

  /*AgregarNumeros a nuetsra calculadora*/
  /*primero*/
  agregarNumero(numero) {
    /*al pulsar un boton, ese numero se la manda a la calculadora para guardarlo*/
    // this.valorActual = numero;
    /*concatenar para qu eun numero se coloque al lado del otro en vez de susutituir el numero, se colocara uno al lado del otro. pero 
    puedes poner ,mas de un punto asi que añadimos un if*/
    /*thisValorActual.includes('.') mesta preguntando si incluye el punto en su interior, es decir que ya haya sido añadido antes*/

    if (numero === "." && this.valorActual.includes(".")) {
      return; /*devuelva sin hacer anda y no lo añada*/
    }
    /*Si no se habia añadido un punto o es otro numero*/
    /*algunos momentos son numero y en otros string, asi que aqui los convertimso en string*/
    this.valorActual = this.valorActual.toString() + numero.toString();

    /*Imprimirlo en pantalla*/
    this.imprimirValores();
  }

  /*tercero*/
  /*Metodo para mostrar los numero pulsados en la pantalla/display*/
  imprimirValores() {
    /*textContent => vamos a susutituor su valor de contenido.resetear su texto de html */
    this.displayValorActual.textContent = this.valorActual;
    // this.displayValorAnterior.textContent = this.valorAnterior;
    //le añadimos el operacion*/
    //pero si e sun = no queremos que se muestre un signo, asi que diremos que sino es alguno de lso signos puestos, sera un string vacio
    this.displayValorAnterior.textContent = `${this.valorAnterior} ${
      this.signos[this.tipoOperacion] || ""
    }`;
  }

  /*Los datos que tienen en display y mandarlo a ala calculadora*/
  //this.valorActual = this.calculadora[this.tipoOperacion](valorAnterior,valorActual).toString();
  calcular() {
    /*Para poder pasearlo, dejar que sea un string y asi poder hacer calculos*/
    const valorAnterior = parseFloat(this.valorAnterior);
    const valorActual = parseFloat(this.valorActual);
    /*is valor actual o valor anterior, Cuando quieran hacer un numero de una string vacia. es uyn nome namber*/
    /*isNaN es no number si intenta hacer de un numero de un string que esta vacio*/

    if (isNaN(valorActual) || isNaN(valorAnterior)) {
      return; /*no se hace la operacion*/
    }

    /*si son numeros*/
    this.valorActual = this.calculador[this.tipoOperacion](
      valorAnterior,
      valorActual
    ).toString();
    // this.valorActual = this.calculadora[this.tipoOperacion](
    //   valorAnterior,
    //   valorActual
    // ).toString();
  }
}

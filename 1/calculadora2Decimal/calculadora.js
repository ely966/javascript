let total = 0.0;
let firstNumber = -1;
let secondNumber = -1;
let operation = "nan";
let showScreen = firstNumber + " " + operation + " " + secondNumber;

/*Funcion que borra*/

function clearAllValues() {
  total = 0.0;
  firstNumber = -1;
  secondNumber = -1;
  alert("Variable slimpiadas");
  document.getElementById("resultado").innerHTML = total;
}

/*Función que da valor a las variables*/
function checkValueToVar(numberValue) {
  //Si ya se introdujo el primer valor
  if (firstNumber < 0) {
    firstNumber = numberValue;
  } else if (firstNumber > 0 && secondNumber < 0 && operation == "nan") {
    //Si ya añadió el primer número,pero no ha añadido operador. saltará una viso de que añada el operador antes que el segundo número
    alert("Debes añadir el operador antes que el segundo número");
  } else if (firstNumber > 0 && secondNumber < 0 && operation !== "nan") {
    //Si ya añadió el primer número, pues se añadirça els egundo número
    secondNumber = numberValue;
  } else {
    alert("ya añadiste dos numeros");
  }
  showScreen = firstNumber + " " + operation + " " + secondNumber;
  document.getElementById("showScreen").innerHTML = showScreen;
  // console.log(firstNumber);
  // console.log(secondNumber);
}

//___//
//Check el operador introducido apra la operación, tambien se asegura del orden de que introduce en el orden correcto. Para evitar que añade el operador antes que el valor del primero numero
function checkOperation(operationValue) {
  //Si ya se introdujo el primer valor
  if (firstNumber < 0) {
    alert("No puedes añadir el operador antes que el primer número");
  } else {
    operation = operationValue;
  }

  showScreen = firstNumber + " " + operation + " " + secondNumber;
  document.getElementById("showScreen").innerHTML = showScreen;
}

/*Funcion que realiza la operación matemática. firstNumber, operation, secondNumber*/
function operations() {
  switch (operation) {
    case "+":
      total = firstNumber + secondNumber;
      console.log(total);

      break;
    case "-":
      total = firstNumber - secondNumber;
      console.log(total);
      break;
    case "x":
      total = firstNumber * secondNumber;
      console.log(total);
      break;
    case "/":
      total = firstNumber / secondNumber;

      console.log(total);
      break;
    case "%":
      // total = firstNumber % secondNumber;El 1% de 4 = 4*(1/100) = 4*0.01 = 0.04
      total = secondNumber * (firstNumber / 100);
      console.log(total);
      break;
  }

  /*Mostrar el resultado en pantallla*/
  document.getElementById("resultado").innerHTML = total;
  //clearAllValues();
}

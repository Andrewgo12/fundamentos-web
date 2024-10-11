document.getElementById("calcularBtn").addEventListener("click", calcularPeso);

function calcularPeso() {
  let continuar = true;
  document.getElementById("resultado").innerHTML = "";

  while (continuar) {
    let peso = obtenerPeso();
    let altura = obtenerAltura();
    let imc = calcularIMC(peso, altura);
    let clasificacion = determinarClasificacion(imc);
    mostrarResultado(imc, clasificacion);
    continuar = false;
  }
}

function obtenerPeso() {
  let peso;
  while (true) {
    peso = parseFloat(prompt("Ingrese su peso en kilogramos:"));
    if (!isNaN(peso) && peso > 0) {
      break;
    }
    alert("Por favor, ingrese un peso válido.");
  }
  return peso;
}

function obtenerAltura() {
  let altura;
  while (true) {
    altura = parseFloat(prompt("Ingrese su altura en centímetros (ej. 175):"));
    if (!isNaN(altura) && altura > 0) {
      break;
    }
    alert("Por favor, ingrese una altura válida en centímetros.");
  }
  return altura;
}

function calcularIMC(peso, altura) {
  return (peso * 10000) / (altura * altura);
}

function determinarClasificacion(imc) {
  if (imc < 18.5) {
    return "Desnutrición";
  } else if (imc >= 18.5 && imc < 24.9) {
    return "Peso Ideal";
  } else {
    return "Sobrepeso";
  }
}

function mostrarResultado(imc, clasificacion) {
  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML += "Tu IMC es: " + imc.toFixed(2) + "<br>";
  resultadoDiv.innerHTML += "Clasificación: " + clasificacion + "<br><br>";
}
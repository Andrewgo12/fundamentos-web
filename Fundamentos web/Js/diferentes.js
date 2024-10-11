document.addEventListener("DOMContentLoaded", function () {
    const btnAgregar = document.getElementById("btnAgregar");
    const contenedorAsignaturas = document.createElement("div");
    const calcularBtn = document.getElementById("calcular");
    const inputNumero = document.getElementById("numero");
    const resultadoMultiplicacion = document.getElementById("resultado");

    // Función recursiva para tabla de multiplicar
    function tablaMultiplicacionRecursiva(numero, i = 1) {
        if (i > 10) return '';
        return `${numero} x ${i} = ${numero * i}\n` + tablaMultiplicacionRecursiva(numero, i + 1);
    }

    // Manejar evento para generar tabla de multiplicar
    calcularBtn.addEventListener("click", function () {
        const numero = parseInt(inputNumero.value);
        let resultado = '';

        if (!isNaN(numero)) {
            resultado = `Tabla de multiplicar del ${numero}:\n` + tablaMultiplicacionRecursiva(numero);
            resultadoMultiplicacion.innerText = resultado;
        } else {
            resultadoMultiplicacion.innerText = 'Por favor, ingresa un número válido.';
        }
    });

    // Ejemplo de manipulación de arrays
    const frutas = ["Manzana", "Banana", "Naranja", "Fresa", "Uva"];
    const numeros = [10, 20, 30, 40, 50];

    console.log("Lista de frutas:");
    frutas.forEach(fruta => console.log(fruta));

    console.log("Lista de números:");
    numeros.forEach(numero => console.log(numero));

    frutas.push("Kiwi");
    console.log("Después de agregar una nueva fruta:");
    console.log(frutas);

    numeros.pop();
    console.log("Lista de números después de eliminar el último elemento:");
    console.log(numeros);

    frutas.splice(1, 2);
    console.log("Lista de frutas después de eliminar elementos:");
    console.log(frutas);
});
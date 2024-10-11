document.addEventListener("DOMContentLoaded", function () {
    let input = document.getElementById("textInput");
    let output = document.getElementById("output");
    let button = document.getElementById("addButton");

    if (button && input && output) {
        button.onclick = function () {
            let textValue = input.value;

            if (textValue.trim() === "") {
                alert("El campo de texto no puede estar vacío.");
                return;
            }
            if (textValue.length > 30) {
                alert("El texto no debe tener más de 30 caracteres.");
                return;
            }
            let newText = document.createElement("p");
            newText.innerText = textValue;
            output.appendChild(newText);
            input.value = "";
        };
    }
});
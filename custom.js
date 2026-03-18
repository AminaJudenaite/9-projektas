function isvedimas(input) {
    const display = document.getElementById('display');
    display.value += input;
}

function isvalyti() {
    display.value = "";
}

function skaiciuoti() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Klaida";
    }
}
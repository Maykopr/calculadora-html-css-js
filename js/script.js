const currentValue = document.querySelector(".currentValue");
const previousValue = document.querySelector('.previousValue');

function insert(value) {
    currentValue.innerHTML += value;
}
function clean() {
    currentValue.innerHTML = "";
}
function backspace() {
    if (currentValue.textContent) {
        currentValue.innerHTML = currentValue.innerHTML.substring(0, currentValue.innerHTML.length - 1);
    }
}
function result() {
    if (currentValue.textContent != 'erro') {
        currentValue.innerHTML = eval(currentValue.innerHTML)
        previousValue.innerHTML = currentValue.innerHTML;
    }
}
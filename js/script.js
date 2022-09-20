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
        currentValue.innerHTML = currentValue.innerHTML.slice(0, - 1);
    }
}
function result() {
    if (currentValue.textContent != 'erro') {
        currentValue.innerHTML = eval(currentValue.innerHTML)
        previousValue.innerHTML = currentValue.innerHTML;
    }
}
function filter(value) {
    if (currentValue.innerHTML.includes(value)) {
        return;
    } else {
        insert(value);
    }
}
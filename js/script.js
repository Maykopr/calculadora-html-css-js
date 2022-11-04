const currentValue = document.querySelector(".currentValue");
const previousValue = document.querySelector('.previousValue');

function insert(value) {
    if (currentValue.innerHTML.length > 20) {
        return
    }
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
        tryEval(currentValue.innerHTML);
        previousValue.innerHTML = currentValue.innerHTML;
    }
}
function tryEval(e) {
    try {
        currentValue.innerHTML = eval(e)
    } catch { currentValue.innerHTML = "ERRO" }

}


function filterDot(value) {
    let fator = currentValue.innerHTML.split(new RegExp('[-| +|*| /]'));
    if (fator[fator.length - 1].includes(value)) {
        return;
    } else {
        insert(value);
    }
}
function filterOperator(value) {
    let lastDigit = currentValue.innerHTML.substring(currentValue.innerHTML.length - 1);
    if (lastDigit === value) {
        return;
    }
    if (lastDigit == '-' || lastDigit == '+' || lastDigit == '*' || lastDigit == '/') {
        currentValue.innerHTML = (currentValue.innerHTML.slice(0, - 1) + value);
    }
    else {
        insert(value);
    }
}


function add(){
    // we'll fill this in shortly
}
function subtract() {
    // we'l fill this in shortly
}
function multiply() {
    // we'll fill this in shortly
}
function divide() {
    // we'll fill this in shortly
}

function add(a,b) {
    return a + b;
}
function subtract(a,b) {
    return a - b;
}
function multiply(a,b) {
    return a * b;
}
function divide(a,b) {
    return a / b;
}
function increment(n) {
    return n + 1;
}
function decrement(n) {
    return n - 1;
}
function makeInc(string) {
    return parseInt(string, 10);
}
function preserveDecimal(string) {
    return parseFloat(string);
}
function makeInt(n) {
    const parsed = parseInt(n, 10);
    return isNaN(parsed) ? NaN : parsed;
  }
  
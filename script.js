let num1 = null;
let num2 = null;
let ans = null;
let operator = null;
function add (a,b) {
    return parseFloat(a)+parseFloat(b);
}

function subtract(a,b){
    return parseFloat(a)-parseFloat(b);
}

function multiply (a,b){
    return parseFloat(a)*parseFloat(b);
}

function divide (a,b){
    return parseFloat(a)/parseFloat(b);
}

function exponent(a,b){
    return parseFloat(a)**parseFloat(b);
}

function squareroot(x){
    return Math.sqrt(parseFloat(x));
}

function percentage (x, per){
    if (!per){
        per = 1;
    }
    return (parseFloat(x)/100)*per;
}

function changeSign(x){
    if (x === 0){
        x = 0;
    }
    else if (x < 0){
        x= Math.abs(x);
    }
    else {
        x= -(Math.abs(x));
    }
    return parseFloat(x);
}

function factorial(x){
    if (x < 0) {
    return -1;
    }
    let ansF = 1;
    if (x===0|| x===1){
        return 1;
    }
    for (let i = x; i >= 1; i--){
        ansF *= i;
    }
    return parseFloat(ansF);
}

function operate (){
    switch(operator) {
        case '+':
            ans = add(num1,num2);
            break;
        case '-':
            ans = subtract(num1, num2);
            break;
        case '*':
            ans = multiply(num1, num2);
            break;
        case '/':
            ans = divide(num1, num2);
            break;
        case '^':
            ans = exponent(num1, num2);
            break;
        case '√':
            ans = squareroot(num1,num2);
            break;
        case '%':
            ans = percentage(num1);
            break;
        case '±':
            ans = changeSign(num1);
            break;
        case '!':
            ans = factorial(num1);
            break;
    }
    num1 = ans;
    num2 = null;
    ans = parseFloat((ans).toFixed(12))
    return ans;
}
let writeHere = document.getElementById("numberArea");
let copyHere = document.getElementById("prevArea");
let twoNumsNeeded = ['+', '-', '*', '/','^'];
let onlyOne = ['√', '%', '!', '±'];
let count = 0;

function addNum(x){
    if (count >= 32){
        alert("max digits entered")
    }
    else {
    writeHere.innerText += x;
    if (x == 1){
        count +=1.3;
    }
    else {
        count +=2.2;
    }
    }
}

function addDecimal(){
    const myArr = writeHere.innerText.split("").join();
    if (count >= 32){
        alert("max digits entered")
    }
    else if(myArr.includes('.')){
        return;
    }
    else {
    writeHere.innerText += '.';
    count +=1.75;
    }
}

function clearText(){
    writeHere.innerText = " ";
    copyHere.innerText = " ";
    num1 = null;
    num2 = null;
    ans = null;
    operator = null;
    count = 0;
}

function del(){
    const myArr = writeHere.innerText.split("").join();
    if(myArr[myArr.length-1] == 1){
        count -=1.3;
    }
    else {
        count -=2.25;
    }
    writeHere.innerText = writeHere.innerText.slice(0,-1);
}

function handleOperation(x){
    if (writeHere.innerText === "") {
        return;
    }
    if (num1 === null){
        num1 = writeHere.innerText;
    }
    else if (num1 != null && num2 ===null){
        num2 = writeHere.innerText;
        equals();
        writeHere.innerText = " ";
        count = 0;
        return;
    }
    if (x !='√' && x != '%' && x != '±') {
    copyHere.innerText += writeHere.innerText += x;
    }
    if (x == '√' || x == '%'|| x == '±'){
        operator = x;
        num1 = writeHere.innerText;
        writeHere.innerText = operate();
        copyHere.innerText += writeHere.innerText;
        return;
    }

    writeHere.innerText = " ";
    operator = x;
    count = 0;
}

function equals() {
    const myArr = copyHere.innerText.split("").join();
    if (num1 === null && num2 === null && writeHere.innerText === "") {
        return;
    }
    else if (myArr.includes('=')){
        copyHere.innerText == ans;
    }
    else if (num1 != null && num2 != null && operator != null) {
        copyHere.innerText += writeHere.innerText + "=";
        writeHere.innerText = operate();
    }
    else if (num2 === null && writeHere.innerText != null && num1 != null){
    num2 = writeHere.innerText;
    copyHere.innerText += writeHere.innerText + "=";
    writeHere.innerText = operate();
    }

}
function getAns(){
    writeHere.innerText = ans;
}
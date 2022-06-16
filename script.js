let num1 = null;
let num2 = null;
let ans = null;
let saveThis = false;

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
    let ifNegative = null;
    if (x < 0){
        ifNegative = x;
        x= Math.abs(x);
    }
    let ansF = 1;
    if (x===0|| x===1){
        return 1;
    }
    for (let i = x; i >= 1; i--){
        ansF *= i;
    }
    if (ifNegative){
        return -1.0 * parseFloat(ansF);
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
    ans = parseFloat((ans).toFixed(10));
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
    else if (writeHere.innerText == ans){
        writeHere.innerText = '';
        copyHere.innerText = " ";
        writeHere.innerText += x;
    }
    else if (saveThis){
        writeHere.innerText = '';
        writeHere.innerText += x;
        num2 += x;
        saveThis = false;
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
    if (!num2){
        if (num1 && operator){
            num2 += x;
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
    if (onlyOne.includes(x)){
        operator = x;
        num1 = writeHere.innerText;
        writeHere.innerText = operate();
        if (!num1){
            num1 =ans;
        }
        else if (!num2){
            num2 = ans;
        }
        
        operator = null;
        return;
    }
    if (operator && num1 && num2){
        copyHere.innerText = operate();
        copyHere.innerText += x;
        writeHere.innerText = " ";
        operator = x;
        num1 = ans;
        num2 = null;
        saveThis = true;
        count = 0;
        return;
    }
    if (writeHere.innerText == ans){
        copyHere.innerText = " ";
        copyHere.innerText += writeHere.innerText + x;
        saveThis = true;
        operator = x;
        writeHere.innerText="";
        return;
    }
    if (writeHere.innerText === "" && copyHere.innerText === "") {
        return;
    }
    if (num1 && !num2 && twoNumsNeeded.includes(x)){
        saveThis = true;
    }
    if (num1 === null && writeHere.innerText != null){
        num1 = writeHere.innerText;
    }
    
    copyHere.innerText += writeHere.innerText += x;
    writeHere.innerText = " ";
    operator = x;
    count = 0;
}

function equals() {
    if (!operator){
        return;
    }
    if (num1 === null && num2 === null && writeHere.innerText === "") {
        return;
    }
    num2 = writeHere.innerText;
    if (!num1 && copyHere.innerText){
        num1 = copyHere.innerText;
        return;
    }
    copyHere.innerText += writeHere.innerText + "=";
    writeHere.innerText = operate();
    operator = null;
    num1 = ans;
    num2 = null;
}
function getAns(){
    if (ans != null){
        copyHere.innerText += writeHere.innerText;
        writeHere.innerText = ans;
    }
}

function add (a,b) {
    return a+b;
}

function subtract(a,b){
    return a-b;
}

function multiply (a,b){
    return a*b;
}

function divide (a,b){
    return a/b;
}

function exponent(a,b){
    return a**b;
}

function squareroot(x){
    return Math.sqrt(x);
}

function percentage (x, per){
    if (!per){
        per = 1;
    }
    return (x/100)*per;
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
    return x;
}

function factorial(x){
    if (x < 0) {
    return -1;
    }
    let ans = 1;
    if (x===0|| x===1){
        return 1;
    }
    for (let i = x; i >= 1; i--){
        ans *= i;
    }
    return ans;
}

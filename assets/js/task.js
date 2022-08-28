"use strict"





function sum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sum =  Number(num1) + Number(num2);
    let result = document.getElementById("end-result");
    result.value = sum;
    if (num1 == "" || num2 == "") {
        alert("Please enter the number!");
        result.value = "";
        return;
        
    }
};
let btnSum = document.querySelector("button:nth-child(1)")
btnSum.onclick = function () {
    sum();
    num1.value = "";
    num2.value = "";
};







function sub(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let sub = Number(num1) - Number(num2);
    let result = document.getElementById("end-result");
    result.value = sub;
    if (num1 == "" || num2 == "") {
        alert("Please enter the number!");
        result.value = "";
        return;
    }
};
let btnsub = document.querySelector("button:nth-child(2)");
btnsub.onclick = function(){
    sub();
    num1.value = "";
    num2.value = "";
};






function mult(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let mult = Number(num1) * Number(num2);
    let result = document.getElementById("end-result");
    result.value = mult;
    if (num1 == "" || num2 == "") {
        alert("Please enter the number!");
        result.value = "";
        return;
    }
};

let btnMult = document.querySelector("button:nth-child(3)");
btnMult.onclick = function(){
    mult();
    num1.value = "";
    num2.value = "";
};









function divide(){
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let divide = Number(num1) / Number(num2);
    let result = document.getElementById("end-result");
    result.value = divide;
    if (num1 == "" || num2 == "") {
        alert("Please enter the number!");
        result.value = "";
        return;
    };


    if (num2 == 0) {
        alert("Can't be divide zero!")
    }
};
let btnDivide = document.querySelector("button:nth-child(4)");
btnDivide.onclick = function(){
    divide();
   num1.value = "";
   num2.value = "";
};
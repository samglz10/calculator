const calculator = document.getElementById("calculator-container");
const digits = document.getElementById('digits')
const operationBtns = document.getElementById('operations')
let total = 0;
let x = 4;
let y = 4;
let currentOperation = '';

const numbers = [1,2,3,4,5,6,7,8,9,0];
const operations=['Clear','Back', '+','-','/','*','=']

numbers.forEach((number)=>{
    console.log(number);
    let digit = document.createElement("button");
    digit.innerText = number;
    digit.className = 'btn'
    digits.appendChild(digit)
})
operations.forEach((operation)=>{
    let op = document.createElement("button");
    op.innerText = operation;
    op.className = 'btn'
    operationBtns.appendChild(op);
})
//need to redo step 3
const operate = (operation, x,y)=>{
console.log(x,operation[3],y);
    //console.log(`${x}${operation}${y}`)

}

operate(operations,x,y)



/*
const add = (x,y)=> {
    console.log(`${x}+${y} = ${x + y}`)
    console.log(x + y);
};

const subtract = (x,y)=> {
    console.log(`${x}-${y} = ${x - y}`)
    console.log(x - y)
};

const multiply = (x,y)=> {
    console.log(`${x}*${y} = ${x * y}`)
    console.log(x * y)
};

const divide = (x,y) => {
    console.log(`${x}/${y} = ${x / y}`)
    console.log(x / y)
};
const power = function() {
	
};

const factorial = function() {
	
};
*/
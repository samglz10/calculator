/*
v1
const calculator = document.getElementById("calculator-container");
const digits = document.getElementById('digits')
const operationBtns = document.getElementsByClassName('.operations')
const display = document.getElementById('display')
*/
const calculator = document.getElementById("calculator-container");
const operations = document.querySelectorAll('#operations');
const numbers = document.querySelectorAll('.numbers');
const clearBtn = document.querySelector('#clear');
const backspaceBtn = document.querySelector('#backspaceBtn');
const totalButton = document.querySelector('#total');
const previousInputData = document.querySelector('#previous-input-data');
const CurrentInputData = document.querySelector('#current-input-data');
const display = document.querySelector('output')
/*
let total = 0;
let x = 4;
let y = 4;
let currentOperation = '';
let displayArray = [];*/
console.log(operations)
console.log(numbers)
let previousInputData = '';
let CurrentInputData ='';

//const numbers = [1,2,3,4,5,6,7,8,9,0];
//const operations=['Clear','Back', '+','-','/','*','=']

const operators = {
    clear: ()=>{},
    delete: ()=>{},
    '+': (x,y)=>x+y,
    '-': (x, y) => x - y,
    '*': (x, y) => x * y,
    '/': (x, y) => x / y
}
//operators
for(let i = 0; i < operations.length; i++){

    const singleOperation = operations[i]
    //console.log(singleOperation);
    singleOperation.addEventListener('click',(e)=>{
        console.log('clicked', e.target.value)
        if(e.target.value === undefined){
            return
        }
        
        if(e.target.value === operations[0]){
           console.log(e.target.value)
        }
        if(e.target.value === operations[1]){
            console.log(e.target.value)
        }

    })

}
//numbers
for(let i = 0; i < numbers.length; i++){
    const singleNumber = numbers[i]
    //console.log(singleNumber);
    singleNumber.addEventListener('click',(e)=>{
        console.log('clicked', e.target.value)
        if(e.target.value === undefined){
            return
        }
        
        if(e.target.value === numbers[0]){
           console.log(e.target.value)
        }
        if(e.target.value === numbers[1]){
            console.log(e.target.value)
        }
    })
}
//clear and back buttons


/* v1
//numbers on screen
numbers.forEach((number)=>{
    //console.log(number);
    let digit = document.createElement("button");
    digit.innerText = number;
    digit.className = 'btn';
    digit.id = `numberBtn`;
    digit.value = number;
    digits.appendChild(digit);
})

//operators on screen
operations.forEach((operation)=>{
    let op = document.createElement("button");
    op.innerText = operation;
    op.className = 'btn'
    //op.id = `${operation}`;
    op.value = operation.toString();
    operationBtns.appendChild(op);
})
//need to redo step 3
const caluculate = (operators, x,y)=>{

    //console.log(operators['/'](x,y))

}

caluculate(operators,x,y);


operationBtns.addEventListener('click',(e)=>{
    if(e.target.value === undefined){
        return
    }
    console.log(e.target.value);
    if(e.target.value === operations[0]){
        displayArray =[];
        display.innerText= displayArray;
    }
    if(e.target.value === operations[1]){
        displayArray.pop();
        display.innerText = displayArray.join('')
    }
    if(e.target.value === operations[0]|| e.target.value === operations[1]|| e.target.value === operations[6]){
        return 0
    }
    displayArray.push(e.target.value)
    display.innerText = displayArray.join('');
    console.log(displayArray)
})


digits.addEventListener('click',(e)=>{
    if(e.target.value === undefined){
        return
    }
    displayArray.push(e.target.value)
    //console.log(e.target.value)
    display.innerText = displayArray.join('');
    
})

console.log(displayArray);
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
/*
const power = function() {
	
};

const factorial = function() {
	
}
*/

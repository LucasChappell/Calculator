let one = document.getElementById('1');
let two = document.getElementById('2');
let three = document.getElementById('3')
let four = document.getElementById('4')
let five = document.getElementById('5')
let six = document.getElementById('6')
let seven = document.getElementById('7')
let eight = document.getElementById('8')
let nine = document.getElementById('9')
let zero = document.getElementById('0')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let divide = document.getElementById('divide')
let enter = document.getElementById('enter')

let Numbers = [];
let inputVar = null;

one.addEventListener('click', function(){
    numFunc("1");
});
two.addEventListener('click', function(){
    numFunc("2");
});
three.addEventListener('click', function(){
    numFunc("3");
});
four.addEventListener('click', function(){
    numFunc("4");
});
five.addEventListener('click', function(){
    numFunc("5");
});
six.addEventListener('click', function(){
    numFunc("6");
});
seven.addEventListener('click', function(){
    numFunc("7");
});
eight.addEventListener('click', function(){
    numFunc("8");
});
nine.addEventListener('click', function(){
    numFunc("9");
});
zero.addEventListener('click', function(){
    numFunc("0");
});
plus.addEventListener('click', function(){
    opFunc('+');
});
minus.addEventListener('click', function(){
    opFunc("-");
});
multiply.addEventListener('click', function(){
    opFunc("*");
});
divide.addEventListener('click', function(){
    opFunc("/");
});
enter.addEventListener('click', function(){
    calculate()
})


function numFunc(input){
    if (inputVar == null){
        inputVar = input;
    } else {inputVar = inputVar + input}
    console.log(inputVar)
}

function opFunc(input){
    
    Numbers.push(inputVar)
    Numbers.push(input)
    inputVar = null;
    console.log(Numbers)
}

function calculate(){
    workingStr = "";
    Numbers.push(input)
    for (let step = 0; step < Numbers.length+1; step++) {
        workingStr = workingStr+Numbers[step];

        console.log(workingStr)
    }
}


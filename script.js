const prompt = require("prompt-sync")()

function getNumber(numberstring){

    while (true){
        const number = parseInt(prompt("Enter a valid "+ numberstring + " number: "));

        if (isNaN(number)){
            console.log("Invalid input");
        }else{
            return number;
        }
    }


}

const number1 = getNumber("first");
const number2 = getNumber("second");

const operatorCheck = ['%',  '*' , '**' , '+' , '-' , '/' ]

let operator = prompt("Enter a valid operator( '% - modulo' , '*' , '**' , '+' , '-' , '/' ): ")

while (true){
    if (operatorCheck.includes(operator)){
        break
    }else{
        operator = prompt("Enter a operator( '% - modulo' , '*' , '**' , '+' , '-' , '/' ): ")

    }
}


let result;
let valid = true;


switch(operator){


    case "+":
        result =  number1 + number2
        break;
    
    case "-":
        result = number1 - number2;
        break;

    case "/":
        if (number2 === 0){
            console.log("Zero division Error");
            valid = false;
        }
        result =  number1 / number2
        break;
    
    case "*":
        result = number1 * number2;
        break;

    
    case "**":
        result =  number1 ** number2
        break;
    
    case "%":
        result = number1 % number2;
        break;

    default:
        console.log("Invalid")
        valid = false
    



}

if (valid) console.log(number1 + " "+ operator + " " + number2 + ' = '+ result)
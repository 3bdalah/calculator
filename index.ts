import { question } from "readline-sync";


type Operator  = '+' | '-' | '*' | '/';
function main() : void 
{

    const num1  : string  = question("Enter the first number: \n");
    const operator  : string  = question("Enter operator : \n ");
    const num2 : string  = question("Enter the second number  : \n");
    
    // validate inputs 
    const validInput :boolean =isNumber(num1) && isOperator(operator) && isNumber(num2);

    if(validInput){
        console.log("Is valid");
      const number1 : number = parseInt(num1);
      const number2 : number = parseInt(num2);
      const result = calculater(number1,operator as  Operator,number2);
      console.log(result);
    }else{
        console.log("Invalid input");
         main();
    }
} 

// fucntion oeprator 
function isOperator(str : string) : boolean 
{
    switch(str) {
        case '+':
        case '-':
        case '*':
        case '/':
            return true;
        default:
            return false;
    }
}

// function to calcuater 
function calculater(num1 : number,  operator :Operator, num2 : number) : number
{
   switch(operator) {
       case '+':
           return num1 + num2;
       case '-': 
           return num1 - num2;
       case '*':
           return num1* num2;
       case '/':
           return num1 / num2;

   }
}

// Checked Iss Number 
function isNumber(str : string ): boolean
{
    const maybeNum = parseInt(str);
    const isNum : boolean = !isNaN(maybeNum);
    return isNum;
}


main();

























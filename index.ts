import { question } from "readline-sync";       

type Operator = '+' | '-' | '/' | '*' ;    /** operator moze byt len +,-,*,/ */

function main(): void                      /** void - funkcia nám nič nevráti*/
{
    const firstStr: string = question("Enter first number:\n");                /** otázka so stringom */
    const operator: string = question("Enter operator:\n");                    /** otázka so stringom */
    const secondStr: string = question("Enter second number:\n");              /** otázka so stringom */

    const validInput: boolean = isNumber(firstStr) && isOperator(operator) && isNumber(secondStr);

    if (validInput)                                 /** ak splna podmienky  */
    {
        const firstNum: number = parseInt(firstStr);
        const secondNum: number = parseInt(secondStr);
        const result = calculate(firstNum, operator as Operator, secondNum);          /** result = funkcia calculate */
        console.log(result);                        /** vypisanie vysledku funkcie calculate */
    }
    else
    {
        console.log('\ninvalid input\n')            /** ak neplatia podmienky vypise invalid input */
        main()                                      /** spustenie funkcie */
    }
}

function calculate(firstNum: number, operator: string, secondNum: number)             /** vytvorenie funkcie calculate- +,-,*,/ */
{
    switch(operator)
    {
        case '+' :
            return firstNum + secondNum;                  /** ak je operator + vykoná prvé číslo + druhé číslo */
        case '-' :
            return firstNum - secondNum;                  /** ak je operator - vykoná prvé číslo - druhé číslo */
        case '*' :
            return firstNum * secondNum;                  /** ak je operator * vykoná prvé číslo * druhé číslo */
        case '/' :
            return firstNum / secondNum;                  /** ak je operator / vykoná prvé číslo / druhé číslo */
        
    }
}




function isNumber(string: string): boolean               /** otestovanie či input je číslo */
{
    const maybeNum = parseInt(string);                   /** bud to bude číslo alebo nie */
    const isNum: boolean = !isNaN(maybeNum);             /** !isNaN(maybeNum)- maybeNum je číslo takže Nan je false a ! to premení na true */
    return isNum;
}

function isOperator(operator: string): boolean
{
    switch(operator)
    {
        case '+':
        case '-':
        case '*':
        case '/':                                        /** ak je operator +,-,*,/ tak je to true */
            return true;
        default:
            return false;                                /** ak je operator nieco ine- false */
    }
}

main();                                                  /** zavoláme funkciu main */
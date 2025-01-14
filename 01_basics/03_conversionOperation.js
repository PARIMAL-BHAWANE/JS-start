let score = "parimal"

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "parimal"

let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// ********************************************************************* Operations *********************************************************************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "sonu"
let str2 = " parimal"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);


// ********************************************************************* Notes *********************************************************************

// 1. Number() => converts to String
    /* let score = 3;
     score = Number(score);
     console.log(score, typeof score); output:- 3,string*/ 


// 2. String() => converts to Number (if string is empty then it will convert to 0)
    /* let score = "3";
     score = String(score);
     console.log(score, typeof score); output:- 3,number*/

    /* let strToNr = "pari";
     strToNr = Number(strToNr);
     console.log(strToNr, typeof strToNr); output:- NaN,number*/ 


// 3. String() => converts to Boolean
    /* let score = "3abc";
        score = Boolean(score);
        console.log(score, typeof score); output:- true,boolean*/

    /* let strToBool2 = "false";
        strToBool2 = Boolean(strToBool2);
        console.log(strToBool2, typeof strToBool2); output:- true,boolean*/

    /* let strToBool3 = "";
        strToBool3 = Boolean(strToBool3);
        console.log(strToBool3, typeof strToBool3); output:- false,boolean*/


// 4. Null() => converts to Number
    /* let nullToNr = null;
        nullToNr = Number(nullToNr);
        console.log(nullToNr, typeof nullToNr); output:- 0,number*/


// 5. Undefined() => converts to Number
    /* let undefinedToNr = undefined;
        undefinedToNr = Number(undefinedToNr);
        console.log(undefinedToNr, typeof undefinedToNr); output:- NaN,number*/

 // 6. Undefine() => converts to String
    /* let undefinedToStr = undefined;
        undefinedToStr = String(undefinedToStr);
        console.log(undefinedToStr, typeof undefinedToStr); output:- undefined,string*/

// 7. Undefined() => converts to Boolean
    /* let undefinedToBool = undefined;
        undefinedToBool = Boolean(undefinedToBool);
        console.log(undefinedToBool, typeof undefinedToBool); output:- false,boolean*/

        
// 8. Null() => converts to String
    /* let nullToStr = null;
        nullToStr = String(nullToStr);
        console
        .log(nullToStr, typeof nullToStr); output:- null,string*/

// 9. Null() => converts to Boolean
    /* let nullToBool = null;
        nullToBool = Boolean(nullToBool);
        console.log(nullToBool, typeof nullToBool); output:- false,boolean*/


// 10. Boolean() => converts to Number
    /* let boolToNr = true;
        boolToNr = Number(boolToNr);
        console.log(boolToNr, typeof boolToNr); output:- 1,number*/

    /* let boolToNr2 = false;
        boolToNr2 = Number(boolToNr2);
        console.log(boolToNr2, typeof boolToNr2); output:- 0,number*/

// 11. Boolean() => converts to String
    /* let boolToStr = true;
        boolToStr = String(boolToStr);
        console.log(boolToStr, typeof boolToStr); output:- true,string*/

    /* let boolToStr2 = false;
        boolToStr2 = String(boolToStr2);
        console.log(boolToStr2, typeof boolToStr2); output:- false,string*/

// 12. Boolean() => converts to Boolean
    /* let boolToBool = true;
        boolToBool = Boolean(boolToBool);
        console.log(boolToBool, typeof boolToBool); output:- true,boolean*/

    /* let boolToBool2 = false;
        boolToBool2 = Boolean(boolToBool2);
        console.log(boolToBool2, typeof boolToBool2); output:- false,boolean*/

// 13. Increment and Decrement
    /* let num = 2;
        console.log(num++); output:- 2*/

    /* let num = 2;
        console.log(++num); output:- 3*/

    /* let num = 2;
        console.log(num--); output:- 2*/

    /* let num = 2;
        console.log(--num); output:- 1*/

// 14. Addition and Subtraction
    /* let num = 2;
        console.log(num + 2); output:- 4*/

    /* let num = 2;
        console.log(num - 2); output:- 0*/

// 15. Multiplication and Division
    /* let num = 2;
        console.log(num * 2); output:- 4*/

    /* let num = 2;
        console.log(num / 2); output:- 1*/

// 16. Exponentiation
    /* let num = 2;
        console.log(num ** 2); output:- 4*/

// 17. Modulus
    /* let num = 2;
        console.log(num % 2); output:- 0*/

// 18. Concatenation
    /* let str1 = "sonu";
        let str2 = " parimal";
        let str3 = str1 + str2;
        console.log(str3); output:- sonu parimal*/





// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


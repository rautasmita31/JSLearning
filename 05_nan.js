
//NAN-Not a number
var num1=0;
var num2=0;
var result=num1/num2;
console.log(result);

var num3="100";
console.log(`Value of num3 is ${num3}`);
console.log(`Type of num3 is ${typeof num3}`);
var result= +num3;
console.log(`Value of result is ${result}`);
console.log(`Type of result is ${typeof result}`);
console.log(`-------------------------------------`);

var num4="Hello";
console.log(`Value of num4 ${num4}`);
console.log(`type of num4 ${typeof num4}`);
var num4= +num4;
console.log(`Value of num4 ${num4}`);
console.log(`type of num4 ${ typeof num4}`);

console.log(`----------------- Implicit Conversion --------------------------`);

var result="3" + 3;
console.log(result);
console.log(`Why result is 33? - Because number 3 got implicitly converted into a string value based on priority`);

var result="3" + true;
console.log(result);
console.log(`Why result is 3true? - Because number 'true' got implicitly converted into a string value based on priority and both string got concatenated`);

var result='3' + undefined;
console.log(result);
console.log(`Why result is 33? - Because number 'undefined' got implicitly converted into a string value based on priority and both string got concatenated`);

console.log(`---------------------------Explicit Conversion----------------------------------`);
//Way 1: Using + operator
var num=3;
var result= +num;
console.log(`Result is ${result} and type of result is ${typeof result}`);
//Way 2: Using Number/string/Boolean  and storing it in variable
var num="Asmi";
var result=Number(num);
console.log(`Result is ${result} and type of result is ${typeof result}`);

var num=12;
var result=String(num);
console.log(`Result is ${result} and type of result is ${typeof result}`);

var num=100;
var result=Boolean(num);
console.log(`Result is ${result} and type of result is ${typeof result}`);

var num="50";
var result=Boolean(num);
console.log(`Result is ${result} and type of result is ${typeof result}`);

var isMarried=true;
var result1=String(isMarried);
console.log(`Result1 is ${result1} and type of result1 is ${typeof result1}`);

//Way 3

var myNumber=100;
console.log(`value of number ${myNumber} and typeof is ${typeof myNumber}`);
var afterConversion= myNumber.toString();
console.log(`Value after conversion is ${afterConversion} and type of is ${ typeof afterConversion}`);

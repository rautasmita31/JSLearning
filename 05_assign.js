console.log(`----------------- Assignment 1:Implicit Conversion to String --------------------------`);

var result="3" + 3;
console.log(result);
console.log(`"3"+3 => Why result is 33? - Because number 3 got implicitly converted into a string value based on priority`);

var result="3" + true;
console.log(result);
console.log(`"3"+ true => Why result is 3true? - Because number 'true' got implicitly converted into a string value based on priority and both string got concatenated`);

var result='3' + undefined;
console.log(result);
console.log(`"3"+ undefined => Why result is 3undefined? - Because number 'undefined' got implicitly converted into a string value based on priority and both string got concatenated`);

var result ='3' + null;
console.log(result);
console.log(`"3"+ null => Why result is 3null? - Because number 'null' got implicitly converted into a string value based on priority and both string got concatenated`);
console.log(`----------------- Assignment 2:Implicit String conversion to Number --------------------------`);

var result='4'-'2';
console.log(`'4'-'2' =>String value is converted into number implicitly and arithmetic operation is performed-${result}`);
var result='4'-2;
console.log(`'4'-2 =>String value is converted into number implicitly and arithmetic operation is performed-${result}`);
var result='4'*2;
console.log(`'4'*2 =>String value is converted into number implicitly and arithmetic operation is performed-${result}`);
var result='4'/2;
console.log(`'4'/2 =>String value is converted into number implicitly and arithmetic operation is performed-${result}`);
console.log(`----------------- Assignment 3:Implicit Boolean conversion to Number --------------------------`);

var result='4'- true;
console.log(`Boolean value i.e true is converted into a number i.e 1 and '-' operation is performed:'4'- true= ${result}`);
var result= 4 + true;
console.log(`Boolean value i.e true is converted into a number i.e 1 and '+' operation is performed: 4 + true= ${result}`);
var result= 4 + false;
console.log(`Boolean value i.e true is converted into a number i.e 1 and '+' operation is performed: 4 + false= ${result}`);

console.log(`----------------- Assignment 4 --------------------------`);

var result=0==' ';
console.log(`0==' ' ->Value of Result is ${result} and its type of is ${typeof result}`);
var result=0=='0';
console.log(`0=='0' ->Value of Result is ${result} and its type of is ${typeof result}`);
var result=0==false;
console.log(`0==false ->Value of Result is ${result} and its type of is ${typeof result}`);
var result=null==undefined;
console.log(`null==undefined ->Value of Result is ${result} and its type of is ${typeof result}`);
var result=1==[1];
console.log(`1==[1] ->Value of Result is ${result} and its type of is ${typeof result}`);
var result=1==true;
console.log(`0==true ->Value of Result is ${result} and its type of is ${typeof result}`);
var result=1==true;
console.log(`1=='1' ->Value of Result is ${result} and its type of is ${typeof result}`);
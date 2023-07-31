//Increment Operator
//Postfix Increment Operator
var num=10;
var num1=num++;
console.log(`Value of num is ${num} and Value of num1 is ${num1}`);
//Prefix Increment Operator
var num=10;
var num2=++num;
console.log(`Value of num is ${num} and Value of num2 is ${num2}`);

//Decrement Operator
var num=10;
var num3=num--;//Assign and then decrease
console.log(`Value of num is ${num} and Value of num3 is ${num3}`);
//Prefix Increment Operator
var num=10;
var num4=--num;
console.log(`Value of num is ${num} and Value of num4 is ${num4}`);
//WAP to print numbers from 0 to 10
// start index=0 index<=10 index=index+1
console.log(`===================================================`);
for (let index = 0; index<=10; index=index+1) {
    console.log(index);
    
}
console.log(`===================================================`);
//WAP to log numbers from 5 to 20
 for (let index = 5; index <=20; index++) {
    console.log(index);
    
 }
 console.log(`===================================================`);
 //WAP to print nos from 10 to 1
 for (let index = 10; index >=1; index--) {
    console.log(index);
    
 }
 console.log(`===================================================`);
 //WAP to print table of 5

 for (let index = 5; index <= 50 ; index=index+5) {
    console.log(index);  
 }
 console.log(`===================================================`);
//WAP to to table of 7 in decreasing order
for (let index = 70; index >=7; index=index-7) {
console.log(index);
    
}
console.log(`------------------------------------------`);
var result=" ";
console.log(`5. WAP to print table of 5`);
for (let index = 5; index <= 50 ; index=index+5) {
   result=result.concat(index).concat(" ");
}
console.log(result);  

//Infinitr loop-When condition does not satisfy
//for (let index = 10; index >0; index++) {
//console.log(index);
//}

//Arrow Function with no arguments and no return value
let add=function(){
    console.log(12+12);
}
add();

//Arrow FUnction with return value
let arrowFun= ()=>{
    return 13+15;
}
let value=arrowFun();
console.log(value);

//Arrow Function with arguments
let multiply= (num1,num2)=>{
console.log(num1*num2);
}
multiply(2,4);
console.log(`----------------------Step 1:No args and no return value----------------------------`);
let greetings=()=>{
console.log(`Good Morning. Today is Tuesday`);
}

console.log(`----------------------Step 2:Three args and no return value----------------------------`);
let multiplication=(num1,num2,num3=1)=>{
console.log(`Multiplication is ${num1*num2*num3}`);
}
multiplication(5,5,2);
multiplication(10,4);

console.log(`----------------------Step 3:Five args and return value----------------------------`);

let add= (number1,number2,number3,number4,number5)=>{
    return 100+100+200+349+756;
    //return "I am"+"Learning"+"ES6"+"features"+"depth"
    
}
value=add();
values=add("I am","Learning","ES6","features","depth")
console.log(`Addition is ${value}`);
console.log(`${values}`);



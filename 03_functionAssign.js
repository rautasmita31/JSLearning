console.log("---------------------Step 1----------------------");
function message(){
    console.log("My name is Asmita")
}
message();

var num1=5;
var num2=1;
function add(){
    var result=num1+num2;
    console.log("Addition of two numbers is",result)
}
add();
console.log("---------------------Step 2----------------------");
 function personalDetails(firstName,lastName,collegeName){
console.log("My Personal Details are-","First Name:",firstName,"Last Name:",lastName,"College Name:",collegeName);
 }
 personalDetails("Asmita","Raut","PCCOE");

 console.log("---------------------Step 3----------------------")

 function swapValues(Value1,Value2){
console.log("Before Swap values are",Value1,Value2);
var temp=Value1;
Value1=Value2,
Value2=temp;
console.log("After Swap values are",Value1,Value2);
 }
 swapValues("Virat","Anushka");
 swapValues(1000,2000);

 console.log("---------------------Step 4----------------------")
function addThreeValues(n1,n2,n3){
var addition=n1+n2+n3;
return addition;
}
console.log("Addition of Three numbers is",addThreeValues(10.23,600,40));
console.log("Addition is",addThreeValues("Hello","Good","Morning"));


console.log("---------------------Step 4----------------------")

function bankDetails(bankName,accountNum,location,pinCode){
console.log("My Bank Details are as follows","Bank Name-",bankName,"Account Number-",accountNum,"Location-",location,"Pincode-",pinCode);
}

bankDetails("CITI Bank",3456782345,'Pune',431202);
bankDetails("Axis Bank",7856782345,'Mumbai',441202);
bankDetails("HDFC Bank",8956782345,'Pune',631202,"Open");


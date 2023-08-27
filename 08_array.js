let array1=[10,30,50,70];
console.log(array1);
console.log(`Type of array is ${typeof array1}`);

console.log(`Total no of elements is ${array1.length}`);
let element3=array1[3];
console.log(`Element at 3rd position is ${element3}`);


let array1length=array1.length;
let lastelement=array1[array1length-1];
console.log(`Last Element is ${lastelement}`);
let secondlastelement=array1[array1length-2];
console.log(`Second Last Element is ${secondlastelement}`);
console.log(`=================================================`);
array1[1]=120;
console.log(`${array1}`);
//To check if element value is available in array
let isvalueAvailable=array1.includes(120);
console.log(`Is the provided value available ${isvalueAvailable}`);
//To get index of element
let indexOf120=array1.indexOf(120);
console.log(`Index of 120 is ${indexOf120}`);
console.log(`===========================================`);
//Transverse
let array2=[10,20,30,40,50]; 
for (let index = 0; index <array2.length; index++) {
    const element = array2[index];
    console.log(`Array in transverse order ${element}`);
}
//Array in Reverse order
var array=[10,20,30,40,50];
for (let index = 4; index >= 0; index--) {
    const element = array[index];
    console.log(`Array in transverse in reverse order ${element}`);
}

//Log even indexed elements

let array5=[2,4,6,8,10];
for (let index = 0; index < array5.length; index=index+2) {
    const element = array5[index];
    console.log(`Even indexed element = ${element}`);
}
//Another way to log even indexed value
console.log(`------------------Log Even indexed element------------`);
let array6=[10,8,6,4,2];
for (let index = 0; index < array6.length; index++) {
   if (index%2==0) {
    const element = array6[index];
    console.log(element);
   }    
}
console.log(`-------------Push and Unshift Method----------------`);
var array=[10,20,30,40,50];
array.push(70);//insert element at the end
array.push(20,110.240);
array.unshift(200);//insert element in begining
array.unshift(21,22,33);
console.log(array);

console.log(`-------------Pop and shift Method----------------`);
var array=[200,10,20,30,40,50,70];
array.pop();//remove element at the end
array.shift();//remove element in begining
console.log(array);

console.log(`----------------------Slice Method---------------------`);
var array=[200,10,20,30,40,50,70];
var slice13=array.slice(1,3);
console.log(slice13);

console.log(`----------------------Splice Method-Removr Element---------------------`);
var array=[200,10,20,30,40,50,70];
let removeelement=array.splice(3);
console.log(array);
console.log(removeelement);

var array=[200,10,20,30,40,50,70];
let removeelement1=array.splice(1,4);
console.log(array);
console.log(removeelement1);
var last2elements=array.splice(array.length-2,2);//Remove last 2 elements
console.log(last2elements);

console.log(`----------------------Splice Method-Insert Element---------------------`);
var array=[200,10,20,30,40,50,70];
array.splice(2,0,500,800);
console.log(array);

console.log(`----------------------Splice Method-Replace Element---------------------`);
var array=[200,10,20,30,40,50,70];
array.splice(1,3,2000,4000);
console.log(array);

console.log(`----------------------concat two arrays------------------------`);
let array7=[2,4,6];
let array8=[8,10,12];
let array9=array7.concat(array8);
console.log(array9);
console.log(`----------------------Join two arrays------------------------`);
let result=array7.join(",");
console.log(result);

console.log(`----------------------For Of loop to transverse elements in array------------------------`);
for (const element of array7) {
    console.log(element);
}

console.log(`----------------------Resize an arrays------------------------`);
let array11=[2,4,6,8,10,12,14,16];
array11.length=2;
console.log(array11);

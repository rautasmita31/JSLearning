console.log(`-----------------To add elements in set-------------------`);
let mySet=new Set();
mySet.add(2);
mySet.add(4);
mySet.add(6);
mySet.add(8);
console.log(mySet);
//Not add the duplicate values
mySet.add(2);
console.log(mySet);
console.log(`-----------------To check elements in set-------------------`);
//Has Method-To check if set has a particular element=>will return true or false
let isAvailable=mySet.has(4);
console.log(isAvailable);
//if element is not present then wil return false
let isAvailable1=mySet.has(10);
console.log(isAvailable1);
console.log(`-----------------To check size of set-------------------`);
let sizeofSet=mySet.size;//As it is a property, dont add parenthesis
console.log(`Size of Set is ${sizeofSet}`);
console.log(`-----------------To delete particular element of set-------------------`);
mySet.delete(2);
console.log(mySet);

console.log(`-----------------To delete all elements of set-------------------`);
//mySet.clear();
console.log(`After using clear method ${mySet}`);

console.log(`-----------------Traverse over set using for of loop-------------------`);
for (const element of mySet) {
    console.log(element);
}

console.log(`-----------------Remove Duplicate Element from Array--------------------`);
let array=[2,4,6,4,8,8,9,1];
let setOfNos=new Set();
for (const value of array) {
    setOfNos.add(value);
}
console.log(array);
console.log(setOfNos);

console.log(`-----------------Remove Duplicate Element from Array using Set and Spread Operator--------------------`);
let arraay=[2,4,6,6,6,8,9,8,7,2,1];
let setNo=[...new Set(arraay)];
console.log(`${setNo}`);

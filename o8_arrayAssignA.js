const arrayFruits=["Banana","Orange","Apple","Mango","Water Melon"];
 console.log(`-------------------------Step 1--------------------------`);
 var firstElement=arrayFruits[0];
 var lastElement=arrayFruits[arrayFruits.length-1];
 console.log(`First element is ${firstElement} and last element is ${lastElement}`);
 console.log(`-------------------------Step 2--------------------------`);
 let newElement=arrayFruits.push("Papaya");
 console.log(`Added new element-Papaya before Banana ${newElement}`);
 console.log(`-------------------------Step 3--------------------------`);
 let removeElement=arrayFruits.unshift("Mango");
 console.log(`Removed element-Mango  ${removeElement}`);
 console.log(`-------------------------Step 4--------------------------`);
 let insertElement=arrayFruits.splice(7,0,"Pineapple");
 console.log(`Inserted "Pineapple" at last position in array-> ${arrayFruits}`);
 console.log(`-------------------------Step 5--------------------------`);
 let insertElement1=arrayFruits.splice(5,0,"Dragon Fruit")
 console.log(`Inserted "Dragon Fruit" before "Water Melon" in array-> ${arrayFruits}`);
 console.log(`-------------------------Step 6--------------------------`);
 let replaceElement=arrayFruits.splice(2,2,"Kiwi")
 console.log(`Inserted "Dragon Fruit" before "Water Melon" in array-> ${arrayFruits}`);
 console.log(`-------------------------Step 7--------------------------`);
let Element1=arrayFruits[1];
let Element2=arrayFruits[2];
let Element3=arrayFruits[3];
let Element4=arrayFruits[4];
console.log(`Elements at index 1 is ${Element1},Elements at index 1 is ${Element2},Elements at index 1 is ${Element3},Elements at index 1 is ${Element4}`);
console.log(`-------------------------Step 8--------------------------`);
console.log(arrayFruits);
let lastElement1=arrayFruits[arrayFruits.length-1];
let lastElement2=arrayFruits[arrayFruits.length-2];
let lastElement3=arrayFruits[arrayFruits.length-3];
console.log(`Last Element is ${lastElement1},Last second Element is ${lastElement2},Last third Element is ${lastElement3}`);

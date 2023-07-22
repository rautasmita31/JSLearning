function stringHandsOn(){

}
stringHandsOn();
console.log(`------------------------Step 1---------------------------`);
var string="  Hey you are doing good, keep it up  ";
console.log(`Given string is ${string}`);
console.log(`------------------------Step 2---------------------------`);
console.log(`The length of string is ${string.length}`);
console.log(`------------------------Step 3---------------------------`);
var trim= string.trim();
console.log(`The length of trimmed string is ${trim.length}`);
console.log(`------------------------Step 4---------------------------`);
var extraSpace=string.length-trim.length;
console.log(`Total number of extra spaces removed are ${extraSpace}`);
console.log(`------------------------Step 5---------------------------`);
var firstChar=trim.charAt(0);
var lastChar=trim.charAt(trim.length-1);
console.log(`First Character after trim is ${firstChar} and Last Character after trim is ${lastChar}`);
console.log(`------------------------Step 6---------------------------`);
var seperate=trim.split(' ');
console.log(`The count of words available in string after Trim is ${seperate.length}`);
console.log(`------------------------Step 7---------------------------`);
var index=string.indexOf('good');
console.log(`The index word "good" is ${index}`);
console.log(`------------------------Step 8---------------------------`);
var substring=trim.slice(22,37);
console.log(`The substring of the trimmed string is ${substring}`);
console.log(`------------------------Step 9---------------------------`);
var end=trim.endsWith("up");
console.log(`The string ends with "up" - ${end}`);
console.log(`------------------------Step 10---------------------------`);
var start=trim.startsWith("Hey");
console.log(`The string ends with "Hey" - ${start}`);




























































































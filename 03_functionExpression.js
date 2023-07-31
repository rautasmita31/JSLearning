

var num=100;
console.log(num);
//Function Expression:-Function stored in variable.Use-inside object,class you can use function expression. Call var with () 
var display=function(){
    console.log(`I am an UI Developer`);
}
display();
console.log(display);
console.log(typeof display);

var add=function(num1,num2){
var sum=num1+num2;
console.log(`Addition is ${sum}`);
}

add(20,10);
/*
var wordCount = function(word){
    var words = word.split(" ");
    var wordCount  = word.length;
    console.log(`In Given String - ${word}`);
    return wordCount;
 }
 var result = wordCount("I am UI Developer");
 console.log(`Total word count is: ${result}`);*/
 var wordcount=function(word){
var words=word.split(" ");
var wordcount=words.length;
console.log(`In a given string ${word}`);
return wordcount;
 }
 var result=wordcount("I am UI Developer");
 console.log(`Total no of words ${result}`);
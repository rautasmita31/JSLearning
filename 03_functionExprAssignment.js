 console.log(`-------------------------Step 1---------------------------------------`);
 var square=function(num){
                var result=num*num;
                console.log(`Square of Number is ${result}`);
 }
 square(5);
 
 console.log(`-------------------------Step 2---------------------------------------`);
 var typeofsquare= typeof(square);
 console.log(`Type of function is ${typeofsquare}`);
 console.log(`-------------------------Step 3---------------------------------------`);
 var rect=function(l,b){
       var res=l*b;
       console.log(`Area of Rectangle is ${res}`);
 }
 rect(499,917);
 console.log(`-------------------------Step 4---------------------------------------`);
 var swapValues=function(value1,value2){
    console.log(`Before swap values ${value1}  ${value2}`);
    var temp=value1;
    value1=value2;
    value2=temp;
    console.log(`After swap values ${value1}  ${value2}`);
 }
 swapValues("Virat","Anushka");
 swapValues(55,77);
 console.log(`-------------------------Step 5---------------------------------------`);
 var str=function(show){
  
   var str=show.length;
   console.log(`-------------------------Step 5.A---------------------------------------`);
   console.log(`Total No of characters in the string - ${str}`);

   console.log(`-------------------------Step 5.B---------------------------------------`);
   console.log(` The character at index 7 of "${show}" is - ${show.charAt(7)}`);
   console.log(`-------------------------Step 5.C---------------------------------------`);
   console.log(` The character at index 12 of "${show}" is - ${show.charAt(12)}`);
   var lastchar= show.charAt(str-1);
   console.log(`-------------------------Step 5.D---------------------------------------`);
   console.log(`Last character in string "${show}" is - ${lastchar}`);
   var firstchar=show.charAt(0);
   console.log(`-------------------------Step 5.E---------------------------------------`);
   console.log(`First character in string "${show}" is - ${firstchar}`);
   var thirdlastchar=show.charAt(37);
   console.log(`-------------------------Step 5.F---------------------------------------`);
   console.log(`Third Last character in string "${show}" is - ${thirdlastchar}`);
var words =show.split(" ");
var str1=words.length;
var square=str1*str1;
console.log(`-------------------------Step 5.G---------------------------------------`);
console.log(`Total no of words - ${str1}  and square of words - ${square}`);

   return str;
    
 }
 var result=str("JS the most popular language of internet");
 
 
 
 
 
 




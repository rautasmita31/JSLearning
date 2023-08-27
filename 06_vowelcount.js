
//Count the no of vowels in a string

function vowelcounts(strr){
    let counts=0;
 for (let index = 0; index < strr.length; index++) {
    let Value= strr.charAt(index);
    if(Value=="a" || Value=="e" || Value=="i" || Value=="o" || Value=="u" ||
        Value=="A" || Value=="E" || Value=="I" || Value=="O" || Value=="U"){
        console.log(Value);
        counts=counts+1;
    }
 }
 console.log(`Number of vowels in string is ${counts} `);
 
}
vowelcounts("I am a good Angular Developer");


// A E I O U
function vowelCount(str){
    let count = 0;
    for (let index = 0; index < str.length; index++) {
        let char = str.charAt(index);
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' || 
            char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
            console.log(char); 
            count = count + 1;
        }
    }
    console.log(`Total number of vowels is: ${count}`);
}
vowelCount("I am very good UI Developer");
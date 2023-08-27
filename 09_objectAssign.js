console.log(`-----------------Object Assignment--------------------`);
let professor={
Name:"Varun Chauhan",
Education:"ME",
MobileNo:940306111,
Address: "Uran,Near Belapur,Mumbai",
degree: {
engineering:"BE",
PHD:"Adv Computing",
getDegrees:function(){
    console.log(`Teacher Degrees are ${this.engineering},${this.PHD}`);
},
},
certificates:["Hacker Rank Participation","Certificate in IFE Course","Certificate in Advance Programming"],
}
let exp=professor.totalNoOfExperience=14;
console.log(`${exp}`);
professor.MobileNo="8888444422";
console.log(professor);
professor.certificates.push("Oracle Certified");
console.log(professor.certificates);
let lastElement=professor.certificates.slice();
console.log(lastElement);
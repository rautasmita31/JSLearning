//Object Literals
let personGK={
    "empid":22,
    state:"MH",
    Designation:"Tech Lead",
    city:"Pune",
    isMarried:true,
    "empid":43,
    //Object Method=>Store function in property of object
    show :function() {
        console.log('Inside Show function');
    },
    empNames:["Jenny","Stew","Joy","Roy"],
}
 //delete personGK.empNames.pop;
 //insert personGK.empNames.push="";
 console.log(personGK);
personGK.show();
console.log(personGK);
console.log(`Type of personGK is ${typeof(personGK)}`);
console.log(`Emp Id : ${personGK.empid}`);
console.log(`City is ${personGK["city"]}`);

let isMarried=personGK.isMarried;
console.log(isMarried);

personGK.city="Mumbai",
console.log(personGK);

//Empty 
let bankDetails={

}
bankDetails.bankNamee="HDFC";
bankDetails.bankLocation="Pune"

//Nested Object:One Object inside another Object
let bank={
    bankName:"SBI",
    empNames : ["Jenny","Stew","Joy","Roy"],
    accountNo:123456,
    ifsc:"SBIN234",
    aadharNo:123456,
    address:{
    street:"Wakad Main Road",
    pin:444602,
    landmark:"Near Petrol Pump",
    Telephone:"984765123",
    city:"Pune",
    state:"MH",
    country:"India",
    getAddress:function(){
        console.log(`Bank Address: ${this.street} ${this.landmark} ${this.pin} ${this.Telephone} ${this.city} ${this.state} ${this.country}`);
     },
    },
       
}
bank.address.getAddress();
let city=bank.address.city;
console.log(city);
delete bank.address.Telephone;
console.log(bank);
console.log(bank.empNames);
bank.empNames.pop();
console.log(bank.empNames);
bank.empNames.unshift("Mark");
console.log(bank.empNames);//Insert element in first position

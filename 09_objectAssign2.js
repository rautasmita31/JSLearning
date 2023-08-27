let sbiBank={
    bankName: "SBI Bank",
    Location:"Wakad Pune",
    accountNo:12345678,
    ifsc:"SBI2023",
    interest: "6%",
    showDetails:function(){
        console.log(`${this.bankName},${this.Location},${this.accountNo} ,${this.ifsc},${this.interest}`);
    },
}
let axisBank={
    bankName:"Axis Bank",
    Location:"Aundh,Pune",
    accountNo: 987654321,
    ifsc:"AXIS1234",
    interest:"6.5%",
    showDetails:function(){
        console.log(`${this.bankName},${this.Location},${this.accountNo},${this.ifsc},${this.interest}`);
    }
}
let hdfcBank={
    bankName:"HDFC Bank",
    Location:"Viman.,Nagar",
    accountNo:234567892,
    ifsc:"HDFC9875",
    interest:"7%",
    showDetails:function(){
        console.log(`${this.bankName},${this.Location},${this.accountNo},${this.ifsc},${this.interest}`);
    }
}
let yesBank={
    bankName:"Yes Bank",
    Location:"Nigdi",
    accountNo:3451267898,
    ifsc:"YES13567",
    interest:"5.5%",
    showDetails:function(){
        console.log(`${this.bankName},${this.Location},${this.accountNo},${this.ifsc},${this.interest}`);
    }
}
sbiBank.showDetails();
axisBank.showDetails();
hdfcBank.showDetails();
yesBank.showDetails();
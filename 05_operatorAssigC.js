var eligibility= function(gradScore,hscScore,sscScore,candidateName){
  
    var result= gradScore>=70||hscScore>=80||sscScore>90?`Congrats ${candidateName} you are eligible for TCS interview`:`Unfortunately ${candidateName} you are not eligible for TCS interview`
   console.log(result);
}

eligibility(80,86,90,"Asmita");
eligibility(70,65,55,"Pranay");
eligibility(60,79,88,"Alekhya");

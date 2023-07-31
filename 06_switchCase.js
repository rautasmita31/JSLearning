
//Log Week of the Day-Using if else
var dayofWeek=function(day){
switch (day) {
    case 1:
        console.log(`${day} - Monday`);
        break;
        case 2:
        console.log(`${day} - Tuesday`);
        break;
        case 3:
        console.log(`${day} - Wednesday`);
        break;
        case 4:
        console.log(`${day} - Thusrsday`);
        break;
        case 5:
        console.log(`${day} - Friday`);
        break;
        case 6:
        console.log(`${day} - Saturday`);
        break;
        case 7:
        console.log(`${day} - Sunday`);
        break;

    default:
        console.log(`Invalid Input`);
        break;
}
console.log(`---------------End of switch case--------------------`);
    /*if(day==1){
        console.log(`${day}-Monday`);
    }
    if(day==2){
        console.log(`${day}-Tuesday`);
    }
    if(day==3){
        console.log(`${day}-Wednesday`);
    }
    if(day==4){
        console.log(`${day}-Thursday`);
    }
    if(day==5){
        console.log(`${day}-Friday`);
    }
    if(day==6){
        console.log(`${day}-Saturday`);
    }
    if(day==7){
        console.log(`${day}-Sunday`);
    }
*/
}
dayofWeek(2);
dayofWeek(7);
dayofWeek(4);
dayofWeek(9);
dayofWeek(100);
dayofWeek(null);
dayofWeek(undefined);
dayofWeek("GK");
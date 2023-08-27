
//In Js,we call function as first class citizen:FE,Callback Function and Func can return another function
 
function show(){
    console.log('Inside show');
    let innerFunction=function(){
        console.log('Inner Function');
    }
    return innerFunction;
}
let inner=show();
inner();
console.log(inner);
show()();

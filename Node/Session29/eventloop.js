// console.log("This is Step-1");

// setTimeout(function(){
//     console.log("This is Step-2");
// },200);

// console.log("This is step-3");




function process(num1,num2){
    return num1+num2;
}

function addition(num){
    return process(num,num+10);
}

function printResult(num){
    var add= addition(num);
    console.log("adition :",add);
}

printResult(20);
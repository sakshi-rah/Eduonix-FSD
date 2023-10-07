function hof(cb){
    console.log("Executing Higher Order Function");
    cb();
}

function callBackFunction(){
    console.log("CallBack Function");
}

hof(callBackFunction);


function myTimeOut(cb){
    console.log("Executing MyTimer Higher Order Function");
    setTimeout(cb,3000);
}

function callBackFunction1(){
    console.log("Executing CallBack")
}

myTimeOut(callBackFunction1);
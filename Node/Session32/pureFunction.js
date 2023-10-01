
let rateOfInterest=5.5;

function calaulateInterest(principle,rateOfInterest,noOfYears){

    return (principle*rateOfInterest*noOfYears)/100;
}

const result= calaulateInterest(3000,4.5,5);

console.log("Interest: "+ result);
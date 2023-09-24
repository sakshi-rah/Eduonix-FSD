const name="Sakshi Rahangdale";
const age= 22;

//01. sorthand property
const user= {name,age}; 

console.log('User Name:',user.name);
console.log('User Age:',user.age);


//02. Compted property using  []
const propertyName= 'color';
const bike={
    [propertyName]:'White'
}

console.log("ComputedProperty:",bike.color);

//03. Method Defination
const calculator= {
    add(a,b){return a+b;},
    sub(a,b){return a-b;}
}

console.log("Addition:",calculator.add(30,2));
console.log("Subtaction:",calculator.sub(35,20));


//04.

const car={
    //variable declaration
    carName:"Tata NEXON",
    color:"Nevy Blue",
    Model:"Top Model",

    //Function Declaration
    start(){
        console.log(`${this.carName} started`);
    },

    stop(){
        console.log(`${this.carName} stopped`);
    }
}

console.log(car.carName);
console.log(car.color);
console.log(car.Model);
car.start();
car.stop();
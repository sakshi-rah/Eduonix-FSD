function addition(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log("Addition of 3 Numbers is "+addition(3)(7)(6));

const substract = (x)=>(y)=>(z)=>x-y-z;
console.log("Substraction of 3 Numbers is "+substract(8)(3)(2));
function Counter(){

    //private variable
    let count=10;

    //private function
    function increment(){
        count++;
    }

    //public method
    this.getCount = function(){
        return count; //inner count
    }

    this.incrementCount =function(){
        increment(); //calling inner function
    }
    
}


const Cobj= new Counter();
 
console.log(Cobj.getCount());
Cobj.incrementCount();
console.log(Cobj.getCount());
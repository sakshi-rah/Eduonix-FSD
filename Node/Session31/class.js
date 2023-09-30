//ES6

class Student {

    constructor(name,email,country,dob){
        this.name=name;
        this.email=email;
        this.country=country;
        this.dob=dob;

    }

    sayHello(){
        console.log(`Hello Sir..!! My name is ${this.name}`);
    }
    getEmail(){
        console.log(`Hello Sir..!! My Email is ${this.email}`);
    }
    calculateAge(){
        console.log(`Hello Sir..!! My Age is ${2023 - this.dob}`);
    }
}

//create an object of class

let stu1= new Student("Sakshi Rahangdale","rahangdalesakshi2@gmail.com","India",2001);
console.log(stu1);
stu1.sayHello();
stu1.getEmail();
stu1.calculateAge();
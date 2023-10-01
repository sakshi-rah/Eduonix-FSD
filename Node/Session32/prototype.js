//functional constructor
var Teacher= function(name,email,country,dob){
    this.name=name;
    this.email=email;
    this.country=country;
    this.dob=dob;
}

//prototype
Teacher.prototype.sayHello= function(){
    console.log(`Hello Everyone....! My name is ${this.name}`);
}

//prototype
Teacher.prototype.calculateAge= function(){
    console.log(`${this.name}'s Age is ${2023-this.dob}`);
}

//prototype
Teacher.prototype.display= function(){
    console.log(`Name: ${this.name}`);
    console.log(`Email: ${this.email}`);
    console.log(`Country: ${this.country}`);
    console.log(`Dob: ${this.dob}`);
}

Teacher.prototype.getEmail=function(){
    console.log(`My Email  is: ${this.email}`);
}

//Creating objects

let Teacher1= new Teacher("Sakshi Rahangdale","sr@gmail.com","India",2001);
console.log(Teacher1);
Teacher1.sayHello();
Teacher1.calculateAge();
Teacher1.getEmail();
Teacher1.display();
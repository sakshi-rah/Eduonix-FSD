const canPrint={
    Print(){
        console.log("Name: Sakshi");
    }
}

const canRead={
    Read(){
        console.log("Name is Sakshi.");
    }
}

const canEmail={
    Email(){
        console.log("Email: sr07@gmail.com");
    }
}

const person = Object.assign(canPrint, canRead, canEmail)
// person.Print();
// person.Read();
// person.Email();
console.log(person);
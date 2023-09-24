const person={
    name:"Sakshi",
    address:{
        city:"Tumsar",
        street:"xyz Main st."
    },
    phonebook:{
        personal:"1234567890",
        home:"9876543210"
    }
}

console.log(person?.address?.city);
console.log(person?.phonebook?.home);

const person1={
    name:"Mukesh",
    address:{
        city:"Nagpur",
        street:"ABC Main st."
    }
    
}

console.log(person1?.name);
console.log(person1?.address?.city);
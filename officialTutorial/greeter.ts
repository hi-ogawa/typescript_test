class Student {
    fullname: string;
    constructor(public firstname    : string,
                public middleinitial: string,
                public lastname     : string) {
	this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
}

interface Person {
    firstname: string
    lastname: string
}


var user0 = {firstname: "John", lastname: "Doe"};
var user1 = new Student("Jane", "M.", "Doe");



function greeter0(person: Person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
function greeter1(person: Student) {
    return "Hello, " + person.fullname;
}

// ok
console.log(greeter0(user0))

console.log(greeter1(user1))

console.log(greeter0(user1)) // subtyping

// wrong
// console.log(greeter1(user0))


// ok
function greeter2(person: Student) {
    return "Hello, " + person.firstname + " " + person.lastname;
}

// wrong
// function greeter3(person: Person) {
//     return "Hello, " + person.fullname;
// }
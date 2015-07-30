var Student = (function () {
    function Student(firstname, middleinitial, lastname) {
        this.firstname = firstname;
        this.middleinitial = middleinitial;
        this.lastname = lastname;
        this.fullname = firstname + " " + middleinitial + " " + lastname;
    }
    return Student;
})();
var user0 = { firstname: "John", lastname: "Doe" };
var user1 = new Student("Jane", "M.", "Doe");
function greeter0(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
function greeter1(person) {
    return "Hello, " + person.fullname;
}
// ok
console.log(greeter0(user0));
console.log(greeter1(user1));
console.log(greeter0(user1)); // subtyping
// wrong
// console.log(greeter1(user0))
// ok
function greeter2(person) {
    return "Hello, " + person.firstname + " " + person.lastname;
}
// wrong
// function greeter3(person: Person) {
//     return "Hello, " + person.fullname;
// } 

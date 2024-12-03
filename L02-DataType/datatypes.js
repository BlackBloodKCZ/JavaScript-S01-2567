const people = ["Aaron", "Mel", "John"];
const one = 1;
const str = "Helllo World";
const b = true;
const employee = {
    firstName : "Warinyupha",
    lastName : "Jiamyoo",
};

function sayHello(person) {
    console.log("Hello " + person.firstName);
}

console.log(typeof people);
console.log(typeof sayHello);
console.log(employee instanceof Array);
sayHello(employee);
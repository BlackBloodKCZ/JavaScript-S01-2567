class Dog {
    constructor(name) {
        this._name = name;
    }

    introduce() {
        console.log("This is " + this._name + " !");
    }

    static bark() {
        console.log("Woof!");
    }
}

const myDog = new Dong("Buster");
myDog.introduce;

Dong.bark;

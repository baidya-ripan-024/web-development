class Person {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    // setter for name and age
    set name(name) {
        this._name = name;
    }
    set age(age){
        this._age = age;
    }

    // getter for name and age
    get name() {
        return this._name;
    }
    get age() {
        return this._age;
    }

    displayInformation() {
        console.log(`name: ${this._name} and age: ${this._age}`);
    }
}

const person = new Person('Ripan', 21);

person.displayInformation();
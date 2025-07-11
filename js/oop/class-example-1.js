class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    displayInformation() {
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
    }
}

const person1 = new Person('Ripan', 21);
person1.displayInformation();
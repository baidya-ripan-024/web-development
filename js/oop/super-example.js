class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

class Fish extends Animal {
    constructor(name, age, runSpeend) {
        super(name, age);
        this.runSpeend = runSpeend;
    }
    run() {
        console.log(`run speend ${this.runSpeend}`);
    }
}

const fish = new Fish('fish', 1, 10);

console.log(fish.name);
console.log(fish.age);
fish.run();
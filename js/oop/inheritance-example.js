class Parent {
    constructor() {
        console.log('parent class constructor called.');
    }

    display(){
        console.log('Inside parent class');
    }
} 
class Child extends Parent {
    constructor() {
        super();
        console.log('Child class constructor called.');        
    }

    display() {
        console.log('Inside child class');
    }
}


const child = new Child(); 
const child2 = new Parent();
const parent = new Parent();


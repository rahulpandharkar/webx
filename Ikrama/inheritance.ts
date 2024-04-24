class Animal {
    public name: string;

    constructor(name:string){
        this.name = name;
    }

    display(): void{
        console.log(`${this.name} make noises`);
    }

}

class Dog extends Animal{
    constructor(name:string){
        super(name);
    }
    display():void{
        console.log(`${this.name} Barks`);
    }
}

class Cat extends Animal{
    constructor(name:string){
        super(name);
    }

    display(): void {
        console.log(`${this.name} Meows`);
        
    }
}

class Puppy extends Dog{
    constructor(name:string){
        super(name);
    }
    display():void{
        console.log(`${this.name} barks softly`);

    }
}

const puppy = new Puppy("Puppy");
const dog = new Dog("Dog");
const cat = new Cat("Cat");
const animal = new Animal("Animal");

animal.display();
puppy.display();
dog.display();
cat.display();

class A {
    public name: string = "ikrama";
    private age: number = 24;
    protected id: number = 2234564;

    protected display():void{
        console.log(this.age);
    }

}
class B extends A{
    constructor(id:number,name:string,age:number) {
        super();
        this.id = id;
        this.name=name;
        // this.age=age; //can not access because of access modifier its declared private

    }
    display1():void{
        this.display(); //accessed by child class because protected method can not used outside class and subclass
    }

}
const a = new A();  
console.log(a.name);
// console.log(a.age); can not access it because of access modifier 
// console.log(a.id);  can not access it because of access modifier 
const b = new B(2344,"ikrama",23);
b.display1(); 

// B.display(); //error bcoz method is protected
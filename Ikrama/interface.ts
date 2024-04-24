interface Shape{
    getArea: () => number;
}
class Rectangle implements Shape{
    constructor(protected width:number, protected height:number){}
    
    getArea():number{
        return this.width*this.height;
    }
}

class Circle implements Shape{
    constructor(protected radius:number){}

    getArea() : number{
        return Math.PI * this.radius * this.radius;
    }
}

const rect = new Rectangle(10,20);
console.log(rect.getArea());

const circle = new Circle(5);
console.log(circle.getArea());
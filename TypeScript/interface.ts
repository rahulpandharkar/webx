interface Shape { 
    name: string; 
    corners(): number; 
}

class Square implements Shape { 
    name = 'Square'; 
    corners(){
        return 4; 
    }
}

class Triangle implements Shape { 
    name = 'Triangle'; 
    corners(){ 
        return 3; 
    }
}

const obj_triangle = new Triangle();
const obj_square = new Square(); 

console.log(obj_square.corners()); 
console.log(obj_triangle.corners()); 
class A{ 
    constructor(public val1: string)
    {} 
        func(val2: number = 0) 
        { 
            console.log('Value by the func function', val2); 
        }
    }

class B extends A { 
    func2()
    {
        console.log("Value by func2, SingleLevel inheritance hence shown"); 
    }
}

class C extends B{ 
    func3()
    {
        console.log("Value by func3, MultiLevel Inheritance hence shown"); 
    }
}

class D extends A{ 
    func4()
    {
        console.log("Value by func4, Hierarchical Inheritance hence shonw"); 
    }
}



const obj = new B('Hello');
const obj2 = new C('Hello'); 
const obj3 = new D('Hello'); 
obj2.func(2);
obj2.func2();   
obj2.func3(); 
obj3.func4(); 

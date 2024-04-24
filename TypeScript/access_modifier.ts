class AB { 
    public val1: string; 
    private val2: number; 
    protected val3: string; 
    constructor(val1: string, val2: number, val3: string){ 
        this.val1 = val1; 
        this.val2 = val2; 
        this.val3 = val3; 
    }

    public func1(){ 
        return `Value1: ${this.val1}, Value2: ${this.val2}, Value3: ${this.val3}`;
    }
}

const object1 = new AB('First', 2, 'Third'); 
console.log(object1.val1);
try{
console.log(object1.val2); 
console.log(object1.val3);
}catch (error){ 
    console.log("Error Occured");
}
console.log(object1.func1()); 

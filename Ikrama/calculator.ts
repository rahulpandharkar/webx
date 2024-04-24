const args: string[] = process.argv;
if(args.length<5){
    console.log("provide argument");
} else{
    
    const num1: number = parseInt(args[2]);
    const num2: number = parseInt(args[3]);
    const operator: string = args[4];
    function calculate(num1:number,num2:number,operator:string) : number {
        switch(operator){
            case '+':
                return num1+num2; 
            case '-':
                return num1-num2;
            case '*':
                return num1*num2;
            case '/':
                return num1/num2;
            case '%':
                return num1%num2;
            default:
                throw new Error("Invalid operator");

        }
    }
    console.log(calculate(num1,num2,operator));
}
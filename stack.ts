interface IStack{
    // stack: number[]
    push:(item: number)=> void
    pop: ()=> void
    peek: ()=> number 
}
class Stack implements IStack{
    public stack: number[];
    constructor(stack: number[]) {
        this.stack=stack;
    }
    get length(){
        return this.stack.length;
    }
    get stacks(){
        return this.stack
    }
    push(number: number){
        this.stack.push(number);
    }
    pop(){
        this.stack.pop();
    }
    peek(){
        return this.stack[this.length-1]
    }
}
var newStack = new Stack([]);
newStack.push(4);
console.log(newStack.push(5))
console.log(newStack.stacks);

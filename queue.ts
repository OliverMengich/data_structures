interface IQueue{
    enquue: (el: number)=> void
    dequeue: ()=> void
    isEmpty: ()=> boolean
    peek: ()=> number
}
class Queue implements IQueue{
    public queue: number[]
    constructor() {
        this.queue = []
    }
    get length(){
        return this.queue.length;
    }
    enquue(el: number){
        this.queue.push(el);
    }
    dequeue(){
        this.queue.shift();
    }
    peek(){
        return this.queue[0]
    }
    isEmpty(){
        return this.length ===0;
    }
}
let newQueue = new Queue();
newQueue.enquue(5)
newQueue.enquue(7)
newQueue.dequeue()
console.log(newQueue.queue)

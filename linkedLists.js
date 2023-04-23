class LinkedList{
    // public head;
    // public tail;
    // public length;
    constructor(value){
        this.head={
            value,
            next: null
        }
        this.tail=this.head;
        // this.head.next=this.tail
        this.length=1
    }
    push(value){
        const newTail={
            value,
            next: null,
        }
        this.tail.next=newTail
        this.tail=newTail;
        this.length++; 
    }
    //adds at the beginning of the LinkedList
    unshift(value){
        // first, read the head Item
        const currHead=this.head;
        //create a new head instance and replace that value with the new value
        const newHead={
            value,
            next: currHead
        }
        //change the current head to this new head instance
        this.head=newHead;
        // increase the length
        this.length++;
    }
    pop(){
        //removes the tail item inserted
        //del
        const currTail=this.tail;
        console.log(currTail);
        //remove this tail from the head reference
        //set that head reference to null
        console.log(this.head.next)
    }
    insert(index,value){
        let iterator=0;
        let currHead=this.head;
        let newV=this.head;
        if (index>this.length-1) {
            return 'Index is grater than length'
        }
        var newHead={}
        while (iterator<index) {
            iterator++;
            currHead=currHead.next;
            newHead={
                value,
                next:currHead
            }
        }
        console.log('Head is: ',newHead);
        //1==>3==>5==> ->old
        //1==>8==>3==>5==> ->new
        // traverse through the list index times
        // read the next value and store in variable
        // create a new list with with value as new value and next as variable passed
        // then i'll replace the head from second index with new instance
    }
}
const myLinkedList = new LinkedList(20);
myLinkedList.push(10);
myLinkedList.push(15);
myLinkedList.insert(1,4);
// myLinkedList.unshift(3)
// myLinkedList.unshift(4)
// myLinkedList.push(7);
// myLinkedList.pop()
console.log(myLinkedList);

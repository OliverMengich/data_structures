const strings: string[] = ["a","b","c","d"];

strings.push('e') //O(1)
strings.pop() //O(1)
strings.unshift('i','ii') //O(n) ->loops through array to assign new indices
//unshift can't be best

strings.splice(2,1,'f') //O(n)
console.log(strings);

class MyArray<T>{
    public data: { [index: number]: T};
    length: number;
    constructor(){
        this.length = 0;
        this.data= {}
    }
    get(index: number){
        return this.data[index]
    }
    push(item: T){
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop(){
        const lastItem = this.data[this.length-1];
        delete this.data[this.length-1];
        this.length--;
        return lastItem
    }
    delete(index: number){
        const item = this.data[index];
        this.shiftItems(index)
    }
    shiftItems(index:number){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] ==this.data[i]
        }
        delete this.data[this.length-1];
        this.length--;
    }
}
let newArray = new MyArray()
newArray.push(5)
newArray.push(4)
newArray.push(3);
newArray.push("hello")
newArray.push(2)
console.log(newArray.push("hello"));
console.log(newArray.get(3));

//when you get a question like "reverse a string", treat it as an array, do a
//=========================Exercise, reverse a string==========
function reverse(str: string) {
    if (!str || str.length < 2 || typeof str !=='string') {
        return 'Enter valid string!!'
    }
    let stringArray= str.split('');
    let newArray: string[]=[];
    for (let i = stringArray.length-1; i >= 0; i--) {
        //make the last item as first item. you can return a new array
        newArray.push(stringArray[i])
    }
    return newArray.join('');
    
}
const reverseStr =(str: string) =>str.split('').reverse().join('')
console.log(reverseStr(''));

//=========================Merge Sorted Arrays=================
const sortArrays = (arr1:number[],arr2:number[])=> [...arr1,...arr2];
console.log(sortArrays([0,1,3],[4,5,6]));

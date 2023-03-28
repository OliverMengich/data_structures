const strings: string[] = ["a","b","c","d"];

strings.push('e') //O(1)
strings.pop() //O(1)
strings.unshift('i','ii') //O(n) ->loops through array to assign new indices. This adds an element at the beginning of array
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
    get items(){
        return this.data;
    }
    get(index: number){
        if (index>=this.length) {
            throw new Error('Index out of range')
        }
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
        return item;
    }
    private shiftItems(index:number){
        for (let i = index; i < this.length-1; i++) {
            this.data[i] ==this.data[i+1]
        }
        delete this.data[this.length-1]; // deletes the last item
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
console.log('Items in the array are: ',newArray.delete(1))
// console.log('Items of index 6', newArray.get(6));

//when you get a question like "reverse a string", treat it as an array, do a
//convert to an array, loop through it to reverse is.
//=========================Exercise, reverse a string==========
function reverse(str: string) {
    if (!str || str.length < 2 || typeof str !=='string') {
        return '-----!!Enter valid string!!-----'
    }
    let newArray: string[]=[];
    for (let i = str.length-1; i >= 0; i--) {
        //make the last item as first item. you can return a new array
        newArray.push(str[i])
    }
    return newArray.join('');
    
}
console.log(reverse('Olly Kem'));

const reverseStr =(str: string) =>str.split('').reverse().join('')
console.log(reverseStr(''));

//=========================Merge Sorted Arrays=================
const sortArrays = (arr1:number[],arr2:number[])=> [...arr1,...arr2];
// console.log(sortArrays([0,1,3],[4,5,6]));
function mergeSortedArrays(arr1:number[], arr2: number[]) {
    let newArr: number[] = [];
    if (arr1.length===0 ) {
        console.log('arr1');
        
        return arr2
    }else if (arr2.length===0) {
        console.log('arr2');
        return arr1
    }else{
        for (let i = 0; i < arr1.length; i++) {
            newArr.push(arr1[i])
        }
        for (let i = 0; i < arr2.length; i++) {
            newArr.push(arr2[i])
        }
        return newArr;
    }
}
console.log('merged Sorted array is: ',mergeSortedArrays([1,3],[5,7,8]));

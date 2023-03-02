let user ={
    age: 9,
    name: 'Oliver',
    magic: true,
    screen: function() {
        console.log("Helloooo");
    }
}
// console.log(user.age); //O(1)
//=================Maps==============
let mapps = new Map();
//Maps allows you to save any data type as key e.g array, fnctions
//Maps also maintains insertion order.
//================Sets==========
//only stores keys and no values
let sets = new Set();

class HashTable{
    data: unknown[][];
    constructor(size: number){
        this.data = new Array(size);
    }
    _hash(key:string){
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash =(hash +key.charCodeAt(i) * i) % this.data.length
        }
        
        return hash;
    }
    set(key: string,value: unknown){
        //generate the hash
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = []; 
        }
        this.data[address].push([key,value]);
        return this.data
    }
    get(key:string){
        let keyHash = this._hash(key);
        console.log('Key hash is: ',keyHash);
        
        const currBckt: any[] = this.data[keyHash];
        if (currBckt) {
            for (let i = 0; i < currBckt.length; i++) {
                if (currBckt[i][0]===key) {
                    return currBckt[i][1]
                }
            }
        }
        return undefined
    }
}
const myhashTable = new HashTable(50);
console.log(myhashTable.set('grapes',10000));
console.log(myhashTable.set('apples',800));
console.log(myhashTable.get('apples'))
//sets-> adds to this.data
//gets-> retrieves from this.data
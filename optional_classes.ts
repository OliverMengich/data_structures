//=================1.reference types================
// []===[] //returns false as javascript compares referenc not value
var obj1={value: 10}
var obj2 = obj1;
var obj3 = {value:10}
console.log(obj3===obj2); //returns false as they point to a different point in memory
var num1=1;
var num2=1
console.log(num1===num2); //returns true. primitive variables compares the value

//=================2. Context===================
//tells where we are within the object. 
console.log(this)// the obect environment we are in right now
const obj4 = {
    a: function () {
        console.log(this);
    }
}
//=================3. Instantiation==================
class Player{
    public name;
    public type
    constructor(name:string,type: string) {
        console.log(this);
        this.name=name;
        this.type=type;
    }
    introduce() {
        console.log(`Hi, I am ${this.name}, a ${this.type}`);
    }
}
var footballer = new Player("Messi","footballer");
console.log(footballer.introduce());
class BasketBaller extends Player{
    constructor(name: string,type:string){
        super(name,type)
    }
    play(){
        console.log(`Plays at court ${this.type}`);
    }
}
const backe1=new BasketBaller("Lebron","Basketballer");
backe1.introduce();
backe1.play();

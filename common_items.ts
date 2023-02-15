const array1 = ['a','b','c','x'];
const array2=['z','4','g']
function CommonItems(array1: string[],array2: string[]) {
    let contains=false;
    array1.map((it)=>{
        if(array2.includes(it)){
            contains=true;
        }
    });
    return contains;

}
console.log(CommonItems(array1,array2))
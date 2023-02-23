const array1 = ['a','b','c','x'];
const array2=['z','4','a']
function CommonItems(array1: string[],array2: string[]) {
    let contains=false;
    array1.map((it)=>{
        if(array2.includes(it)){
            contains=true;
        }
    });
    return contains;

}
console.log('Function 1: ',CommonItems(array1,array2))
//=====================Optimized solution====================

// O(a+b) ->Time Complexity
//O(a)-> Space Complexity AS  we are adding array1 to object
function CommonItems2(arr1: string[], arr2: string[]): boolean{
    let map: {[key: string]: boolean} = {};
    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            map[arr1[i]] = true;
        }
    }
    // console.log(map);
    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            return true
        }
    }
    return false
}
//==================JS BuiltIn methods===================
//Using javascript inbuilt javascript methods, more readable and more concise
console.log('Function 2:',CommonItems2(array1,array2))
const CommonItems3 = (arr1: string[],arr2: string[])=>(arr1.some(item=>arr2.includes(item)));
console.log('Function 3: ',CommonItems3(array1,array2));

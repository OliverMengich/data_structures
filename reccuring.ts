function findOccurence(array:number[]) {
    let newArray: typeof array=[];
    for (let i = 0; i < array.length; i++) {
        for (let j = i+1; j < array.length; j++) {
            
            if (array[i]===array[j]) {
                return array[i]
            }
        }
    }
    return undefined
}
function findOccurence1(array: number[]){
    let map:{[number: number]: number} = {};
    for (let i = 0; i < array.length; i++) {
        if (map[array[i]] !== undefined){
            return array[i]
        }else{
            map[array[i]] = i;
        }
        // console.log(map);
        
    }
    return undefined;
}
// console.log(findOccurence1([2,1,1,2,3,5,1,2,4]))
console.log(findOccurence1([2,3,5,4]))
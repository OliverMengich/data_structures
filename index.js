let numArr = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
var removeDuplicates = function (nums) {
    // remove space from array
    const newN = nums.reduce((acc, num, idx) => {
        
        if (acc.indexOf(num) === -1) {
            
            acc.push(num);
            return acc
        }
        else{
            return acc;
        }
    }, []);
    // newN.trim();
    return newN;
};

console.log(removeDuplicates(numArr))
// var removeElement = function (nums, val) {
//     return nums.filter((num) => num !== val);
// };
var removeElement = function (nums, val) {
    // return nums.filter((num) => num !== val);
    let newArr = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != val) {
            newArr.push(nums[i]);
        }
    }
    return newArr;
};
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
var removeDuplicates = function (nums) {
    const newN = nums.reduce((acc, num) => {
        if (acc[acc.length - 1] !== num) {
            acc.push(num);
        }
        return acc;
    }, []);

    return newN.length;
};
console.log('duplicates',removeDuplicates([1,1,2]));
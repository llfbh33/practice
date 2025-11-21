// const array = new Array(2).fill(1, 2);

// console.log('array', array)


    
// Notes on this function, we do not need to interact with the res as an array, only need to return as an array
    // we can update the interactions and use less space by only making left and right variables
    function twoSum(numbers, target) {
        const res = [0, numbers.length - 1]  // [0, 1]

        while (numbers[res[0]] + numbers[res[1]] !== target) {   // 1 + 2 = 4
            let left = res[0];   // 0
            let right = res[1];  // 2

            numbers[left] + numbers[right] > target ? res[1] = right - 1 : res[0] = left + 1;  // 4 > 3
            console.log('res', res)
        }

        res[0] = res[0] + 1;
        res[1] = res[1] + 1;  // res = []
        return res; 
    }

    // let array = [1,2,3,4]
    // array[3] -= 1;
    // console.log('array', array)
    console.log(twoSum([1,2,3,4], 3))

function twoSumm2 (numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {   // this condition will stop the while loop after comparing all numbers however we will have a solution by then since one is garenteed.

    }
}
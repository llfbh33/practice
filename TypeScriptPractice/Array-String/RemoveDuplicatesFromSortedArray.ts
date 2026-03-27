/*

Remove Duplicates from Sorted Array

*/

function removeDuplicates(nums: number[]): number {
    // make a variable with the value of the first number in nums
    let value: number | undefined = nums[0];

    // make a variable starting at 1 that increases only when we find a new number
    let k: number  = 1;
    // loop through starting at 1
    for (let i: number = 1; i < nums.length; i++) {
        const curr: number | undefined = nums[i];  // we need to prove that nums[i] is not undefined in order to set it as nums[k]
        // if the number does not match the value saved
        if (curr !== undefined && curr !== value) {
            // update nums[k] to that number
            nums[k] = curr;
            // increase k
            k++;
            // update value
            value = curr;
        }
        // else continue
    }
    // return k
    return k
};

let nums: number[] = [1,2,3,3,4,5,5,5,6]
console.log(removeDuplicates(nums))
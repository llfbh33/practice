/*'
189. Rotate Array

Input - array of integers and an integer - k
Rotate the array to the right by k steps, k is not negitive

Can solve this by haveing a nested loop
first loop has a loop count of k
second loop will be the length of the array
save an element to a variable, overwrite it with j - 1, then place the value on the next loop
This would be O(n²) on Time though if O(1) on space

*/

function rotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        let stored = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            let next = nums[j];
            nums[j] = stored;
            stored = next;
        };
    }
    return nums;
};

let nums = [1,2,3,4,5,6,7]
console.log(rotateArray(nums, 3))


const rotateArray =  (nums, k) => {
    
}
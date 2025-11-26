/*  
Contains Duplicate

Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false
*/

// Questions:
    // Are the integers in the array orderd or random?
        // We will write a solution which covers both situations


// Unordered Array
const hasDuplicates = (nums) => {
    // Make a set
    let duplicates = new Set();
    // start a loop
    for (let i = 0; i < nums.length; i++) {
        // if the number exists in the set return true
        if (duplicates.has(nums[i])) return true;
        // else add number to the set
        else duplicates.add(nums[i]);
    }
    // return false
    return false;
}

let nums = [3,5,2,7,3,5,1,2,9]
console.log(hasDuplicates(nums))

// Ordered array
const hasDuplicates2 = (nums) => {
    // make a pointer to i - 1
    // start a loop at nums[1] to nums length - 1
    // return true if the num at pointer and the num at i are the same
    // if they are not then set pointer to i
    // if we finish the loop return false
    // Space will be O(1) because it is constant space
    // time will be O(n) worst case because we could look at all the integers a total of one time

    let pointer = 0
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[pointer]) return true;
        else pointer = i;
    }
    return false;
}

console.log(hasDuplicates([1,2,3,3]))
/*
Two Sum
Given an array of integers nums and an integer target, return the indices i and j such that nums[i] + nums[j] == target and i != j.

You may assume that every input has exactly one pair of indices i and j that satisfy the condition.

Return the answer with the smaller index first.

Example 1:

Input: 
nums = [3,4,5,6], target = 7

Output: [0,1]
Explanation: nums[0] + nums[1] == 7, so we return [0, 1].

Example 2:

Input: nums = [4,5,6], target = 10

Output: [0,2]
Example 3:

Input: nums = [5,5], target = 10

Output: [0,1]
Constraints:

2 <= nums.length <= 1000
-10,000,000 <= nums[i] <= 10,000,000
-10,000,000 <= target <= 10,000,000
*/

// Will always have a solution
// provide the two indices of numbers which add up to the target
    // smaller first
    // not the same indice

// input: array, integer
// output: array of indices

// Questions:
    // Are the array numbers always in order



// Unordered Array - hashmap
const twoSum = (nums, target) => {
    // create a map
    const map = {};
    // loop through the nums
    for (let i = 0; i < nums.length; i++) {
        // find x from target - nums[i] = x
        const x = target - nums[i];
        // if x exists in map return indices
        if (map[x] === undefined) map[nums[i]] = i;
        else return [map[x], i]
        // else add nums[i] to map
    }
    // Space of O(n) because the map can store up to all numbers.
    // Time of O(n) because worst case each number is processed once
}



// Ordered Array - two pointer
const twoSum2 = (nums, target) => {
    // create a left and right pointer for the two ends of nums indices
    let left = 0;
    let right = nums.length - 1;
    // while loop condition of left being less than right
    while (left < right) {
        const sum = nums[left] + nums[right];
        // if on target, return left and right 
        if (sum === target) return [left, right];
        // if sum of left and right is greater than target 
            // reduce right by one
        // if sum of left and right is less than target
            // increase left by one
        sum > target ? right -= 1 : left += 1;  
    }
    // Space of O(1) because we are not creating any new memory
    // Time of O(n) because we will only only look at each num up to one time
};

let array = [1, 2, 3, 4, 5];
let target = 7;
console.log(twoSum2(array, target))
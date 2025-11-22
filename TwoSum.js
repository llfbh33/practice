/*
Two Sum
Solved 
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

// All the examples they provided of arrays are in non-decending order however it is not specified that they will always be 
// Return indices on a 0 base
// There will be a solution
// there will be only one solution
// numbers can be negitive or positive
// We could use a loop and a nested loop as a brute force method however our time complexity would be O(n 2)
// If we could be sure that the array was in order then we could use a two pointer method
// or we could use a one pointer method and a map or a set

// We are going to solve with a map here

let nums = [3,4,5,6]
let target = 7

function twoSum(nums, target) {
    // create a map
    const map = {};   // { 3 : 0}
    // loop through the nums
    for (let i = 0; i < nums.length; i++) {     // i = 1
    // create a variable for the nums at i
    const y = nums[i];   // y = 4
    // subtract the variable from the target to find the number which we need to match with
    const x = target - y;   // x = 3
        // Check the map for this number 
        if (map[x] !== undefined) {  // need to make sure that it is undefined
            // if it exists, use the index saved with it and return the indices
            return [map[x], i];  // [0, 1]
        } else {
            // else, add the variable with the index to the map
            map[y] = i;
        }     
    }
    // Since we know we will have a solution we do not need to return outside of the loop
}


console.log(twoSum(nums, target))



function twoSum2(nums, target) {
    const map = {};  

    for (let i = 0; i < nums.length; i++) {  
        const y = nums[i];   
        const x = target - y;   

        if (map[x] !== undefined) { 
            return [map[x], i];  
        } else {
            map[y] = i;
        }     
    }
}
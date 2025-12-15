/*
You are given an array of distinct integers nums, sorted in ascending order, and an integer target.

Implement a function to search for target within nums. If it exists, then return its index, otherwise, return -1.

Your solution must run in 
O
(
l
o
g
n
)
O(logn) time.

Example 1:

Input: nums = [-1,0,2,4,6,8], target = 4

Output: 3
Example 2:

Input: nums = [-1,0,2,4,6,8], target = 3

Output: -1
Constraints:

1 <= nums.length <= 10000.
-10000 < nums[i], target < 10000
All the integers in nums are unique.
*/

function search(nums, target) {
    let idx = Math.floor(nums.length / 2);
    if (nums[idx] === target) return idx;
    while (nums[idx] !== target && idx >= 0 && idx < nums.length) {
        nums[idx] > target ? idx-- : idx++;
        console.log(idx)
    }
    if (nums[idx] === target) return idx;
    else return -1;
}

let nums = [-1,0,2,4,6,8]
let target = 4;
let nums2 = [-1,0,2,4,6,8]
let target2= 3
console.log(search(nums2, target2))
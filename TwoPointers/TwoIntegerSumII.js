/*
Two Integer Sum II
Solved 
Given an array of integers numbers that is sorted in non-decreasing order.

Return the indices (1-indexed) of two numbers, [index1, index2], such that they add up to a given target number target and index1 < index2. Note that index1 and index2 cannot be equal, therefore you may not use the same element twice.

There will always be exactly one valid solution.

Your solution must use 
O(1) additional space.

Example 1:

Input: numbers = [1,2,3,4], target = 3

Output: [1,2]
Explanation:
The sum of 1 and 2 is 3. Since we are assuming a 1-indexed array, index1 = 1, index2 = 2. We return [1, 2].

Constraints:

2 <= numbers.length <= 1000
-1000 <= numbers[i] <= 1000
-1000 <= target <= 1000
*/

// use a pointer system
// walk in from the left and right untill you find the target

function twoSum(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;

    while (left < right) {
        let sum = numbers[right] + numbers[left];

        if (sum === target) {
            return [left + 1, right + 1]
        };

        sum > target ? right -= 1 : left += 1;
    };
    // Space of O(1) because we are only making small variables, constant space
    // Time of O(n) because worst case, we will look at each number in the array once
};

let nums = [1,2,3,4]
console.log(twoSum(nums, 3))
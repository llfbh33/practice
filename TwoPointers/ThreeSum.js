/*
3Sum
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] where nums[i] + nums[j] + nums[k] == 0, and the indices i, j and k are all distinct.

The output should not contain any duplicate triplets. You may return the output and the triplets in any order.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]

Output: [[-1,-1,2],[-1,0,1]]
Explanation:
nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
The distinct triplets are [-1,0,1] and [-1,-1,2].

Example 2:

Input: nums = [0,1,1]

Output: []
Explanation: The only possible triplet does not sum up to 0.

Example 3:

Input: nums = [0,0,0]

Output: [[0,0,0]]
Explanation: The only possible triplet sums up to 0.

Constraints:

3 <= nums.length <= 1000
-10^5 <= nums[i] <= 10^5
*/

// returning the actual numbers not the indices
// must add up to 0


// hashmap solution
// sort before hand so that we can skip duplicates, this will effectivly reduce the O(n³) to O(n²)
function threeSum(nums) {
    // sort the array
    nums.sort((a, b) => a - b);
    // make a map
    let map = {};
    let res = [];
    // loop through all the nums
    for (let i = 0; i < nums.length; i++) {
    // save each number in the set with a value of the amount of times it shows up
        map[nums[i]] ? map[nums[i]] += 1 : map[nums[i]] = 1;
    }
    // exit loop
    // make two loops
    for (let i = 0; i < nums.length - 1; i++) {
        // reduce nums[i] from map - this way there will be no repeats of results
        map[nums[i]] -= 1;
        if (i > 0 && nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            // reduce nums[j] from map 
            map[nums[j]] -= 1;
            if (j > i + 1 && nums[j] === nums[j - 1]) continue;
            // add and find the number needed to include 0
            let num = -(nums[i] + nums[j]);
            // if that number exists in the map, make sure you do not exceed the value - this works because we are not using the indices
            if (map[num] > 0) {
                // add to your response 
                res.push([nums[i], nums[j], num])
            }
        }
        // reset the map for i so that we make sure we get all the available options when i changes
        for (let j = i + 1; j < nums.length; j++) {
            map[nums[j]] += 1;
        }
    }
    return res;
    // Time of O(n²) because we have a nested loop looking at the same numbers squared times
    // Space of O(n) because we will be storing each number once in the map and will not be returning any duplicates in res
}

let nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums))


// Pointer method
function threeSum2(nums) {
    // return array
    let res = [];
    // sort nums
    nums.sort((a, b) => a - b);
    // loop through nums, use i as our base number
    for (let i = 0; i < nums.length - 2; i++) {
        // if nums[i] > 0 we know that there are no more solutions which add to 0 so we break
        if (nums[i] > 0) break;
        // continue if i is greater than 0 and it is the same as the prev
        if (i > 0 && nums[i] === nums[i - 1]) continue; 
        // use the two pointer method for the remaining nums in the array
        let left = i + 1;
        let right = nums.length - 1;

        // while left is less than right
        while (left < right) {
            // add up nums at i, left, and right
            let sum = nums[i] + nums[left] + nums[right];
            // if sum is 0 push into res
            if (sum === 0) res.push([nums[i], nums[left], nums[right]])
            // move left if less than or equal to 0
            // move right if more than 0
            sum <= 0 ? left += 1 : right -= 1;
        }
    }
    return res;
    // Time of O(n²) because of the nested loops, the pointer makes it so we look at the numbers max n * n times
    // Space of O(m) because we could have a max amount of arrays based on the nums included
        // we use m to represent the returned triplicates since n was already 'declaired'
        // O(1) constant space for the auxiliary space / extra variables and pointers
}   

console.log(threeSum2(nums))
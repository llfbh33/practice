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

// I think this should be solved with two loops, one loop with a pointer and the second with two
// let nums = [-1,0,1,2,-1,-4]
// this solution would only work if the provided input were in non-decending order 
function threeSum(nums) {
    // make a response variable
    nums = nums.sort();
    const res = [];
    // start the first loop at index 0 and at 2 before the last 
    for (let i = 0; i < nums.length - 3; i++) {  // i = 0
        // make a left variable at i + 1
        let left = i + 1;   // 1
        // make a right variable at nums.length
        let right = nums.length - 1;   // 5
        // make a while loop that continues as long as left is less than right 
        while (left < right) {
            // make a sum variable
            let sum = nums[i] + nums[left] + nums[right];  // -1 + 0 + -4
            // if nums[i] + nums[left] + nums[right] = target, add to the response variable
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]])
            }
            // else if value > target / rihgt-- else left++
            sum > 0 ? right-- : left++;
        }
    }
    // return the response variable
    return res;
}

let nums = [-1, 0, 1, 2, -1, -4]
// console.log(threeSum(nums))


// instead we should use a hashmap

function threeSum2(nums) {
    // make a response variable
    const res = [];
    const map = {}
    const match = new Set()

    // start the first loop at index 0 and at 2 before the last 
    for (let i = 0; i < nums.length - 3; i++) {  // i = 0
        // map[nums[i]] !== undefined ? map[nums[i]]++ : map[nums[i]] = 1;
        if (match.has(nums[i])) {
            continue;
        } else {
            match.add(nums[i])
        }
        let count = i + 1;

        while (count < nums.length - 1) {
            let number = -(nums[i] + nums[count]);
            let sum = [map[number], nums[i], nums[count]].sort()

            if (map[number] !== undefined) {
                res.push(sum)
            } else {
                map[nums[i]] = nums[i];
                console.log(map)
            }
            count++
        }

    }
    // return the response variable
    const unique = [
        ...new Set(res.map(JSON.stringify))
    ].map(JSON.parse);
    return unique;
}

// console.log(threeSum2(nums))

function twoSum2(nums, target) {
    const map = {};  

    for (let i = 0; i < nums.length; i++) {  
        const y = nums[i];   
        const x = target - y;   

        if (map[x] !== undefined) { 
            return [x, nums[i]];  
        } else {
            map[y] = i;
        }     
    }
}

function threeSum3(nums) {
    // sort the numbers
    const sorted = nums.sort();
    console.log(sorted)
    // create a result variable
    const res = [];
    // make a numCheck variable - if the first element === numCheck then continue, else set numCheck to the new value and do the loops
    let numCheck = null;

    for (let i = 0; i < nums.length - 2; i++) {   // [ -1, -1, -4, 0, 1, 2 ]
        // if nums[i] is the same as numCheck then continue
        if (nums[i] === numCheck) {
            continue;
        } else {
            numCheck = nums[i];
        }
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                let sum = nums[i] + nums[j] + nums[k];

                if (sum === 0) {
                    res.push([nums[i], nums[j], nums[k]])
                }
            }
        }
    }
    return res;
}

console.log(threeSum3(nums))

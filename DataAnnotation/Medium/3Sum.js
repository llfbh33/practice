/*
15. 3Sum

input - array of integers
output - nested array of triplicates

If we sort the array first we can make sure we do not end up with duplicates
only loop n times
if nums[i] is the same as nums[i - 1] continue
use two pointers one left one right and work our way in the middle to find values which sum up to 0
move left forward if less than or equal to 0 and right backward if more than 0
if a triplicate is found we want to increment left and decrement right enough so they do not point
    to duplicates of their current selves



[-1, 0, 1, 2, -1, -4]

sorted = [-4, -1, -1, 0, 1, 2]

i = 0  /  left = 1  /  right = 5  /  -3
    n/a
i = 0  / left = 2  /  right = 5  /  -3
    n/a
i = 0  /  left = 3  /  right = 5  /  -2
    n/a
i = 0  /  left = 4  /  right = 5  /  -1
    n/a
left === right  continue loop
i = 1  /  left = 2  /  right = 5  /  0
    [-1, -1, 2]
i = 1  /  left = 3  / right = 5  /  1
    n/a
i = 1  /  left = 3  /  right = 4  /  0
    [-1, 0, 1]
left === right  continue loop
nums[i] === nums[i - 1] continue loop
i = 3  /  left = 4  /  right = 5  /  3
left === right end loop because there are no longer 3 numbers to compare
return [[-1, -1, 2], [-1, 0, 1]]


*/


const threeSum = (nums) => {
    const result = [];
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) continue;

        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];

            if (sum === 0) {
                result.push([sorted[i], sorted[left], sorted[right]]);

                left++;
                right--;

                while (left < right && sorted[left] === sorted[left - 1]) left++;
                while (left < right && sorted[right] === sorted[right + 1]) right--;
            } else if (sum < 0) {
                left++;
            } else {
                right--;
            }
        }
    }

    return result;
};


const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum(nums));
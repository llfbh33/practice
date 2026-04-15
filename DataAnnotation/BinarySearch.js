/*
704. Binary Search


input - array of numbers, a target number
output - number


return index of target or -1

make two pointers
while left is less than right
Find the middle of the two pointers
if target equals the mid, return index
if target is greater than the mid
    set left to mid + 1
if target is less than the mid
    set right to mid - 1
return -1


*/

const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2); //(instead of right + left, we decrease, divide, then add left to prevent overflow (not a problem in javascript, but in other languages like C++))

        if (nums[mid] === target) return mid;

        if (target > nums[mid]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

// Time of O(log n) - each iteration cuts the search space in half
// space of O(1) - only a constant number of variables are used
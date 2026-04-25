/*

11. Container with Most Water

input - array of integers
output - integer


create a max number variable at 0
make a left pointer at 0
make a right pointer at height.length - 1
open a while loop while left < right
volume variable ==> (right - left) * min height 
if volume > max then max = volume
if height[left] <= height[right] 
    then increment left 
    while height[left] < height[left - 1] ==> left++;
if height[right] < height[left] 
    then decrement right
    while height[right] < height[right + 1] ==> right--;
return max


*/

const maxArea = (height) => {
    let max = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        // console.log(max)
        let min = height[left] <= height[right] ? height[left] : height[right];
        console.log(min)
        let volume = (right - left) * min;

        if (volume > max) max = volume;

        if (height[left] <= height[right]) {
            left++;
            while (height[left] < height[left - 1]) left++;
        }
        if (height[right] < height[left]) {
            right--;
            while (height[right] < height[right + 1]) right--;
        }
    }
    return max;
};

let height =
[1,8,6,2,5,4,8,3,7];
console.log('%c Max Volume', 'font-size: 20px;')  // only works in browser dev tools, not VS code terminal
console.log(maxArea(height))
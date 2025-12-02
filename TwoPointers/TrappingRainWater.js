/*
Trapping Rain Water
You are given an array of non-negative integers height which represent an elevation map. Each value height[i] represents the height of a bar, which has a width of 1.

Return the maximum area of water that can be trapped between the bars.

Example 1:



Input: height = [0,2,0,3,1,0,1,3,2,1]

Output: 9
Constraints:

1 <= height.length <= 1000
0 <= height[i] <= 1000

*/

// We use a two pointer system to work inwards to make sure we are holding water properly

let heights = [3, 2, 1, 5, 1, 2, 3, 1, 2]


function trap(height) {
    // make a response variable
    let res = 0;
    // make a left ponter
    let l = 0
    // make a right pointer
    let r = height.length - 1
    // make a possible left ponter
    let leftMax = height[l];
    // make a possible right pointer
    let rightMax = height[r];
    // make a while loop condition left < right
    while (l < r) {
        // if left is less than right, increase left
        if (leftMax < rightMax) {
            l++;
            leftMax = Math.max(leftMax, height[l]);
            res += leftMax - height[l];
        }
        // if right is less than left, decrease right
    }
}


function trap2(height) {
    if (!height || height.length === 0) {
        return 0;
    }

    let l = 0;
    let r = height.length - 1;
    let leftMax = height[l];
    let rightMax = height[r];
    let res = 0;                                        // 0
    while (l < r) {
        if (leftMax < rightMax) {
            l++;                                        // increase first and find the max between the two
            leftMax = Math.max(leftMax, height[l]);     // max = 3
            res += leftMax - height[l];                 // 3 - 3
        } else {
            r--;
            rightMax = Math.max(rightMax, height[r]);
            res += rightMax - height[r];
        }
    }
    return res;
}

let height = [2,0,2,1];
console.log(trap2(height))
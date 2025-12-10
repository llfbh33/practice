/*
Container With Most Water
You are given an integer array heights where heights[i] represents the height of the 
i
t
h
i 
th
  bar.

You may choose any two bars to form a container. Return the maximum amount of water a container can store.

Example 1:



Input: height = [1,7,2,5,4,7,3,6]

Output: 36
Example 2:

Input: height = [2,2,2]

Output: 4
Constraints:

2 <= height.length <= 1000
0 <= height[i] <= 1000
*/

// Two pointer methods are like logic puzzles where the pointers take care of the logic
// we do not need to check all possible combinations like we would with a nested loop because
    // the two pointers will rule out combinations which dont match
// move over the lower side because we will not be able to get a larger area if we are reducing in the index and in the 


function maxArea(heights) {
    // max variable which holds the max area - 0
    let area = 0;                                                                   // --> 36
    // create a pointer for left
    let l = 0;                                                                      // --> 1
    // create a pointer for right
    let r = heights.length - 1;                                                     // --> 6
    // while left is less than right (walk through all the options)
    while (l < r) {
        // figure out which number is the shorter number
        let shortest = heights[l] <= heights[r] ? heights[l] : heights[r];          // 7 <= 3  --> 3
        // figure out the difference between the two indices
        let newArea = shortest * (r - l);                                           // 3 * 5 = 15
        // if the shortest number * the difference (area) is greater than max, replace max with area;
        if (newArea > area) area = newArea;
        // if left is shorter than right, move left once
        // if right is shorter than left, move right once
        heights[l] <= heights[r] ? l++ : r--;
    }
    // return max
    return area;
    // Space of O(1) only making constant variables
    // Time of O(n) we will be looking at each number in the array once
}

let height = [1,7,2,5,4,7,3,6];   // --> 36
console.log(maxArea(height))
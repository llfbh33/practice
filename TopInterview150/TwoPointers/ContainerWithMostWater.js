/*
11. Container with Most Water

input: integer array min length of 2
integers are heaights
space between one and then next integer is the space between - 1
Find two integers which together would hold the most water
return the max amount of space which can hold water

We want to make two points start and end on either side of the array
keep a value of how much is currently being held by the focused on container
which is smaller, start or end, increase the index
if the container now can hold more, update the value held
continue until you have found the max
you can skip any numbers which are smaller than the current height
value will be atlease 0 so we can set it to start at 0

*/

function maxArea(height) {
    let start = 0;                                  // pointer for the begining of the array
    let end = height.length - 1;                    // pointer for the end of the array
    let max = 0;                                    // track the max value

    while (start < end) {                           // stop the loop if the start index is no longer less than the end index
        // value is determined based on the index difference and the shortest height
        let value = height[start] <= height[end] ? height[start] * (end - start) : height[end] * (end - start);
        if (value > max) max = value;               // replace the max with the highest value
        if (height[start] < height[end]) {          // update the start index height if it is shorter than the end index height
            start++;
        } else {                                    // else the other is shorter
            end--;
        }
    };
    
    return max;
};
// Time of O(n) - we will review each number n times
// Space of O(1) - only have constant variables created

let height = [1,8,6,2,5,4,8,3,7];
let height2 = [1,1];
console.log(maxArea(height))
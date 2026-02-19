/*
55. Jump Game

input - array of integers

jump from each index starting at 0 and see if you can reach the end of the array
you do not need to jump the max amount the value just represents the max you can jump,
you can stop the jump short - [2,5,0,0]; we would cut the jump from 2 to 1 to land on 5 then jump from there


save the initial index
save the initial value
do a while loop while index < nums.length
if value <= 0 return false

return true

*/


function canJump(nums) {
    let index = 0;
    let currIndex = 0;                             // curr is our current jump value

    while(index < nums.length - 1) {                    // iterate through based on index, updated to the current index
        let maxJump = nums[index];                      // our current max jump will be the num we are currently looking at
        let maxIndex = index;
        let count = nums[index]                         // the amount of indices to check
        
        while(count > 0) {                       // update the max jump the the number which can jump the furthest through the array
            if (nums[index] + index > maxJump + maxIndex) {
                maxJump = nums[index];
                maxIndex = index;
            };   // set maxJump to the value of the higher value
            count--;
            index++;
        }
        if (index > nums.length - 1) return true;
        else index = maxIndex;
        if (currIndex === index) return false;
        currIndex = index;
    };
    return true
};

// let nums = [2,5,0,0];
// let nums2 = [7,4,0,0,0,0,3,1,2,0,2]
// let nums3 = [2,3,1,1,4]
// console.log(canJump(nums))


// find the highest optimal value past curret based on index location and value


// firthest jump for 7 is 1
// closest jump is 4 which would then land on a 0
// the best jump is to 3, index 6
// we add the index to the value to see which would reach further


// Function works for the example inputs provided by leetcode, however it is clunky and needs to be refactored
function canJump2(nums) {
    let index = 0;                                          // 1

    while(index < nums.length - 1) {                        // 0 < 3

        let maxJump = nums[index];                          // 5
        let maxIndex = index;                               // 1
        let count = 0;                                      // 0
        let track = index;                                  // 1
        
        while(count <= nums[index]) {                       // 0 <= 5
            if (nums[track] + track > maxJump + maxIndex) { // 5 + 2 > 5 + 1
                maxJump = nums[track];                      
                maxIndex = track;
            };   
            count++;
            track++;
        }
        index === maxIndex ? index += nums[index] : index = maxIndex;

        if (index >= nums.length - 1) return true;
        if (nums[index] === 0) return false;

    };
    return true;
};

let nums = [2,5,0,0];
let nums2 = [7,4,0,0,0,0,3,1,2,0,2]
let nums3 = [2,3,1,1,4]
let nums4 = [2,0,0];
console.log(canJump2(nums4))
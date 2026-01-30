/*
169. Majority Element

return the majority element, the element which shows up the most in the array of integers

could solve with O(n) space by using a map but we want to solve with O(1) space which would mean no extra array

The number that is returned is greater than n/2 with n as length so that means we can use the boyer moore algorithm
this algorithm sets one number to be the candidate and compares against the other numbers in the array
*/


function majorityElement(nums) {
    let num = nums[0];                          // pick an initial candidate
    let count = 1;                              // count the first instance of the candidate

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === num) count++;           // if the current element is the same as the candidate we increase the count
        else { 
            count--;                          // else we reduce the count
            if (count <= 0) {                       // if the count reaches
                count = 1;                          // reset the count
                num = nums[i];                      // and set the new candidate
            };
        }

    };
    return num;     // You will be left with the candidate that shows up n/2 or more times
};
// Time of O(n)
// Space of O(1) because we are only setting constant values of variables

let nums = [2,2,1,1,1,2,2]
console.log(majorityElement(nums))



/*
80. Remove Duplicates from Sorted Array II

Still given an interger array in assending order.
This time you can leave duplicates of 2 but no more
So I can keep track of the last used number, but maybe a count of how many times it shows, then reset

*/

// keep a write variable at 0
// keep a count variable (the amount of times the last number showed up)
// keep a read variable at 0 - this is i in our loop
// 

// we can not keep a count instead of tracking the last known number
// we can not check the last instance (i - 1) we would have to check i - 2
// we could set the number, if the number matches let it stay and set number to null, if the number doesn'tmatch check i - 1
// we could start with number = nums[0], k = 1 and i = 1, that way there will always be an i - 1


function removeDuplicates (nums) {                              // [0, 0, 1, 1, 2, 2, 4, 2, 2, 4];
    let k = 1;                                                  // 7
    let number = nums[0];                                       // 4
    for (let i = 1; i < nums.length; i++) {                     // 9
        if (nums[i] === number && nums[k] === number) {         // false
            number = null;                      
            k++;   
        } else if (nums[i] === number) {                        // false
            nums[k] = number;
            number = null;
            k++;
        } else if (nums[k - 1] !== nums[i]) {                   // false
            nums[k] = nums[i];
            number = nums[i];
            k++;
        }
    }
    return [nums, k];
};
// Time of O(n)
// Space of O(1)




// Optimize the solution
// I think instead of tracking the current number we can keep a count of how many times it shows up
// Set count to 0, if count is 0, increase to 1 - this is for the first loop iteration
// if count is at 1 check i - 1 to see if they are the same
    // if they are then increase count to 2
    // if not then decrease count to 1
// if count is 2 and i - 1 is the same number, move on without increasing k (this is the element you will need to replace)
// if count is 2 and i - 1 is a different number set count to 1 and k++


// Each variable does one job, no null values
const removeDuplicates2 = (nums) => {                   // [1, 1, 2, 3, 3, 3, 3];
    let k = 1;                                          // 5
    let count = 1;                                      // 2
    for (let i = 1; i < nums.length; i++) {             // 7
        if (count === 1 && nums[i] === nums[k - 1]) {
            nums[k] = nums[i];
            count++;
            k++
        } else if (nums[i] !== nums[k - 1]) {
            count = 1;
            nums[k] = nums[i];
            k++;
        }
    }
    return k
}

let nums =  [1, 1, 1, 1, 2, 3, 3];
let nums2 = [0, 0, 1, 1, 1, 1, 2, 3, 3];
let nums3 = [0, 0, 1, 1, 2, 2, 4, 2, 2, 4];
console.log(removeDuplicates2(nums2))
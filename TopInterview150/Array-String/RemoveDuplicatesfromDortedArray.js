/*
26 Remove Duplicates from Sorted Array

Very similar to remove element, we want to remove all the duplicates
the provided array is sorted
So we can do the same sort of deal, with the write and read method with a few alterations
if the two numbers are not the same then we replace with nums[k], increase k and move on
Return k
*/


const removeDuplicates = (nums) => {    
    let k = 0;                                  // 4
    let number = null;                          // 3
    for (let i = 0; i < nums.length; i++) {     // 9
        if (nums[i] !== number) {               // 4 !== 3
            number = nums[i];                   // 4
            nums[k] = nums[i];                  // [0,1,2,3,4,2,2,3,3,4]
            k++;                                // 5
        } 
    }
    return k;
};
// Time of O(n)
// Space of O(1)


let nums = [0,0,1,1,1,2,2,3,3,4]

// looking at nums[i]
// track the current number - number = null
// if nums[i] doesn't === number, number = nums[0] move on
// if nums[i] does equal number we need to replace it with the next number keep the position of k still
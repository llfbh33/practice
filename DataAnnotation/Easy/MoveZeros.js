/*
283. Move Zeros

input - array of numbers
output - array of numbers

return the same array
mutate it in place
maintaine relative order


keep a pointer of the next available index to use
loop through the index
if you find a number at an index that is not 0
    put it in the next available index and increase by 1
loop through the array from next to length - 1 and set to 0
return


*/


const moveZeroes = (nums) => {
    let nextPos = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[nextPos] = nums[i];
            nextPos++;
        }
    }

    while (nextPos < nums.length) {
        nums[nextPos] = 0;
        nextPos++;
    }

    return nums;
};

// Time of O(n) - we iterate through the array once, plus a second pass to fill zeros (still linear)
// Space of O(1) - only constant extra variables are used 
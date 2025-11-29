/*
Products of Array Except Self
Given an integer array nums, return an array output where output[i] is the product of all the elements of nums except nums[i].

Each product is guaranteed to fit in a 32-bit integer.

Follow-up: Could you solve it in 
O(n) time without using the division operation?

Example 1:

Input: nums = [1,2,4,6]

Output: [48,24,12,8]
Example 2:

Input: nums = [-1,0,1,2,3]

Output: [0,-6,0,0,0]
Constraints:

2 <= nums.length <= 1000
-20 <= nums[i] <= 20
*/



// solve without division but it is not O(n)
function productExceptSelf(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        res.push(nums.reduce((acc, curr, idx) => {
            if (idx === i) return acc;
            return acc * curr
        }, 1))
    }
    return res;
    // Space is O(n) space because the res will hold a product of numbers max the count of numbers in nums
    // Time is O(n²) because we are looping through each number in nums max one time for the loop.  Reduce runs its callback once per element, and is O(n)
}


// solve with division
/* There are some parameters which can cause major issues.  If there is a zero included in the nums then a basic division approach will not work */
function productExceptSelf2(nums) {
    // a response variable
    let res = [];  // O(n) elements stored
    // variable of product of all numbers
    let product = nums.reduce((acc, curr) => acc * curr, 1); // O(1) space O(n) time
    // loop through nums array
    for (let i = 0; i < nums.length; i++) { // O(n) time
        // divide num at index from the product
        nums[i] === 0 ? res.push(product) : res.push(product / nums[i]);
    }
    // return res
    return res;
    // Space of O(n) because we will be storing a product nums.length amount of times
    // Time of O(n) because we will loop through all numbers in nums once 
};



// Optimal solution - prefix and suffix
function productExceptSelf3(nums) {
    const n = nums.length;
    const res = new Array(n);
    const pref = new Array(n);
    const suff = new Array(n);

    pref[0] = 1;  // set the first number of the prefix to 1 because when we look at index 0 in our nums array there will be nothing to the left of our pointer
    suff[n - 1] = 1;  // then on the opposite end we will set the last number of the siffix to 1 as there will be nothing to the right of our last pointer

    for (let i = 1; i < n; i++) {   // pref = [1, 1, 2, 8]
        pref[i] = nums[i - 1] * pref[i - 1];
        // set the pref at the current index pointer
        // value will be the multiplication of 
    };

    for (let i = n - 2; i >= 0; i--) {    // suff = [48,24,6,1]
        suff[i] = nums[i + 1] * suff[i + 1];
        // loop backwards and start and the second to last index
    }

    console.log(pref)
    console.log(suff)

    for (let i = 0; i < n; i++) {
        res[i] = pref[i] * suff[i];
    }
    return res;
}

let array = [1, 2, 4, 6, 3];
// console.log(productExceptSelf3(array))








// input: array of nums   --> [1,2,4,6]
// outpus: array where output[i] is the product of all nums except nums[i]   --> [48,24,12,8]



function products(nums) {
    const n = nums.length;
    const res = new Array(n);
    // make a prefix and suffix array the same length as nums
    const pref = new Array(n);
    const suff = new Array(n);
    // set the first index of pref and last index of suff 1 as we will start with no pref and end with no suff
    pref[0] = 1;
    suff[n - 1] = 1;

    // fill in the numbers for pref by looping, start at 1 since we need the values at 0 to multiply together
    for (let i = 1; i < n; i++) {
        pref[i] = nums[i - 1] * pref[i - 1];
    };

    // fill in the numbers for suff by looping backwards, multiplying as we go
    for (let i = n - 2; i >= 0; i--) {
        suff[i] = nums[i + 1] * suff[i + 1];
    };

    // take the values and multiply them together to get the result
    for (let i = 0; i < n; i++) {
        res[i] = pref[i] * suff[i]
    }
    return res;
}   

console.log(products([1,2,4,6]))
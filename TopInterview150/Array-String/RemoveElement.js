/*
27 Remove Element

goal is to remove all elements which equal val and return k, amount of elements which do not equal val, put all elements at the begining of the array


keep track of k, currently 0
keep track of removed = 0
Work backwards in a loop
if the current number is val then we will replace it with length - 1 - removed 
    if the value at length - 1 - removed does not equal val, set that value to the current index, and set the index of that value to null,
    if it is val, replace with null, removed increase by 1
if current number is not val, increase k by 1
return k
*/

const removeElement = (nums, val) => {
    let k = 0;
    let r = 0;
    let length = nums.length
    for (let i = length - 1; i >= 0; i--) {
        if (nums[i] !== val) k++;
        else {
            if (nums[length - 1 - r] !== val) {
                nums[i] = nums[length - 1 - r];
                nums[length - 1 - r] = null;
            } else {
                nums[i] = null;
            };
            r++;
        }
    };
    return k;
};
// Time of O(n) because we look through the input elements n times
// Space of O(1) because all updates are constant

let nums = [3,2,2,3]
let val = 3

console.log(removeElement(nums, val))


// This is my updated function to remove r, we do not need the duplication of tracking both from the front and the back
// We also do not need to replace with null, any elements past the k index are not looked at, only the first k
// However this solution is still not the most optimal because now k has two purposes instead of one.  do one thing and do it well

var removeElement2 = function(nums, val) {
    let k = 0;
    let length = nums.length
    for (let i = length - 1; i >= 0; i--) {
        if (nums[i] !== val) k++;
        else {
            nums[i] = nums[i + k];
        }
    };
    return k;
};

// This would be the most optimal solve: having a pointer for where we are writing in the function, and a pointer for what we are reading

function removeElement3(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {                      // if what we are looking at is not val
            nums[k] = nums[i];                      // replace what we are writing over with what we are looking at
            k++;                                    // to start what we are looking at and writing could be itself  
        }                                           // but we do not increase k if it is val, so we will overwrite val with what we are currently looking at
    }                                               // effectivly pulling all the good numbers to the front
};
// Time of O(n)
// Space of O(1)
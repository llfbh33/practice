/*'
189. Rotate Array

Input - array of integers and an integer - k
Rotate the array to the right by k steps, k is not negitive

Can solve this by haveing a nested loop
first loop has a loop count of k
second loop will be the length of the array
save an element to a variable, overwrite it with j - 1, then place the value on the next loop
This would be O(n²) on Time though if O(1) on space

*/

function rotateArray(nums, k) {
    for (let i = 0; i < k; i++) {
        let stored = nums[nums.length - 1];
        for (let j = 0; j < nums.length; j++) {
            let next = nums[j];
            nums[j] = stored;
            stored = next;
        };
    }
    return nums;
};

let nums = [1,2,3,4,5,6,7]
// console.log(rotateArray(nums, 3))


// considered brittle because it is a three way swap
const rotateArray2 =  (nums, k) => {

    let count = 1;

    while (count <= k) {
        let length = nums.length;
        let stored = nums[length - count];
        nums[length - count] = nums[length - count - k];
        nums[length - count - k] = nums[k - count];
        nums[k - count] = stored;
        count++;
    }
    
    return nums;
}

// considered britle because it is a three way swap
const rotateArray3 = (nums, k) => {
    let count = k;
    for (let i = 0; i < count; i++) {
        let stored = nums[k];
        let stored2 = nums[k + count];

        nums[k] = nums[i];
        nums[k + count] = stored;
        nums[i] = stored2;
        k++;
    }
    return nums;
};

let nums2 = [1,2,3,4,5,6,7,8,9]  // [7,8,9,1,2,3,4,5,6]
let k = 3;
// console.log(rotateArray3(nums2, k))


// solve based on a cyclical pattern, or Greatest Common Diviser
const rotate = (nums, k) => {
    const n = nums.length;
    k %= n; // Handle cases where k > n              this provides us the remainer of k / n - if k is less than n then the diviser goes in 0 times and k stays the same

    let count = 0; // Keeps track of how many elements we've moved
    
    for (let start = 0; count < n; start++) {
        let current = start;
        let prevValue = nums[start];
        
        // This do-while loop handles one single cycle
        do {
            let nextIndex = (current + k) % n;
            
            // Swap the value we are carrying with the one at the next spot
            let temp = nums[nextIndex];
            nums[nextIndex] = prevValue;
            prevValue = temp;
            
            current = nextIndex;
            count++;
        } while (start !== current); // Stop when we return to the start of this cycle
    }
    
    return nums;
};

let nums3 = [1,2,3,4,5,6,7,8]  // [7,8,9,1,2,3,4,5,6]
let k2 = 6;
console.log(rotate(nums3, k2))

// count = 0
// store nums[k]
// nums[k] = nums[count]
// nums[count] = nums[nums.length - k]
// k--
// count++


// count = 0 count will eventually increase to original k value
// k + 1 = where nums[count] will go
// store k + 1 and replace with nums[count]
// replace nums[count] with nums.length - k
// replace nums.length - k with stored
// reduce k
// increase count
// store k + 1 and replace with nums[count]
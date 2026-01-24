/*
Find the Duplicate Number
Medium
Company Tags
Hints
You are given an array of integers nums containing n + 1 integers. Each integer in nums is in the range [1, n] inclusive.

Every integer appears exactly once, except for one integer which appears two or more times. Return the integer that appears more than once.

Example 1:

Input: nums = [1,2,3,2,2]

Output: 2
Example 2:

Input: nums = [1,2,3,4,4]

Output: 4
Follow-up: Can you solve the problem without modifying the array nums and using 
O
(
1
)
O(1) extra space?

Constraints:

1 <= n <= 10000
nums.length == n + 1
1 <= nums[i] <= n
*/


// We need to use a pointer method, if we think of the array as a linked list that is cyclical we can use the tortise and hare method


let findDuplicate = (nums) => {
    let slow = 0;
    let fast = 0;

    while (slow === fast && nums[slow] !== nums[fast]) {        // do not end the loop unless slow and fast are not the same index, and nums[slow] equals nums[fast]
        if (slow >= nums.length - 1) slow = 0;                  // we do not need to account for slow cycling around, if it cycles around there would be no duplicate
        else slow++;

        if (fast === nums.length - 2) fast = 0;                 // account for where fast is at the end of the array so we know how to cycle it around
        else if (fast === nums.length - 1) fast = 1;
        else fast += 2;
    };

    return nums[slow];
}


let nums = [1,3,2,5,4,6,7,2];
// console.log(findDuplicate(nums));

let findDuplicate2 = (nums) => {
    // Step 1: Detect the cycle - start each pointer at the first index - or 'head' of the list
    let slow = nums[0];                     // 1
    let fast = nums[0];                     // 1

    do {                                        
        slow = nums[slow];                  // Advance slow one node at a time - the next node is found using the value as an index
        fast = nums[nums[fast]];            // Advance fast two nodes at a time - next is found using the values as indices
    } while (slow !== fast);                // Once fast and slow are the same they have landed on the same node finding the close of the cycle

    // Step 2: Find the entrance of the cycle
    slow = nums[0];                         // Reset slow to the head of the list
    while (slow !== fast) {                 // continue until slow and fast are the same number
        slow = nums[slow];                  // Advance slow one at a time
        fast = nums[fast];                  // Advance fast one at a time from the close of the cycle 
    }

    return slow;                     // duplicate number
};
// Time of O(n)
// Space of O(1)


let nums2 = [3,4,1,5,2,1,6]   // 1
let nums3 = [1,2,3,4,4]       // 4
console.log(findDuplicate2(nums3)); // Output: 2

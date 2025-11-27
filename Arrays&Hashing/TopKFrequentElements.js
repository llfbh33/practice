/*
Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements within the array.

The test cases are generated such that the answer is always unique.

You may return the output in any order.

Example 1:

Input: nums = [1,2,2,3,3,3], k = 2

Output: [2,3]
Example 2:

Input: nums = [7,7], k = 1

Output: [7]
Constraints:

1 <= nums.length <= 10^4.
-1000 <= nums[i] <= 1000
1 <= k <= number of distinct elements in nums.
*/

// create an array with nums.length - 1 slots, max is the max amount of times a specific number could show up in the array
// push the number into the slot with the index of how many times it shows itself within the array

//hashmap / bucket sort solve

function topKFrequentElements(nums, k) {
    // create a map
    const map = {};
    // loop through the numbers in nums
    for (let num of nums) {
        // if number is in map, increase by 1 else add to map with value of 1
        map[num] ? map[num] += 1 : map[num] = 1;
        // end loop
    };
    // create an array filled with [], with a length of nums.length
    const buckets = new Array(nums.length).fill().map(() => []);
    // loop through map keys
    for (let num of Object.keys(map)) {  
        // place each key at the index of the new array which correspondes to the maps[key] value
        let val = map[num];
        buckets[val].push(num)
    }
    // return the most common values
    let flat = buckets.flat();
    return flat.slice(flat.length - k, flat.length);  
    // Space of O(n) since we will store numbers in the map where worst case all are unique, and the numbers are stored only once each in the array O(n + n) --> O(n)
    // Time of O(n) loop through each of the numbers once per loop, n = loop 1, n = loop 2, n = flat --> O(n + n + n) --> O(n)
}
console.log(topKFrequentElements([1,2,3,3], 2))
/*
Longest Consecutive Sequence
Given an array of integers nums, return the length of the longest consecutive sequence of elements that can be formed.

A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element. The elements do not have to be consecutive in the original array.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [2,20,4,10,3,4,5]

Output: 4
Explanation: The longest consecutive sequence is [2, 3, 4, 5].

Example 2:

Input: nums = [0,3,2,5,4,6,1,1]

Output: 7
Constraints:

0 <= nums.length <= 1000
-10^9 <= nums[i] <= 10^9
*/

// create a map {
// keys are 0 based index : set
//}
// create a loop based on the input array
// keep an eye at on the value at i
// create a loop based on the keys in the map
// if nums[i] is one less or more than the first or last number in the set then add it
// close that loop then add a key to map for the current i with [nums[i]]
// close the main loop
// create a bucket with nums.length spots filled with 0's
// loop through the values in the map 
// change the buckets index to 1 which corresponds to the length of the values array
// find the last index with a value of 1 and return the index
// this solution would be time of O(n²) and space of O(n) because we are storing sets

function longestConsecutive(nums) {
    const map = {
        0: new Set()
    };
    map[0].add(nums[0])
    
    for (let i = 1; i < nums.length; i++) {
        let mapLength = Object.keys(map).length
        let num = nums[i];
        for (let j = 0; j < mapLength; j++) {
            console.log(num)
            if ((map[j].has(num + 1) || map[j].has(num - 1) && !map[j].has(num))) {
                map[j].add(num)
            } else {
                map[mapLength] = new Set();
                map[mapLength].add(num)
            }
        }
    }
    console.log(map)
};

// console.log(longestConsecutive([1,3,6,3,5,2,8,9,2,0]))

// Brute force solution
// Sort the array --> time of O(n log n) because of the multiple comparisons on the same num
    // array.sort() also uses Timesort which needs O(n) auxiliary space worst case
// create a counter set to 1
// create a res set to 1
// loop through the array
// if the next num is one greater than the last increase counter by 1
// if not, then if it is larger than res replace res
// set counter to 1
// end the loop - if counter is larger than res, replace res
// return res
// this solution would be time of O(n log n) and space of O(n)

// Out of the two solutions the sort solution would be the most optimal because n² can increase quickly 
// and the first solve could potentialy use quite a bit of memory





//-----------------------------------------------------

/*
Hash Map
Intuition
When we place a new number into the map, it may connect two existing sequences or extend one of them.
Instead of scanning forward or backward, we only look at the lengths stored at the neighbors:

mp[num - 1] gives the length of the sequence ending right before num
mp[num + 1] gives the length of the sequence starting right after num
By adding these together and including the current number, we know the total length of the new merged sequence.
We then update the left boundary and right boundary of this sequence so the correct length can be retrieved later.
This keeps the whole operation very efficient and avoids repeated work.

Algorithm
Create a hash map mp that stores sequence lengths at boundary positions.
Initialize res = 0 to store the longest sequence found.
For each number num in the input:
If num is already in mp, skip it.
Compute the new sequence length:
length = mp[num - 1] + mp[num + 1] + 1
Store this length at num.
Update the boundaries:
Left boundary: mp[num - mp[num - 1]] = length
Right boundary: mp[num + mp[num + 1]] = length
Update res to keep track of the longest sequence.
Return res after processing all numbers. 
*/


function longestConsec(nums) {
    const map = new Map();
    let res = 0;

    for (let num of nums) {
        if (!map.has(num)) {  // if the current number does not exist as a key in map
            map.set(    // set the number in the map as a key if it doesn't exist
                num,
                (map.get(num - 1) || 0) + (map.get(num + 1) || 0) + 1   // if there is a number +1 or -1 in the map add 1 for each and itself(max 3)
            )
            // console.log(map)
            map.set(num - (map.get(num - 1) || 0), map.get(num));
            // console.log('two', map)
            map.set(num + (map.get(num + 1) || 0), map.get(num));
            res = Math.max(res, map.get(num));
        }
    }
    console.log(map)
    return res;
};

let nums = [1,3,6,3,5,2,8,9,2,0];
let nums2 = [2,5,20,4,3];
console.log(longestConsec(nums2))

// Map(7) { 2 => 1, 20 => 1, 4 => 1, 10 => 1, 3 => 3, 5 => 2, 1 => 2 }
// Map(7) { 2 => 3, 20 => 1, 4 => 2, 10 => 1, 3 => 3, 5 => 2, 1 => 4 }
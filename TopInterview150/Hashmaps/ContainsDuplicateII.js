/*

219. Contains Duplicate II

loop with the end point being length - k - 1
check i and i + 

number as a key - value is the index
soooo, we only loop through once
set the key and the value
when you next land on the key in the array, check the 
difference between the last index and current index
if the value is less than or equal to k
return true
else update the index / value in the map
exit
return false

*/


const containsNearbyDuplicate = (nums, k) => {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];

        if (!map.has(curr)) {
            map.set(curr, i);
        } else {
            let last = map.get(curr);
            if (Math.abs(last - i) <= k) return true;
            else map.set(curr, i);
        };
    };
    return false;
};

let nums =
[1,2,3,1,2,3];
console.log(containsNearbyDuplicate(nums))
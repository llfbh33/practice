/*
 1. Two Sum

 imput - array of num, number
 output - array of two indices

 solve with a hashmap

 loop through the array
 find the difference of target - arr[1]
 check the map for the difference
 if it exists, return an array with the difference value and i
 if it doesn't exist, add arr[i] as a key and i as the value
 continue;
 retur
 
{
 3: 2
 2: 3
}

*/

const twoSum = (nums, target) => {
    let visited = new Map();

    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];

        if (visited.has(diff)) {
            return [visited.get(diff), i];
        };
        visited.set(nums[i], i);
    };
    return null;
};

// Time of O(n) - In the worst case, we iterate through the array once, and each lookup in the map is O(1), so the overall time is linear.
// Space of O(n) - In the worst case, we store up to n elements in the map if no pair is found early.

const nums = [3, 2, 3, 2, 6, 4, 1, 7, 3, 5];
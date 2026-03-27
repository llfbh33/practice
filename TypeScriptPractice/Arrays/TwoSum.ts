/*
1. Two Sum
Solved
Easy
Topics
premium lock icon
Companies
Hint
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

function twoSum(nums: number[], target: number): number[] | undefined {
    // create a map
    let map: Map<number, number> = new Map<number, number>();
    // store values as keys and indices as values
    for (let i: number = 0; i < nums.length; i++) {
        // add in a check for nums[i] being undefined, even though we have out range set with the function
        // javascript allows for checks on out of bounds indices of arrays
        const curr: number | undefined = nums[i];
        if (curr === undefined) continue;
        // find the value which added to i would equal the target
        let num: number = target - curr;
        // check the map for that value
        // if it is there, return the two indices
        let val: number | undefined = map.get(num);
        if (val !== undefined) {
            return [val, i];
        } else {
            // if it is not there add value and i to the map
            map.set(curr, i);
        }
    }
    // there will be an answer
    return undefined
};
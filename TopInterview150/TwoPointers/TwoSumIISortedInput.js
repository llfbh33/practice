/*
167 Two Sum II - Input Array is Sorted

1-indexed based array
input: array of integers sorted in assending order - integers can be negitive
input: target number
There will always be one solution
Do not use the same element twice
O(1) space - constant

We are looking to solve this with a two pointer solution
Brute force method involves nested loops would would make time of O(n²)
Can we make pointers which will add and move depending on the number, we can

start a pointer at 0 and a pointer at length - 1
move them inwards, start increase if sum is below target
and end decrease if sum is above target
until we reach target
we do not need an end condition as we will always have a solution
*/

const twoSum = (numbers, target) => {
    let start = 0;                                  // pointer for the start of the array
    let end = numbers.length - 1;                   // pointer for the end of the array

    while (start < end) {                           // start should never overlap with end
        let sum = numbers[start] + numbers[end];     // create a sum variable to reduce code and make viewing more understandable
        if (sum === target) {                       // if sum is the target
            return [start + 1, end + 1];            // return the indice's on a 1-index base
        } else if (sum > target) {                  // if the sum is larger than target
            end--;                                  // then we are going to reduce the end pointer
        } else {                                    // else the number is lower than the target    
            start++;                                // and we will increase the start index
        }
    };
    return;                                         // return is just good practice though not needed here as we will always have a solution
};
// Time of O(n) because we will be looking through each number a max of n times
// Space of O(1) because we are only creating constant variables
/*
15. 3Sum

input: array of integers
return all the three integers which add up to 0
no duplicate indices
array will have atleast 3 integers
integers can be negitive

create an array
have a loop that walks through the array with a condition of i < nums.length - 2
have two pointers, let two = i + 1 and let three = nums.length - 1
while two < three
find sums of i + two + three which === 0 and store in array
increase two if sum is less than 0 
decrease three is sum is greater than 0
return array

Make sure that i is not the same as i - 1
we want to sort the input first so that we are able to make sure that i is never a stored duplicate
this will ensure that we never end up with a duplicate response
we also need to make sure that two and three do not land on the same values again as well
So after we find a triplet we want to move both two and three
then we want to check to make sure they are not the same number they previously were
If they are we want to move them again

*/

const threeSum = (nums) => {
    let res = [];                                               // Create a return array
    nums.sort((a, b) => a - b);                                 // Sort our numbers so they are in non-decreasing order

    for (let i = 0; i < nums.length - 2; i++) {                 // Set a loop to run until there are only 2 numbers left in the array to view
        if (i > 0 && nums[i] === nums[i - 1]) continue;                  // continue to the next itteration if nums[i] is the same as it was in the last itteration
        let left = i + 1;                                       // make a pointer for the left
        let right = nums.length - 1;                            // make a pointer for the right

        while (left < right) {                                  // while left is less than right so there is no overlap
            let sum = nums[i] + nums[left] + nums[right];       // Find the sum
            if (sum === 0) {                                    // If the sum equals our target of 0
                res.push([nums[i], nums[left], nums[right]]);   // Add the combination to our results array
                left++;                                         // increase left    
                while (nums[left] === nums[left - 1]) left++;   // increase left as many times as it takes to find a new number 
                right--;                                        // decrease right
                while (nums[right] === nums[right + 1]) right--;// decrease right as many times as it takes to find a new number
                // We change left and right at the same time because we will need both numbers together to get our solution of 0
            } else if (sum > 0) {
                right--;                                        // decrease if we need a smaller number to sum to 0
            } else {
                left++;                                         // increase if we need a larger number to sum to 0
            };                          // it is not necessary to check for duplicates here as running into a duplicate will not change anything
        }
    }
    return res;
};
// Time of O(n²) because we are reviewing each number a max of n * n times with the nested loop
// Space of O(k) or O(1) auxiliary space - k meaning depends on the number of results, or auxiliary space meaning extra working memory used by the algorithim itself
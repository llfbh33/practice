/*
Daily Temperatures
You are given an array of integers temperatures where temperatures[i] represents the daily temperatures on the ith day.

Return an array result where result[i] is the number of days after the ith day before a warmer temperature appears on a future day. If there is no day in the future where a warmer temperature will appear for the ith day, set result[i] to 0 instead.

Example 1:

Input: temperatures = [30,38,30,36,35,40,28]

Output: [1,4,1,2,1,0,0]
Example 2:

Input: temperatures = [22,21,20]

Output: [0,0,0]
Constraints:

1 <= temperatures.length <= 1000.
1 <= temperatures[i] <= 100
*/

// while stack[j] < nums[i] = count++

function dailyTemperatures(temperatures) {
    // create and fill a return array
    // make a stack to hold temp and index pairs so we can compare distances
    // make a loop
    // track the current temp
    // while there is a pair in the stack and current temp is greater than the last pair temp in the stack
        // pop off last stack temp and index
        // add to res array at index the difference between i and the given index
    // push current temp and index onto the stack

        const res = new Array(temperatures.length).fill(0);
        const stack = []; // store temp and index
        for (let i = 0; i < temperatures.length; i++) {
            let curr = temperatures[i];
            while (stack.length > 0 && curr > stack[stack.length - 1][0]) {
                const [temp, index] = stack.pop();
                res[index] = i - index;
                console.log(res)
            };
            stack.push([curr, i])
        }
        return res;
}

let temperatures = [30,38,30,36,35,40,28];
console.log(dailyTemperatures(temperatures))
/*

202. Happy Number

input - integer
output - boolean

determin if the integer is a happy number

happy numbers are determined by squaring each digit of the number
then adding the digits together
if you find a loop it is not a happy number
if you reach 1 it is a happy number

make a set
let num = n
while n !== 1
if set includes n return false
add num to n
square and add values
set num to sum
exit
return true

*/

function isHappy(n) {
    const visited = new Set();
    let num = n;

    while (num !== 1) {
        if (visited.has(num)) return false;
        else visited.add(num);

        let sum = 0;
        // now we want to square and add
        while(num > 0) {
            let curr = num % 10   // curr is what we need to work with, square it and add it to sum
            num = Math.floor(num / 10);
            sum += Math.pow(curr, 2)
        }
        num = sum;
    };
    return true;
};

console.log(isHappy(2))
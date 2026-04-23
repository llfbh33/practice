/*
3. Longest Substring Without Repeating Characters


input - string
output - number

find the length of the longest substring without duplicate characters


make a count variable at 0
make a map for char with index values
loop through the entire string
if the char is not in the map 
    - add to map with value of index
    - increment count
if the char is in the map
    - subtract the value from count
    - set map value to current index
return count


'abcdbqrs'

4
4
6
make a map instead of a set
the value of the char is their last index
check the map for instance of char
if exists, subtract value from count, and update the value with the new index
*/

const lengthOfLongestSubstring = (s) => {
    let count = 0;
    let max = 0;
    const map = new Map();

    for (let i = 0; i < s.length; i++) {
        let value = map.get(s[i]);

        // if the value is not undefined then we have seen the char before
        // If the index - the value index is greater than count we know that we have not seen this duplicate within the count range
        // so we would just increment count instead
        if (i - value <= count) count = i - value;
        else count++;

        map.set(s[i], i);
        if (count > max) max = count;
    }

    return max;
};

// let string = 'a b c a b d b q r s a a u';    // 5   

let string = 'abcabdbqrs';
let s = "abba"
console.log(subString(s));




// more common expected version
const lengthOfLongestSubstring2 = (s) => {
    let left = 0;
    let max = 0;
    const map = new Map();

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }

        map.set(char, right);
        max = Math.max(max, right - left + 1);
    }

    return max;
};
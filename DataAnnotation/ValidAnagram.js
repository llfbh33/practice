/*

242. Valid Anagram

input - two strings
output - boolean

Return true or false if t is an anagram of s

s and t are at least the length of 1

return early if the strings are not the same length
make a map
loop through s and add all characters with a value of 1 increasing
end loop
loop through t and check for each key in the map reducing value
if key does not exist or value is 0 or less return false
exit loop
check to see if there are any more values in map
return true if there are non
return false if there are

*/


const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;

    const charCount = new Map();

    for (let char of s) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }

    for (let char of t) {
        const count = charCount.get(char);

        if (!count) return false;

        charCount.set(char, count - 1);
    }

    return true;
};
// Time of O(n) - O(n + m) We look at each element up to one time and lookups in the map are constant O(1)
// Space of O(n) - We store up to n elements in the map
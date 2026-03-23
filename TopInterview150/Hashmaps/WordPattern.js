/*

290. Word Pattern

input - two strings, pattern and s
output - boolean - does s follow the same pattern as pattern

make a hashMap
make a set
make array - s.split(' ') (makes an array containing the words)
if length of pattern does not match that of array length, return false 
map with a for and index loop
if pattern[i] does not exist in the map and array[i] does not exist in set
    add pattern[i] to map with value of array[i]
    add array[i] to the set
else if the value in the map does not match that of array[i]
    return false
exit
return true


*/

const wordPattern = (pattern, s) => {
    const map = {};
    const set = new Set();
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        if (!map[pattern[i]] && !set.has(words[i])) {
            map[pattern[i]] = words[i];
            set.add(words[i]);
        } else if (map[pattern[i]] !== words[i]) {
            // map[pattern[i]] might not exist, in which case it will not match,
            // if it doesn't exist that means that words[i] already exists in the set
            // if it does exist in the map and doesn't match words[i], pattern[i]
            // has already been documented and assigned a different word
            // if it exists and matches we move onto the next loop
            return false;
        };
    };
    return true;
};
// Time of O(n) because we will be looking at n char or words, pattern.length
// Space of O(n) because we will be storing up to n key value pairs in map and n values in set

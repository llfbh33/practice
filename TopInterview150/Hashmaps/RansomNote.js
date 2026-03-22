/*
383. Ransom Note

input - two strings - ransomNote and magazine
output - boolean - ransomNote can be constructed with the characters in magazine


create a hashmap
store all chars in magazine in the map with the value of how many times they appear in the magazine
review ransomNote and reduce the values in the map for the cooresponding characters
if there are no characters left of that type while reviewing return false
if there were enough characters at the end return true

*/


function canConstruct(ransomNote, magazine) {
    const map = {};

    for (let char of magazine) {
        map[char] ? map[char] += 1 : map[char] = 1;
    };

    for (let char of ransomNote) {
        if (!map[char] || map[char] <= 0) return false;
        else map[char] -= 1;
    };
    return true;
};

// Time of O(n + m) we will be viewing n char in ransomNote and m char in magazine making O(n) or O(n + m)
// Space of O(m) we will be storing up to m char within the map
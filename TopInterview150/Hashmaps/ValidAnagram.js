/*
242. Valid Anagram

input - two strings, s and t
output - boolean - t is an anagram of s

an anagram would be if one string could have their letters rearanged to make up the other string

the length of both strings will be the same so we do not need to check for that

create our map
loop through s and add all char into map with value of char += 1
loop through t and reduce the values in the map
if the value goes below 0 return false
if there are values left in the map at the end, return false
return true

*/

function isAnagram(s, t) {
    const map = {};

    if (s.length !== t.length) return false;

    for (let i = 0; i < s.length; i++) {
        map[s[i]] ? map[s[i]] += 1 : map[s[i]] = 1;
    };

    for (let j = 0; j < t.length; j++) {
        if (!map[t[j]] || map[t[j]] <= 0) return false;
        else map[t[j]] -= 1;
    };
    return true;
};
// Time of O(n + m) because we will be looping through s n times and t m times
// Space of O(n) because we will be storing up to n key value pairs in map
/* 
Valid Anagram
Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: s = "racecar", t = "carrace"

Output: true
Example 2:

Input: s = "jar", t = "jam"

Output: false
Constraints:

s and t consist of lowercase English letters.
*/

// Questions
    // are the strings garunteed to be the same length


// Original Question
const isAnagram = (s,t) => {
    // return if not the same length, sort both strings and compare
    if (s.length !== t.length) return false;
    if (s.split('').sort().join('') === t.split('').sort().join('')) return true;
    return false;

    // space of O(n) because we are creating arrays for each string
    // time of O(n log n) because sorting will dominate the time of the function.  log because sorting repeatedly compares and rearanges elements
}

let str1 = "racecar"
let str2 = "carrace"


// Original Question
const isAnagram2 = (s,t) => {
    // return if not the same length
    if (s.length !== t.length) return false;
    // Make a hash map
    let map = {}
    // add in all char from s
    for (let char of s) {
        map[char] ? map[char] += 1 : map[char] = 1;
    }
    // make a loop for t
    for (let char of t) {
        // if it doesn't exist in map return false
        if (map[char] === undefined || map[char] === 0) return false;
        // remove char from map as you loop through t
        else map[char] -= 1;
    }  
    // return true (no values will be left if they are the same length)
    return true;

    // space of O(n) because we will be creating a hashmap storing all the char of s
    // time of O(n) because even though we have two loops they are not nested and we will only be looking at each char max of once
}

console.log(isAnagram2(str1, str2))
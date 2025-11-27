/*
Group Anagrams
Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.

An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

Example 1:

Input: strs = ["act","pots","tops","cat","stop","hat"]

Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
Example 2:

Input: strs = ["x"]

Output: [["x"]]
Example 3:

Input: strs = [""]

Output: [[""]]
Constraints:

1 <= strs.length <= 1000.
0 <= strs[i].length <= 100
strs[i] is made up of lowercase English letters.
*/

// will always have a response
// lower english characters
// not all strings are the same length

// make a hashmap
/*
Input: strs = ["act","pots","tops","cat","stop","hat"]
map = {
    act : ["act", "cat"],
    pots : ["pots", "tops", "stop"],
    hat: ["hat"]
}
*/



const groupAnagrams = (str) => {
    // create a map
    const map = {};
    // loop through the strings
    for (let word of str) {
        // sort the string
        let sorted = word.split('').sort().join('');
        // if the string exists in the map add the og string to the array
        if (map[sorted] !== undefined) {
            map[sorted].push(word);
        } else {
            // else add the sorted as key and og str as val
            map[sorted] = [word];
        }
    }
    // add value arrays to response array and return
    return [Object.values(map)];
    // Space of O(n * k) because worst case we could store all words as keys in the map and we store each word in an array
    // Time of O(n * k log k) n: loop and look at each string once, k log k: sorting creats multiple comparisons per char
};

// want to reduce the amount of sorting, get rid of k log k
// do this by creating a cypher and use the result as the map key instead of the word sorted
// we will have a nested loop to accomplish this
const groupAnagrams2 = (str) => {
    // create a map
    const map = {};
    // loop through the strings
    for (let word of str) {
        // create a cypher for lowercase english letters
        let cypher = new Array(26).fill(0);
        // loop through the chars in the string
        for (let char of word) {
            // add char nums to the cypher - charCodeAt(0) finds the unicode or ASCII code value
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);  // find the numerical difference between the two char to find the index within the cypher  c? 99 - 97 = 2
            cypher[index] += 1;
        }
        // turn the cypher into a string
        const key = cypher.join('');
        // check if it is a key in map
        if (map[key] !== undefined) {
            // if so add the word in
            map[key].push(word)
        } else {
            // if not, add to map with value of [word]
            map[key] = [word]
        } 
    }
    // return [map values]
    return Object.values(map)
    // Space of O(n * k) because we are storing each string once and the lengths of the strings can vary
    // Time of O(n * k) because we look at each string once, and then look at each character of that string once per string  
}

let strs = ["act","pots","tops","cat","stop","hat"];
console.log(groupAnagrams2(strs));
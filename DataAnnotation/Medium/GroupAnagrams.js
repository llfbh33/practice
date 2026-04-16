/*
49. Group Anagrams

input - array of strings
output - array of arrays with strings

why a hashmap works?
why all anagrams need the same key?
why sorted key works?
why count key is faster?


Creating a hashmap is the ideal approach because it lets us group words by a shared representation of their characters. 
All anagrams must map to the same key, since they contain the same letters in different orders.

A common approach is to sort each string and use the sorted result as the key. If two strings have the same sorted form, 
they are anagrams. However, this takes extra time due to sorting, about O(k log k) per word.

A more optimal approach is to use a character count as the key. By counting how many times each letter appears, we can 
build a fixed representation in O(k) time. Since anagrams have identical character frequencies, they will map to the same 
key without needing to sort.



make an array of 26 zeroes
loop through each character in the word
convert each character to an index from 0 to 25
increment that position in the count array
turn the count array into a string key
use that key in the hashmap
store the original word in the value array for that key
return all hashmap values at the end

*/



const groupAnagrams = (strs) => {
    const anagrams = new Map();

    for (let str of strs) {
        let charCount = new Array(26).fill(0);

        for (let char of str) {
            let index = char.charCodeAt(0) - 'a'.charCodeAt(0);

            charCount[index]++;
        }

        let key = charCount.join(',');

        if (!anagrams.has(key)) {
            anagrams.set(key, []);
        } 
        anagrams.get(key).push(str);
    }

    return [...anagrams.values()];
};

let strs =
["eat","tea","tan","ate","nat","bat"];
console.log(groupAnagrams(strs));
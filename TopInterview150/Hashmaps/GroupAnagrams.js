/* 
49 Group Anagrams

input - array of strings
output - array of grouped anagrams



make a map
loop through the list of words
sort the word
if the map does not contain the sorted word
    add it in with the value of the unsorted word in an array
it it does
    add the unsorted word to its array
end loop
return the values of the map


instead of sorting we want to do something like make a cypher, 
It will make the function run more smoothly
 

*/

const groupAnagrams = (strs) => {
    const map = {};

    for (let word of strs) {
       let sort = word.split('').sort().join('');
        console.log(sort)

        map[sort] ? map[sort].push(word) : map[sort] = [word];
    };

    return Object.values(map);
};

let strs = ["eat","tea","tan","ate","nat","bat"]
console.log(groupAnagrams(strs))


var groupAnagrams2 = function(strs) {
    const res = {};

    for (let str of strs) {
        const cypher = new Array(26).fill(0);
        for (let char of str) {
            cypher[char.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        };
        const key = cypher.join(',')
        if (!res[key]) {
            res[key] = []
        };
        res[key].push(str);
    }
    return Object.values(res);
};
/*
205 Isomorphic Strings

input - 2 stings s, t
output - boolean - if the two strings are isomorphic

isomorphic is if the two strings could be the same, as in if you changed assigned ascii 
values within one string, could it match the other string, but the change has to be char for char

make mapS
make a set
loop through both strings at the same time
if s[i] as a key does not exist in the map and t does not exist in the set
    add it to the map with a value of t[i]
    add t char to set
if it does exist as a key and the value does not match t[i] or t exists in set
    return false
return true

*/


const isisomorphic = (s, t) => {
    let map = {};
    let set = new Set();

    for (let i = 0; i < s.length; i++) {
        if (!map[s[i]] && !set.has(t[i])) {
            map[s[i]] = t[i];
            set.add(t[i])
        } else if (map[s[i]] !== t[i]) {
            return false
        }
    };
    return true;
};
// Time of O(n) - we will look at up to n char
// Space of O(n) - O(n + m) we will store up to n key value pairs in map and up to m char in set
/*
Encode and Decode Strings
Design an algorithm to encode a list of strings to a single string. The encoded string is then decoded back to the original list of strings.

Please implement encode and decode

Example 1:

Input: ["neet","code","love","you"]

Output:["neet","code","love","you"]
Example 2:

Input: ["we","say",":","yes"]

Output: ["we","say",":","yes"]
Constraints:

0 <= strs.length < 100
0 <= strs[i].length < 200
strs[i] contains only UTF-8 characters.
*/

// standard in encoding to provide two items to divide words one a # or other special char and the other a count of the length
// By going by the length there is a good chance we will stay on track rather than finding the special char, the special char 
// after the number helps for if the number is multiple digets

function encode (strs) {
    // create a res variable
    // loop through the strs
    // add "str length + # + str"
}

function decode (strs) {
    const res = [];
    let pointer = strs.indexOf('#');
    console.log(pointer)

    while (strs.length > 0) {
        let count = parseInt(strs.slice(0, pointer)) + 2;
        res.push(strs.slice(pointer + 1, count))
        strs = strs.slice(count + 1, strs.length)
    };
    return res;

}

console.log(decode('10#catdogcows6#mouses'))
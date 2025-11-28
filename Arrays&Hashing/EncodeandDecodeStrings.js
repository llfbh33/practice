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
    let res = '';
    // loop through the strs
    for (let word of strs) {
        // add "str length + # + str"
        res += `${word.length}#${word}`
    }
    return res;

    // Space of O(n * k) because the encoded string grows with the total input size
    // Time of O(n * k) because each word is processed once / every character in every word is processed once
}

function decode (strs) {
    let res = [];
    let pointer = 0;

    while (pointer < strs.length) {
        let num = ''

        while (strs[pointer] !== '#') {
            num += strs[pointer];
            pointer++;
        }
        num = parseInt(num);
        pointer++;

        res.push(strs.slice(pointer, pointer + num))
        pointer = pointer + num;
    }
    return res;
    
    // Space of O(n) because we will be storing all characters in the result array a max of one time
    // Time of O(n) not squared because even though there is a nested loop both loops move forward based on the location of the pointer
        // and the pointer never goes backwards. So each character is processed only once
}


let string = ["neet","code","love","you"];
console.log(encode(string))
let encoded = encode(string)

console.log(decode(encoded))





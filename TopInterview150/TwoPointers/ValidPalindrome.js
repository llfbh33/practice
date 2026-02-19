/*
125. Valid Palindrome

Is a palindrome if the string reades the same forwards and backwards and only includes numbers and letter

Need to remove all characters which are not letters or numbers
create two pointers
count them inward until they are at the same index
if the characters do not match return false
return true

There is a method we can use I believe it is something like charCode.At() which we can use to find 

*/

const isPalindrome = (s) => {
    // remove all non alphanumeric characters with regex - replace with '' and lowercase
    let string = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let left = 0;
    let right = string.length - 1;

    while(left < right) {
        if (string[left] !== string[right]) return false;
        left++;
        right--;
    };
    return true;
};
// Time of O(n) because we will look at each char n times
//Space of O(1) because we only create a new string in place

let string = 'This is A Cat? 234';
let two = 'race car'
console.log(isPalindrome(two));
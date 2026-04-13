/*
125. Valid Palindrome

input - string
output - boolean

remove all non alphanumeric characters from string
make all letters lowercase
make two pointers on either end
while first is less than last
compare the letters at the indices
if not the same return false
increase first
decrease last
exit
return true



*/


const isPalindrome = (s) => {
    const cleaned = s.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase();

    let left = 0;
    let right = cleaned.length - 1;

    while (left < right) {
        if (cleaned[left] !== cleaned[right]) return false;
        left++;
        right--;
    }

    return true;
};

// Time of O(n) - cleaning the string and checking with two pointers are both linear operations
// Space of O(n) - We are creating a new string that is up to n in length - a new cleaned string is created


let s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s))
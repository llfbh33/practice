/*
392. Is Subsequence

input: Two strings
return true if s is a subsequence of t
Meaning return true if all the char's within s exist within t

We could solve this using a map or set however this problem is specificly placed within the two pointer section
So we are anticipating a O(n) space outcome

we are only dealing with lowercase english letters
length will be 0 or more for both strings

if s is an empty string would that make it a subsequence, without someone to ask I will assume yes since it is a string
We do not want to check one by one as that would take up to much time should the strings be large or if there are multiple s strings input at a time to review

order witin s must be preserved to be a subsequence so we are able to make a pointer in s and in t to check for matches

*/

function isSubsequence(s, t) {
    let sub = 0;                                    // make a pointer for the substring index
    let string = 0;                                 // make a pointer for the string index

    while (sub < s.length && string < t.length) {   // while we still have characters to review
        if (s[sub] === t[string]) {                 // if the characters at these index's match
            sub++;                                  // then we can move onto the next substring index
        };
        string++;                                   // We move on to check the next string index
    };
    if (sub < s.length) return false;               // return false if we have not reviewed all the substring char's
    return true;                                    // else all the subsring chars are represented and return true
    // could also return as - return sub === s.length - as we would have ended the while loop at the end of s - shortens the code and still readable
};
// Time of O(n) reviewed all chars a total of n + m times which reduces to O(n)
// Space of O(1) as we are only creating inplace variables
/*

88. Merge Sorted Array
input: two sorted arrays, m and n representing the amount of elements in each array
output: a single sorted array with the elements of both arrays

final return should be array nums1
nums1 has a length of m + n, last n elements are set to 0 and should be ignored
nums2 has a length of n

final array should not be returned, it just has to store all the numbers in order

// we are going to assume that it is also okay for me to mutate m and n
    But ofcourse ask first in an interview setting

*/

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
        // loop from back to front nums1 length
    for(let i: number = nums1.length - 1; i >= 0; i--) {
    // condition for if m <= 0
        // set nums1[i] to nums2[n - 1]
        // decrease n by 1
    // condition for if n <= 0
        // set nums1[i] to nums1[m - 1]
        // decrease m by 1
    // if nums1[m - 1] greater than or equal to nums2[n - 1]
        // set nums1[i] to nums1[m - 1]
        // decrease m
    // if nums2[n - 1] greater than num1[m - 1]
        // set nums1[i] to nums2[n - 1]
        // decrease n
    }
}
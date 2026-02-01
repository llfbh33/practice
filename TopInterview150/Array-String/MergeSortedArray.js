/*
88 - Merge Sorted Array

input - two integer arrays in non-decending order, two integers representing the number of elements in array 1 and 2 respectively
Merge arrays into a single array sorted in non-decreasing order
nums1 has a length of m + n so the length of the array will be the total length to be returned - merge into array 1

Plan:
Loop backwards through nums1
compare numbers at nums1[m] with nums2[n]
which ever is higher is placed into nums1[i]
reduce m or n, which ever array you took the number from
if m or n is 0, take from the other array untill m or n is also 0
return array
*/


// we are sorting in place so that we only have to loop once, numbers are already sorted for us
var merge = function(nums1, m, nums2, n) {          // [1, 2, 2, 3, 5, 6]
    for (let i = nums1.length - 1; i >= 0; i--) {    // i = 0
        if (m <= 0) {                                // 0
            nums1[i] = nums2[n - 1];
            n--;
        } else if (n <= 0) {                         // 0
            nums1[i] = nums1[m - 1];
            m--;
        } else {
            if (nums1[m - 1] > nums2[n - 1]) {          // 2 > 2
                nums1[i] = nums1[m - 1];
                m--;
            } else {
                nums1[i] = nums2[n - 1];
                n--;
            }
        }
    };
    return nums1;
};
// Time of O(n) because we look at each input element m + n times
// Space of O(1) because we are not creating any new storage, updating is constant space
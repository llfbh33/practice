/*

128. Longest Consecutive Sequence

*/

const longestConsecutive = (nums) => {
    let set = new Set();
    let res = 0;

    for (let num of nums) {
        set.add(num);
    };

    for (let num of set) {
        if (set.has(num - 1)) continue;
        let count = 0;
        
        while (set.has(num)) {
            count+= 1;
            num+= 1;
        };
        if (count > res) res = count;
    };
    return res;
};

let nums = [0,3,7,2,5,8,4,6,0,1];
let nums2 = [100,4,200,1,3,2];
console.log(longestConsecutive(nums2))
/*


*/

function removeElement(nums: number[], val: number): number {
    let k: number = 0;

    for (let i: number = 0; i < nums.length; i++) {
        let value: number | undefined = nums[i];

        if (value !== undefined && value !== val) { // make sure to explicitly test that value is not undefined
            nums[k] = value;
            k++;
        }
    }
    return k;
};

let nums = [1,2,3,2,3];
let val = 2;
console.log(removeElement(nums, val));
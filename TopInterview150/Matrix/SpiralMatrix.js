/*

54. Spiral Matrix

input - m x n matrix
output - array of matrix elements in a spiral order

m and n are not necessarially the same length
do not depend on uniqueness of elements in the matrix

we can start by documenting the first array of the matrix
if we reach an edge we want to read the turn 90 degrees and read in that direction untill we reach an edge again
does it make more sense to make a pointer coordinate and walk it through the matrix?

create a results array
create a curr variable - [m, n] - [0, 0]
increase n until you find an edge
then increase m until you find an edge
then decrease untill you find an edge

that is easy enough for finding the boarder, but how do we keep from visiting previously visited
creating a set to see if we have visited it before will not work based on the value
but it could would based on the coordinates
or we could keep a counter for m and n
after the first array is documented we decrease movement by 1 for both m and n on each sequence
m counter starts at m length, n counter starts at n length

start by documenting the fist array of the matrix and making counters for length
moove the coordinate down n times
reduce n by 1
move the coordinate over m times
reduce m by 1
move the coordinate up n times
continue...


*/
// m is the length of the matrix
// n is the length of the arrays in the matrix

const spiralOrder = (matrix) => {
    let result = [];

    for (let i = 0; i < matrix[0].length; i++) {
        result.push(matrix[0][i]);
    };

    let m = matrix.length - 1;              
    let n = matrix[0].length - 1;           
    let [currM, currN] = [0, n];          
    let forward = true;

    while(m > 0 && n > 0) {

        for (let i = 0; i < m; i++) {
            if (forward) currM++;
            else currM--;
            result.push(matrix[currM][currN]);
        };
        m--;

        for (let i = 0; i < n; i++) {
            if (forward) currN--;
            else currN++;
            result.push(matrix[currM][currN]);
        };
        n--;
        forward = !forward;
    };
    return result;
}

let matrix =
[[3],[2]];
console.log(spiralOrder(matrix));


const spiralOrder2 = (matrix) => {
    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;
    let spiral = [];

    while (top <= bottom && left <= right) {
        for (let i = left; i <= right; i++)
            spiral.push(matrix[top][i]);
        top++;

        for (let j = top; j <= bottom; j++)
            spiral.push(matrix[j][right]);
        right--;

        if (top <= bottom) {
            for (let k = right; k >= left; k--)
                spiral.push(matrix[bottom][k]);
            bottom--;
        }

        if (left <= right) {
            for (let l = bottom; l >= top; l--)
                spiral.push(matrix[l][left]);
            left++;
        }
    }

    return spiral;
};

console.log(spiralOrder2(matrix));
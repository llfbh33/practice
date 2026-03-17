/*
36. Valid Sudoku

1 - Each row must contain the digits 1 - 9 without repetition
2 - Each column must contain the digits 1 - 9 without repetition
3 - Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1 - 9 without repetition


blank locations will be represented by '.'


We will solve this by section
We will need a nested loop as we will be looking at all the squares
On one full itteration of the first loop we can check each of the squares
    Within the row
*/

/*
instead of quadrant function use this:
 let quad2 = Math.floor(i / 3) * 3 + Math.floor(j / 3);
    Math.floor gives you the rounded down version of a number
    i / 3 will give you 0 if i < 3  / 1 if i < 6 and / 2 if i < 9
    Multiplying the i / 3 value by 3 will help to place the location within the grid
    and add it to j / 3 to find the proper row

*/
    



const isValidSudoku = (board) => {
    let col = new Map();
    let square = new Map();

    const quadrant = (i, j) => {
        if (i < 3) {
            if (j < 3) return 0;
            else if (j < 6) return 1;
            else if (j < 9) return 2;
        } else if (i < 6) {
            if (j < 3) return 3;
            else if (j < 6) return 4;
            else if (j < 9) return 5;
        } else if (i < 9) {
            if (j < 3) return 6;
            else if (j < 6) return 7;
            else if (j < 9) return 8;
        }
    };

    for (let i = 0; i < 9; i++) {
        let row = new Set();
        
        for (let j = 0; j < 9; j++) {
            
            if (board[i][j] !== '.') {
                // To Check the Row
                if (row.has(board[i][j])) return false;
                else row.add(board[i][j]);
            
                // To Check the Col
                if (!col.has(j)) col.set(j, new Set());
                if (col.get(j).has(board[i][j])) return false;
                else col.get(j).add(board[i][j]);

                // To Check the Squares
                // let quad2 = Math.floor(i / 3) * 3 + Math.floor(j / 3);
                // console.log(quad2)
                let quad = quadrant(i, j);
                if (!square.has(quad)) square.set(quad, new Set());
                if (square.get(quad).has(board[i][j])) return false;
                else square.get(quad).add(board[i][j]);
            };
        };
    }
    return true;
};
// Time of O(1) because it will always loop 9*9 times, generalized it is O(n²) because we will loop n * n times
// Space of O(1) because we will always store 9 rows, 9 colums, and 9 squares, so space is fixed, constant, generalized - O(n²) because we are storing sets within maps, we could be storing n * n amount of information


let board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]];

let board2 = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]

console.log(isValidSudoku(board))
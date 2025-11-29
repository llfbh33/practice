/*
Valid Sudoku
You are given a 9 x 9 Sudoku board board. A Sudoku board is valid if the following rules are followed:

Each row must contain the digits 1-9 without duplicates.
Each column must contain the digits 1-9 without duplicates.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without duplicates.
Return true if the Sudoku board is valid, otherwise return false

Note: A board does not need to be full or be solvable to be valid.

Example 1:



Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","8",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: true
Example 2:

Input: board = 
[["1","2",".",".","3",".",".",".","."],
 ["4",".",".","5",".",".",".",".","."],
 [".","9","1",".",".",".",".",".","3"],
 ["5",".",".",".","6",".",".",".","4"],
 [".",".",".","8",".","3",".",".","5"],
 ["7",".",".",".","2",".",".",".","6"],
 [".",".",".",".",".",".","2",".","."],
 [".",".",".","4","1","9",".",".","8"],
 [".",".",".",".","8",".",".","7","9"]]

Output: false
Explanation: There are two 1's in the top-left 3x3 sub-box.

Constraints:

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/


// 1: check that there are no duplicates in each row
// loop through the board
// loop through the array
// add each number to a set
// if the set has the number return false
// else add
// reset the set after each outer loop
// 2: check that there are no duplicates in each column
// make a map with sets? which is O(n) because the sets do not duplicate data
// 3: check that there are no duplicates in each quadrant
// make an object that holds quadrant locations based on coordinates
// check the quadrant
// have another map with sets

function checkQuadrant(x, y) {
    if (x < 3) {
        if (y < 3) return 0;
        if (y < 6) return 1;
        else return 2
    } else if (x < 6) {
        if (y < 3) return 3;
        if (y < 6) return 4;
        else return 5
    } else {
        if (y < 3) return 6;
        if (y < 6) return 7;
        else return 8
    }
}

function isValidSudoku(board) {
    let checkTwo = {};
    let checkThree = {};

    for (let i = 0; i < board.length; i++) {
        let checkOne = new Set();

        for (let j = 0; j < board[i].length; j++) {
            let loc = board[i][j];
            
            if (loc !== ".") {
                let quad = checkQuadrant(i, j);
                
                if (checkTwo[j] === undefined) checkTwo[j] = new Set(); // would this be better to preset than check for every loop?
                if (checkThree[quad] === undefined) checkThree[quad] = new Set();

                if (checkOne.has(loc)) return false;
                else checkOne.add(loc);

                if (checkTwo[j].has(loc)) return false;
                else checkTwo[j].add(loc);

                if (checkThree[quad].has(loc)) return false;
                else checkThree[quad].add(loc);
            }
        }
    }
    return true;
    // Time of O(n²) because we are first looping through all the arrays in board then all the elements in each array
    // Space of O(n) because each number will only be stored up to one time in each set and there is only one set per key in the map, and only one key in the map per board length
};

let board = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

let board2 = [
    ["1", "2", ".", ".", "3", ".", ".", ".", "."],
    ["4", ".", ".", "5", ".", ".", ".", ".", "."],
    [".", "9", "1", ".", ".", ".", ".", ".", "3"],
    ["5", ".", ".", ".", "6", ".", ".", ".", "4"],
    [".", ".", ".", "8", ".", "3", ".", ".", "5"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", ".", ".", ".", ".", ".", "2", ".", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "8"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
]

console.log(isValidSudoku(board))
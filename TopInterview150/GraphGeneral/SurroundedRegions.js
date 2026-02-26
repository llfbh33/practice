/*
130. Surrounded Regions

do not need to return anything, just replace all surrounded regions with 'X' instead of 'O'
a region is not surrounded if it is touching the edge of the board

This problem is very similar to our solve of Number of Islands, especialy because we replace the land with water
for this one, we want to continue to fill up our stack before processing the values
then process after if we are not touching an edge
if we are touching an edge then we can clear the stack and move on
.... problem I see with this is that we will be filling the stack and removing from it over and over
this would cause a problem with our time and memory which can be revised
If we were to use a set we could track all the coordinates which have already been seen and determined
and we can check the set before processing a coordinate or adding connections to the stack
Since we are changing only reigons which are not touching the edge they will not trigger additions
to the stack. So we only need to add coordinates to the set in the event that the stack is to be cleared


only look at the boarder, any reigon and its connected portions change to 'S'. after exiting loop through
 the graph one at a time with a nested loop structure, if the coordinates are 'S' set them to 'O' and move on, 
 if they are an 'O' set them to 'X' and move on

 */

 function solve(board) {
    // create stack
    let stack = [];
    // create a coordinates helper function
    function coordinates(x, y) {
        // check north, update 'O' to 'S'
        if (x - 1 >= 0 && board[x - 1][y] !== undefined && board[x - 1][y] === 'O') {
            board[x - 1][y] = 'S';
            stack.push([x - 1, y])
        };
        // check east, update 'O' to 'S'
        if (y + 1 < board[x].length && board[x][y + 1] !== undefined && board[x][y + 1] === 'O') {
            board[x][y + 1] = 'S';
            stack.push([x, y + 1]);
        };
        // check sourth, update 'O' to 'S'
        if (x + 1 < board.length && board[x + 1][y] !== undefined && board[x + 1][y] === 'O') {
            board[x + 1][y] = 'S';
            stack.push([x + 1, y]);
        };
        // check west, update 'O' to 'S'
        if (y - 1 >= 0 && board[x][y - 1] !== undefined && board[x][y - 1] === 'O') {
            board[x][y - 1] = 'S';
            stack.push([x, y - 1]);
        };
    };
    // look through all the boarders - m top and bottom
    for (let i = 0; i < board[0].length; i++) {
        // if you find an 'O' replace with 'S'
        if (board[0][i] === 'O') {
            board[0][i] = 'S';
            stack.push([0, i]);
        };
        if (board[board.length - 1][i] === 'O') {
            board[board.length - 1][i] = 'S';
            stack.push([board.length - 1, i]);
        };
    };
    // Look through all the boarders - n left and right
    for (let i = 0; i < board.length; i++) {
        // if you find an 'O' replace with 'S'
        if (board[i][0] === 'O') {
            board[i][0] = 'S';
            stack.push([i, 0]);
        };
        if (board[i][board[0].length - 1] === 'O') {
            board[i][board[0].length - 1] = 'S';
            stack.push([i, board[0].length - 1])
        };
    };
    // loop through all boarder coordinates for regions
    while (stack.length > 0) {
        let [x, y] = stack.pop();
        coordinates(x, y);
    };
    
    for (let i = 0; i < board.length; i++) {
        // for loop
        for (let j = 0; j < board[i].length; j++) {
            // if coordinates are 'O' replace with 'X'
            if (board[i][j] === 'O') board[i][j] = 'X';
            // if coordinates are 'S' replace with 'O'
            else if (board[i][j] === 'S') board[i][j] = 'O';
        }
    };
    // do not need to return anything
    return board;
};
// Time of O(m * n) because we have nested loops searching up to m * n times
// Space of O(m * n) because we are storing up to m * n elements over all in our stack

let board =
[["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
let board2 =
[["X","X","X","X","O"],["X","O","O","X","X"],["O","X","X","X","X"]]
console.log(solve(board2));
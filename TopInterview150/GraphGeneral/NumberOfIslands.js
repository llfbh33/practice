/*
200 Number of Islands

input: 2D Binary grid
Output: integer - number of distinct islands within the grid

Islands can be touching diaginally and be their own islands, if they are touching 
horizontaly or vertically they are their own islands

there is atleast one element within the grid
'0' for water '1' for land

we are going to need a directional cypher to help us navigate all options touching the current
we will want to update each land space to a water space after viewing so we do not count more than once

two loops to look at grid[i][j]
if the location is a land
we will increase our counter by 1
change that location to a water
and use our cypher to check the four squares around for land
add these lands to a stack
remove one at a time from stack and update to water
add all their horizontal and vertical lands to the stack
once stack is empty, continue looping through the grid

*/



const numIslands = (grid) => {
    // count variable set to 0
    let count = 0;
    // create a stack
    let stack = [];
    // coordinates variable or helper function
    const coordinates = (x, y) => {
        if (y + 1 < grid[x].length && grid[x][y + 1] !== undefined && grid[x][y + 1] === '1') {
            grid[x][y + 1] = '0';
            stack.push([x, y + 1])
        };
         if (x + 1 < grid.length && grid[x + 1][y] !== undefined && grid[x + 1][y] === '1') {
            grid[x + 1][y] = '0';
            stack.push([x + 1, y])
        };
        if (y - 1 >= 0 && grid[x][y - 1] !== undefined && grid[x][y - 1] === '1') {
            grid[x][y - 1] = '0';
            stack.push([x, y - 1])
        };
        if (x - 1 >= 0 && grid[x - 1][y] !== undefined && grid[x - 1][y] === '1') {
            grid[x - 1][y] = '0';
            stack.push([x - 1, y])
        };
    };
    // for loop the length of the grid
    for (let x = 0; x < grid.length; x++) {
        // for loop the length of the grid[i]
        for (let y = 0; y < grid[x].length; y++) {
            // if curr is a '1'
            if (grid[x][y] === '1') {
                // increase count
                count++;
                // set curr to '0'
                grid[x][y] = '0';
                // call on coordinates to add values to stack
                coordinates(x, y);
                // while stack has length
                while(stack.length > 0) {
                    // pop off the current coordinates
                    let [i, j] = stack.pop();
                    // find all the land adjacent to current coordinates
                    coordinates(i, j);
                    // end whle loop
                };
                // exit if statement
            };
            // exit second for loop
        };
        // exit first for loop
    };
    // return count
    return count;
};
// Time of O(m * n) because we need to view each element once within the grid
// Space O(m * n) because worst case all coordinates will be pushed and pulled from the stack

let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];

console.log(numIslands(grid))
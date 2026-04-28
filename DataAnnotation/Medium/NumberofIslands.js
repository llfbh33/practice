/*

200. Number of Islands


input - grid, array of arrays
output - number



*/


const numIslands = (grid) => {
    let count = 0;

    // walk through each element of the grid with a nested loop
    // if you run into a '1' you have an island
    // add the coordinates to a stack
    // set those coordinates to '0'
    // increase count by 1
    // send stack to a helper function
    // check all the directions for '1's
    // add all '1's to the stack
    // continue with the helper function until the stack is empty, we have removed the first island
    // return back to the nested loop and continue
    
    return count;
};
// Time of O(n²) we will be looking at the grid n * m times
// Space of O(1) 

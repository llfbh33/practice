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
    // create a coordinates helper function
    // check north, update 'O' to 'S'
    // check east, update 'O' to 'S'
    // check sourth, update 'O' to 'S'
    // check west, update 'O' to 'S'
    // look through all the boarders
    // if you find an 'O' replace with 'S'
    // call on coordinates function to fill stack
    // while the stack has length
    // pop from the stack 
    // call on the coordinates function
    // end whle loop
    // end the boarder checks
    // for loop
    // for loop
    // if coordinates are 'S' replace with 'O'
    // if coordinates are 'O' replace with 'S'
    // do not need to return anything
};
/*
207 Course Schedule

All elements in prerequisites are pairs 
pair at [b] must be taken before pair at [a]
Sift through all the pairs to be sure that it 
would be possible for a student to take any and 
all of the courses

numCourses is the amount of courses there are
Provides a fixed number on the range of numbers within the pairs
based on a 0-index

*/

// brute force, take the ith element and compare against 
// all the remaining elements to see if there are any conflicts
// if we make a map we can compare on the go



const canFinish = (numCourses, prerequisites) => {
    let map = new Map();

    for (let req of prerequisites) {
        let [after, before] = req;                      // 0, 1
        if (before === after) return false;
        if (!map.has(before)) {
            map.set(after, before);            
        } else {
            let curr = before;                          // 1

            while (map.has(curr)) {                     // true
                curr = map.get(curr);                   // 0
                if (curr === after) return false;       
            };
            map.set(after, before);
        }
    };
    return true;
};


let pre = [[2, 1], [3, 2], [4, 3], [2, 4]];                             // false
let pre2 = [[2, 1], [3, 2], [6, 4], [1, 5]];                            // true
let pre3 = [[1,0],[0,1]];                                               // false
let pre4 = [[0,10],[3,18],[5,5],[6,11],[11,14],[13,1],[15,1],[17,4]]    // false
let pre5 = [[1,0],[1,2],[0,1]];                                         // false

console.log(canFinish(8, pre4));

let map = {
    1: 0,
    1: 2,

    
}


// we want to store the values of the visited courses
// if we run into a duplicate then we know that there was an issue
//


function canFinish2(numCourses, prerequisites) {
    // Build an ajency list, fill each spot with arrays, set to the amount of courses
    let graph = Array.from({ length: numCourses }, () => []);

    // push all the elements in prerequisites into the ajency list to make a graph
    for (let [course, pre] of prerequisites) {
        graph[pre].push(course)
    };
    console.log(graph);

    // track the current path and the fully processed nodes
    let visiting = new Set();
    let visited = new Set();

    // helper function
    const dfs = (course) => {
        if (visiting.has(course)) return false; // if we are already visiting then there is a cycle
        if (visited.has(course)) return true;  // if the course has already been visited it is safe

        visiting.add(course);

        for (let next of graph[course]) {           // use this format to leapfrog from array to array looking for conflicts
            if (!dfs(next)) return false;
        };

        visiting.delete(course);
        visited.add(course);

        return true;
    };

    // loop through each course number to check if there are any conflicts
    for (let i = 0; i < numCourses; i++) {
        if (!dfs(i)) return false;
    };

    return true;
};

console.log(canFinish2(20, pre4))
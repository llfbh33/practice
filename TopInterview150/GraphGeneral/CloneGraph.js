/*
133. Clone Graph


*/

class _Node {
    constructor(val = 0, neighbors = []) {
        this.val = val;
        this.neighbors = neighbors;
    }
}

function cloneGraph(node) {
    // if there is no node then return
    if (!node) return;
    // make a copy node based off node
    let copy = new _Node(node.val);
    // make a curr variable pointing at copy
    let stack = [...node.neighbors];
    let map = new Map();
    map.set(node, copy)

    while (stack.length > 0) {
        let curr = stack.pop();
        
        if (!map.has(curr)) {
            let newNode = new _Node(curr.val);
            map.set(curr, newNode);
            for (let neighbor of curr.neighbors) {
                if (map.has(neighbor)) {
                    newNode.neighbors.push(map.get(neighbor));
                    map.get(neighbor).neighbors.push(newNode); // Make sure to back track and add the newNode to the neighbor already stored as well
                } else if (!map.has(neighbor)) {
                    stack.push(neighbor);
                }
            }
        };
    };
    return copy;
};

let node = new _Node(1, []);
let node2 = new _Node(2, [node]);
let node3 = new _Node(3, [node, node2]);
node.neighbors.push(node2, node3);
node2.neighbors.push(node3);

console.log(cloneGraph(node))
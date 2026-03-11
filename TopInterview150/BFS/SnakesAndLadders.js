/*

909. Snakes and Ladders

code to simulate a dice roll for the snakes and ladders board:
[curr + 1, min(curr + 6, n2)]
the die is 1 - 6 so we take our current location and add 1 to it
the second number is our current square + 6 or the last square on the board
the idea is to find the range of all the squares we could possibly move to

if a square does not have a snake or ladder it will have a value of -1
if it does have a snake or ladder you will need to move to the new square should you land on it

difficulties - 
    The layout of the board, if you have a board that is 6 x 6 then square 1 is [5, 0]
    and square 7 is [4, 5] - how do we simulate this?
    starting point is always [board.length - 1, 0]
    ending point for this board would be [0,0]
    but a board that is 5 long would end at [0, 5]
    so i can not base the location off of index


    first we know we start at [board.length - 1, 0]
    then we find our possible locations to land
    we want to check out those positions and see what options exist there
    a snake, ladder, or -1
    ... how can we check all possibilities of movement without wasting time
    looking through all the possible options

*/

const snakesAndLadders = (board) => {
    const n = board.length;
    const target = n * n;

    const getPosition = (num) => {
        let r = Math.floor((num - 1) / n);
        let c = (num - 1) % n;

        if (r % 2 === 1) c = n - 1 - c;

        r = n - 1 - r;

        return [r, c];
    };

    let queue = [1];
    let visited = new Set([1]);
    let moves = 0;

    while (queue.length) {
        let size = queue.length;

        for (let i = 0; i < size; i++) {
            let curr = queue.shift();

            if (curr === taerget) return moves;

            for (let dice = 1; dice <= 6; dice++) {
                let next = curr + dice;
                if (next > target) break;

                let [r, c] = getPosition(next);

                if (board[r][c] !== -1) {
                    next = board[r][c];
                }

                if (!visited.has(next)) {
                    visited.add(next);
                    queue.push(next);
                }
            }
        }
        moves++;
    }
    return -1;
}
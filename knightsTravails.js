console.log("start!");

function minKnightMoves(start, end) {

console.log(start);
console.log(end);
}

const getMoves = (x, y) => {
  const moves = [
                 [x + 1, y + 2], [x + 2, y + 1],
                 [x + 2, y - 1], [x + 1, y - 2],
                 [x - 1, y - 2], [x - 2, y - 1],
                 [x - 2, y + 1], [x - 1, y + 2] 
                ]

   return moves;

}

const start = [3,3];
const end = [4,4];

minKnightMoves(start, end);


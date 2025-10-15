console.log("start");


function minKnightMoves(start, end) {

  let current = start;
const visited = Array.from({length : 8}, () => Array(8).fill(false));
let queue = [];

queue.push(start);
visited[start[0]] [start[1]] = true;
    

//check if the move is inside the board or not
 const isInsideBoard = (nextX, nextY) => {
  return (nextX > 0 && nextX < 7 && nextY > 0 && nextY < 7)
 }


//BFS
  while(queue.length) {
    current = queue.shift();

    //check if we reached the end
    if(current[0] === end[0] && current[1] === end[1]) {
      console.log("We reached the end", end);
      return;
    }


    const possibleMoves = getMoves(current[0], current[1]);
    console.log(possibleMoves);

    //use For Of loop to go through each index  and check

    for(const [moveX, moveY] of possibleMoves) {

      if(isInsideBoard(moveX, moveY) && !visited[moveX][moveY]) {
        visited[moveX][moveY] = true;
        queue.push([moveX, moveY]);
      }
    }
  }
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

const start = [0, 0];
const end = [3, 3];

minKnightMoves(start, end);

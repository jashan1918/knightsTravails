console.log("start!");

function minKnightMoves(start, end) {
  const path = []


  let queue = [];
  let current = start;
  queue.push(start);
  let visited = Array.from({length : 8}, () => Array(8).fill(false))
      visited[current[0]][current[1]] = true;
    // queue.shift(start);

    
    console.log(queue);

    function isInsideBoard(nextX, nextY) {
  return nextX >= 0 && nextX <= 7 && nextY >= 0 && nextY <= 7;
    }
    
    while(queue.length) {
      current = queue.shift();
      path.push(current);
      

      if(current[0] === end[0] && current[1] === end[1]) {
        console.log("Reached the end!", path);
        break;
      }

        const possibleMoves = getMoves(current[0], current[1]);
  console.log(possibleMoves);

  possibleMoves.forEach((e) => queue.push(e));
  console.log(queue);

  for (const [moveX, moveY] of possibleMoves) {

    if(isInsideBoard(moveX, moveY) && !visited[moveX][moveY]){

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

const start = [0,0];
const end = [3,3];

minKnightMoves(start, end);


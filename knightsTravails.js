console.log("start");


function minKnightMoves(start, end) {

  let current = start;
const visited = Array.from({length : 8}, () => Array(8).fill(false));
let queue = [];
//breadCrumbs
  let cameFrom = new Map();

    const startKey = `${start[0]},${start[1]}`;
  const endKey = `${end[0]},${end[1]}`;

queue.push(start);
visited[start[0]] [start[1]] = true;
    

//check if the move is inside the board or not
 const isInsideBoard = (nextX, nextY) => {
  return (nextX >= 0 && nextX <= 7 && nextY >= 0 && nextY <= 7)
 }


//BFS
  while(queue.length) {
    current = queue.shift();


       const [currX, currY] = current;
    const currentKey = `${currX},${currY}`;


    //check if we reached the end
    if(currX === end[0] && currY === end[1]) {
      shortestPath(startKey, endKey, cameFrom)
    }


    const possibleMoves = getMoves(currX, currY);
    // console.log(possibleMoves);

    //use For Of loop to go through each index  and check

    for(const [moveX, moveY] of possibleMoves) {

      if(isInsideBoard(moveX, moveY) && !visited[moveX][moveY]) {
        const nextKey = `${moveX},${moveY}`;
        cameFrom.set(nextKey, currentKey);

        visited[moveX][moveY] = true;
      
        queue.push([moveX, moveY]);
      }
    }
  }
}

const shortestPath = (start, end, cameFrom) => {
  const path = [];
  let currentKey = end;

  while(currentKey) {
    const [r, c] = currentKey.split(',').map(Number);
    path.push([r, c])

     if (currentKey === start) {
            break; 
        }


    currentKey = cameFrom.get(currentKey); 
  }

      path.reverse(); 

      console.log("Shortest Path:", path);
      return path;
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

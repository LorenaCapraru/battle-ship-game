import "./Board.css";

const Board = () => {
  //create a board
  let board = [];
  //push in the board pairs of[i,j] which represents the indexes of the cell
  let count = 0;
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
        //it starts from 'A' and it adds one to pass to the next char every 10 cells
      board.push([String.fromCharCode("A".charCodeAt(0) + count / 10), j]);
      count++;
    }
  }
  console.log(board);
  return (
    <div className="board">
      {board.map((cell, index) => (
        <div key={index} className="cell">
          ( {String.fromCharCode("A".charCodeAt(0) + index / 10)}, {cell[1]})
        </div>
      ))}
    </div>
  );
};
export default Board;

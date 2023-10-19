import "./Board.css";

export default function Board({ player, submit, direction, sizeOfShip }) {
  // Create a board
  let board = [];
  // Push in the board pairs of [i, j] which represents the indexes of the cell
  let count = 0;
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      // It starts from 'A' and it adds one to pass to the next char every 10 cells
      board.push([String.fromCharCode("A".charCodeAt(0) + count / 10), j]);
      count++;
    }
  }

  const handleCellClick = (cell, index) => {
    // let selectedCells = [];
    if (submit === true) {
      if (direction === "Right") {
        cell[1] = Number(cell[1]) + Number(sizeOfShip) - 1;
      }
      if (direction === "Left") {
        cell[1] = Number(cell[1]) - (Number(sizeOfShip) - 1);
      }
      if (direction === "Top") {
        cell[0] = String.fromCharCode(
          cell[0].charCodeAt(0) - (Number(sizeOfShip) - 1)
        );
      }
      if (direction === "Bottom") {
        cell[0] = String.fromCharCode(
          cell[0].charCodeAt(0) + (Number(sizeOfShip) - 1)
        );
      }
    }

    console.log(cell);
    return cell;
  };

  return (
    <div className="mainBoard">
      <div className="player">{player}</div>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="cell"
            onClick={() => handleCellClick(cell, index)}
          >
            ( {String.fromCharCode("A".charCodeAt(0) + index / 10)}, {cell[1]})
          </div>
        ))}
      </div>
    </div>
  );
}

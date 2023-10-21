import "./Board.css";
// import { useState } from "react";

export default function Board({ player, submit, direction, sizeOfShip }) {
  // const [clickedCells, setClickedCells] = useState([]);

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
  // const [click, setClick] = useState(false);

  const handleCellClick = (cell, index) => {
    const lastCell = [...cell];
    let selectedCells = [];
    if (submit === true) {
      if (direction === "Right") {
        // lastCell[1] = Number(cell[1]) + Number(sizeOfShip) - 1;
        for (let i = 0; i < sizeOfShip; i++) {
          let nextCell = Number(cell[1]) + i - 1;
          selectedCells.push(nextCell);
          console.log("here", selectedCells);
          // selectedCells = [[...cell], lastCell];
        }
      }
      if (direction === "Left") {
        lastCell[1] = Number(cell[1]) - (Number(sizeOfShip) - 1);
        selectedCells = [[...cell], lastCell];
      }
      if (direction === "Top") {
        lastCell[0] = String.fromCharCode(
          lastCell[0].charCodeAt(0) - (Number(sizeOfShip) - 1)
        );
        selectedCells = [[...cell], lastCell];
      }
      if (direction === "Bottom") {
        lastCell[0] = String.fromCharCode(
          lastCell[0].charCodeAt(0) + (Number(sizeOfShip) - 1)
        );
        selectedCells.push(lastCell);
      }
    }

    console.log(selectedCells);
    return selectedCells;
  };

  return (
    <div className="mainBoard">
      <div className="player">{player}</div>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(cell, index)}
            className={"cell"}
          >
            ( {String.fromCharCode("A".charCodeAt(0) + index / 10)}, {cell[1]})
          </div>
        ))}
      </div>
    </div>
  );
}

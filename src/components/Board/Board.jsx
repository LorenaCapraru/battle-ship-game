import "./Board.css";
import { useState } from "react";

export default function Board({ player, submit, direction, sizeOfShip }) {
  const [indexSelectedCell, setIndexSelectedCells] = useState([]);

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
    // let indexSelectedCell = [];
    // setIndexSelectedCells([]);
    if (submit === true) {
      if (direction === "Right") {
        for (let i = 0; i < sizeOfShip; i++) {
          // indexSelectedCell.push(index + 1);
          setIndexSelectedCells([...indexSelectedCell, index + 1]);
        }
      } else if (direction === "Left") {
        for (let i = 0; i < sizeOfShip; i++) {
          setIndexSelectedCells([...indexSelectedCell, index - 1]);
        }
      } else if (direction === "Top") {
        for (let i = 0; i < sizeOfShip; i++) {
          setIndexSelectedCells([...indexSelectedCell, index - i * 10]);
        }
      } else if (direction === "Bottom") {
        for (let i = 0; i < sizeOfShip; i++) {
          setIndexSelectedCells([...indexSelectedCell, index + i * 10]);
        }
      }
    }

    console.log(indexSelectedCell);
    return indexSelectedCell.sort();
  };
  // setIndexSelectedCells([34, 35, 36]);

  return (
    <div className="mainBoard">
      <div className="player">{player}</div>
      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(cell, index)}
            className={indexSelectedCell.includes(index) ? "cellClick" : "cell"}
          >
            {String.fromCharCode("A".charCodeAt(0) + index / 10)}, {cell[1]}
          </div>
        ))}
      </div>
    </div>
  );
}

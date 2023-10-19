import "./App.css";
import Board from "./components/Board/Board";
import Panel from "./components/Panel/Panel";
import { useState } from "react";

function App() {
  //for pannel
  const [sizeOfShip, setSizeOfShip] = useState(0);
  const [direction, setDirection] = useState("Top");
  const [submit, setSubmit] = useState(false);

  const handleSize = (e) => {
    e.preventDefault();
    setSizeOfShip(e.target.value);
  };
  const handleDirection = (e) => {
    e.preventDefault();
    setDirection(e.target.value);
  };

  const handleSubmit = () => {
    return submit === false ? setSubmit(true) : setSubmit(false);
  };

  const player1 = "You";
  const player2 = "Computer";
  return (
    <div className="main">
      <h1 className="title">BattleShip Game</h1>
      <div className="boards">
        <Board
          player={player1}
          submit={submit}
          direction={direction}
          sizeOfShip={sizeOfShip}
        />
        <Panel
          sizeOfShip={sizeOfShip}
          direction={direction}
          submit={submit}
          handleSize={handleSize}
          handleDirection={handleDirection}
          handleSubmit={handleSubmit}
        />
        <Board player={player2} />
      </div>
    </div>
  );
}

export default App;

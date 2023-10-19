import "./App.css";
import Board from "./components/Board/Board";
import Panel from "./components/Board/Panel/Panel";

function App() {
  const player1 = "You";
  const player2 = "Computer";
  return (
    <div className="main">
      <h1 className="title">BattleShip Game</h1>
      <div className="boards">
        <Board player={player1} />
        <Panel />
        <Board player={player2} />
      </div>
    </div>
  );
}

export default App;

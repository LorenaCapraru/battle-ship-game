import "./Panel.css";

const Panel = ({
  sizeOfShip,
  direction,
  submit,
  handleSize,
  handleDirection,
  handleSubmit,
}) => {
  return (
    <div className="panel">
      {submit === false ? (
        <form className="formPanel" onSubmit={handleSubmit}>
          <legend>Panel</legend>
          <div className="inputData">
            <label>Size of the ship: </label>
            <input
              type="number"
              value={sizeOfShip}
              onChange={handleSize}
              min="1"
              max="10"
            />
          </div>
          <div className="inputData">
            <label>Direction: </label>
            <select onChange={handleDirection} required>
              <option value="Top">Top</option>
              <option value="Right">Right</option>
              <option value="Bottom">Bottom</option>
              <option value="Left"> Left</option>
            </select>
          </div>
          <input type="submit" className="submit" />
        </form>
      ) : (
        <div className="formPanel">
          <h1>Panel</h1>
          <div className="inputData">
            <div>Size of the ship: {sizeOfShip} </div>
          </div>
          <div className="inputData">
            <div>Direction: {direction} </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Panel;

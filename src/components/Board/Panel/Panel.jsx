import "./Panel.css";

const Panel = () => {
  return (
    <div>
      <form className="formPanel">
        <legend>Panel</legend>
        <div className="inputData">
          <label>Size of the ship: </label>
          <input type="number" />
        </div>
        <div className="inputData">
          <label>Left/Right </label>
          <select>
            <option value="Right">Right</option>
            <option value="Left">Left</option>
          </select>
          <label>Vertical/Horizontal </label>
          <select>
            <option value="Vertical">Vertical</option>
            <option value="Horizontal">Horizontal</option>
          </select>
        </div>
        <input type="submit" />
      </form>
    </div>
  );
};
export default Panel;

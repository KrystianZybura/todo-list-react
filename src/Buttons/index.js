import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone }) =>
  tasks.length > 0 && (
    <div className="buttons">
      <button
        className="buttons__button"
        onClick={toggleHideDone}
        disabled={tasks.every(({ done }) => !done)}
      >
        {hideDone ? "Pokaż" : "Ukryj"} ukończone
      </button>
      <button
        className="buttons__button"
        disabled={tasks.every(({ done }) => done)}
        onClick={setAllDone}
      >
        Ukończ wszystkie
      </button>
    </div>
  );

export default Buttons;

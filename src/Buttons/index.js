import './style.css';

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
  tasks.length > 0 && (
    <span>
      <button onClick={toggleHideDone} className="buttons__button">
        {hideDone ? "Pokaż" : "Ukryj"} ukończone</button>
      <button
        className="buttons__button"
        autofocus
        disabled={tasks.every(({ done }) => done)}
      >
        Ukończ wszystkie
      </button>
    </span>
  )
);

export default Buttons;
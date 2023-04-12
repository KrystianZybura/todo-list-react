import "./style.css"

const List = ({ tasks, hideDone, removeTask }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`${task.done && hideDone ? "list__item--hidden" : ""} list__item`}
            >
                <button
                    className={`list__button list__button--done ${task.done ? "list__button--checked" : ""}`}
                >
                    ✔
                </button>
                <span
                    className={`${task.done ? "list__item--done" : ""}`}
                >
                    {task.content}
                </span>
                <button className="list__button" onClick={() => removeTask(task.id)}>🗑</button>
            </li>
        ))}
    </ul>
);

export default List;
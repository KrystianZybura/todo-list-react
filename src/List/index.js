import "./style.css"

const List = ({ tasks, hideDoneTasks }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`${task.done && hideDoneTasks ? "list__item--hidden" : ""} list__item`}
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
                <button className="list__button">🗑</button>
            </li>
        ))}
    </ul>
);

export default List;
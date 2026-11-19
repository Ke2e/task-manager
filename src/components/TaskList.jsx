import "./TaskList.css";
import { Link } from "react-router";

function TaskList({ tasks, emptyText, onToggle, onDelete }) {
  if (tasks.length === 0) {
    return <p className="empty-text">{emptyText}</p>;
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <input
            type="checkbox"
            checked={task.done}
            onChange={() => onToggle(task.id)}
          />
          <Link to={`/tasks/${task.id}`}
            className={task.done ? "done" : undefined}
          >
            {task.title}
          </Link>
          <button type="button" onClick={() => onDelete(task.id)}>
            删除
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;

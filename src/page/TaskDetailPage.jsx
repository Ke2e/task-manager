import { useParams, Link } from "react-router";

function TaskDetailPage({ tasks, onToggle, onDelete }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));
  if (!task) {
    return (
      <div>
        <h2>任务不存在</h2>
        <Link to="/">返回任务列表</Link>
      </div>
    );
  }
  return (
    <div>
      <h2>{task.title}</h2>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <p>状态：{task.done ? "已完成" : "未完成"}</p>
      <Link to="/">返回任务列表</Link>
      <button onClick={() => onDelete(task.id)}>删除任务</button>
    </div>
  );
}

export default TaskDetailPage;

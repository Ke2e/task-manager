import { useParams, Link } from "react-router";

function TaskDetailPage({ tasks, onToggle, onDelete, isLoading, error, onRetry }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));
  if (isLoading) {
    return (
      <main className="app">
        <p className="loading-text">加载中...</p>
      </main>
    );
  } else if (error) {
    return (
      <main className="app">
        <div>
          <p className="error-text">加载失败: {error.message}</p>
          <button onClick={() => onRetry()}>重试</button>
        </div>
      </main>
       );
  }
  if (!task) {
    return (
      <div>
        <h2>任务不存在</h2>
        <Link to="/">返回任务列表</Link>
      </div>
    );
  }
  return (
    <div className="task-detail">
      <h2>{task.title}</h2>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => onToggle(task.id)}
      />
      <p>状态：{task.done ? "已完成" : "未完成"}</p>
      <Link to="/">返回任务列表</Link>
      <button className="delete-button" onClick={() => onDelete(task.id)}>删除任务</button>
    </div>
  );
}

export default TaskDetailPage;

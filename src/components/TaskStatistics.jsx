import "./TaskStatistics.css";

function TaskStatistics({ tasks }) {
  const total = tasks.length;
  const doneCount = tasks.filter((t) => t.done).length;
  return (
    <div>
      <p className="done-count">已完成 {doneCount} 个任务</p>
      <p className="total-count">共 {total} 个任务</p>
    </div>
  );
}
export default TaskStatistics;

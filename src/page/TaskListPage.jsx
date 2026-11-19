import TaskStatistics from "../components/TaskStatistics.jsx";
import TaskAdd from "../components/TaskAdd.jsx";
import TaskList from "../components/TaskList.jsx";
import "./TaskListPage.css";

function TaskListPage({
  tasks,
  isLoading,
  error,
  emptyText,
  onToggle,
  onDelete,
  onAdd,
  search,
  statusFilter,
  setSearch,
  setStatusFilter,
  onRetry,
}) {
  // 加新筛选项时，只在这张表里补一行
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
  }else {
    return (
      <main className="app">
        <h1>任务管理</h1>

        <div className="filter-buttons">
          <button
            type="button"
            className={statusFilter === "all" ? "active" : undefined}
            onClick={() => setStatusFilter("all")}
          >
            全部
          </button>
          <button
            type="button"
            className={statusFilter === "done" ? "active" : undefined}
            onClick={() => setStatusFilter("done")}
          >
            已完成
          </button>
          <button
            type="button"
            className={statusFilter === "active" ? "active" : undefined}
            onClick={() => setStatusFilter("active")}
          >
            未完成
          </button>
        </div>

        <input
          aria-label="搜索任务"
          type="text"
          placeholder="搜索任务"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <TaskStatistics tasks={tasks} />

        <TaskList
          tasks={tasks}
          emptyText={emptyText}
          onToggle={onToggle}
          onDelete={onDelete}
        />

        <TaskAdd onAdd={onAdd} />
      </main>
    );
  }
}

export default TaskListPage;

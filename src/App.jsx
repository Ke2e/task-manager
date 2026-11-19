import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import TaskListPage from "./page/TaskListPage.jsx";
import TaskDetailPage from "./page/TaskDetailPage.jsx";
import { fetchTasks } from "./api.js";

function App() {
  const statusMatchers = {
    all: () => true,
    done: (task) => task.done,
    active: (task) => !task.done,
  };

  function getVisibleTasks(tasks, search, statusFilter) {
    return tasks.filter(
      (task) =>
        statusMatchers[statusFilter](task) && task.title.includes(search),
    );
  }
  // 搜索关键词
  const [search, setSearch] = useState("");

  // 状态筛选：all | done | active
  const [statusFilter, setStatusFilter] = useState("all");

  // 任务列表
  const [tasks, setTasks] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState(null);

  const [reloadTick, setReloadTick] = useState(0);

  useEffect(() => {
    setIsLoading(true);
    setError(null);
    fetchTasks().then((res) => {
      setTasks(res);
      setIsLoading(false);
    }).catch((err) => {
      setError(err);
      setIsLoading(false);
    });
  }, [reloadTick]);

  function onToggle(id) {
    setTasks((tasks) =>
      tasks.map((t) => (t.id === id ? { ...t, done: !t.done } : t)),
    );
  }

  function onAdd(title) {
    setTasks((tasks) => [...tasks, { id: Date.now(), title, done: false }]);
  }

  function onDelete(id) {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  }
  function onRetry() {
    setReloadTick((t) => t + 1);
  }
  return (
    <Routes>
      <Route
        path="/"
        element={
          <TaskListPage
            tasks={getVisibleTasks(tasks, search, statusFilter)}
            emptyText={tasks.length === 0 ? "还没有任务" : "没有符合条件的任务"}
            onToggle={onToggle}
            onDelete={onDelete}
            onAdd={onAdd}
            search={search}
            statusFilter={statusFilter}
            setSearch={setSearch}
            setStatusFilter={setStatusFilter}
            isLoading={isLoading}
            error={error}
            onRetry={onRetry}
          />
        }
      />
      <Route
        path="/tasks/:id"
        element={
          <TaskDetailPage
            tasks={tasks}
            onToggle={onToggle}
            onDelete={onDelete}
            isLoading={isLoading}
            error={error}
            onRetry={onRetry}
          />
        }
      />
    </Routes>
  );
}

export default App;

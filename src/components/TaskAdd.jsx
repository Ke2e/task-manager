import { useState } from "react";

function TaskAdd({ onAdd }) {
  const [input, setInput] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = input.trim();
    if (title === "") {
      setInput("");
      return;
    }
    onAdd(title);
    setInput("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        aria-label="添加新任务"
        type="text"
        placeholder="添加新任务"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">添加</button>
    </form>
  );
}

export default TaskAdd;

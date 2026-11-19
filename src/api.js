export function fetchTasks() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const randomId = Math.floor(Math.random() * 100);
      if (randomId <= 15) {
        reject(new Error("请求失败喽"));
      } else if (randomId <= 25) {
        resolve([]);
      } else{
        resolve([
          { id: 1, title: "读完 React 官方教程", done: true },
          { id: 2, title: "写出任务列表组件", done: false },
          { id: 3, title: "把项目部署到公网", done: false },
          { id: 4, title: "完成项目", done: false },
        ]);
      }
    }, 1500);
  });
}

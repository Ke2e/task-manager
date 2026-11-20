# 任务管理系统

React + Vite 实现的任务管理 SPA：增删改查、搜索、状态筛选、列表/详情路由，以及请求的 loading / error / empty 三态与重试。

数据来自本地 mock 接口，没有后端，刷新页面后改动不保留。

- 线上地址：<https://task-manager-kappa-drab-54.vercel.app>
- 技术栈：React 19 · Vite 8 · React Router 8 · Oxlint · Vitest

## 环境要求

- Node.js 22 及以上
- npm

## 本地运行

```bash
npm install
npm run dev
```

打开终端输出的地址（默认 <http://localhost:5173>）。

## 可用脚本

| 命令 | 作用 |
|------|------|
| `npm run dev` | 启动开发服务器 |
| `npm run build` | 生产构建，输出到 `dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run lint` | 代码检查（oxlint） |
| `npm test` | 跑测试（单次） |
| `npm run test:watch` | 测试监听模式 |

## 目录结构

```
src/
├── App.jsx              # 状态、筛选、CRUD 与路由装配
├── api.js               # mock 接口，模拟网络延迟与三态
├── components/
│   ├── TaskAdd.jsx      # 新增任务
│   ├── TaskList.jsx     # 列表与空态
│   └── TaskStatistics.jsx
└── page/
    ├── TaskListPage.jsx
    └── TaskDetailPage.jsx
```

## 部署

托管在 Vercel。`vercel.json` 配置了 SPA 回退：未匹配的路径回退到 `index.html`，保证直访 `/tasks/:id` 不 404。

## 已知限制

- 数据来自 `src/api.js` 的 mock，刷新即重置
- 接口故意有约 15% 概率失败、10% 概率返回空列表，用于演示三态与重试
- 暂不支持分页
- 暂不支持编辑任务标题，只支持完成态切换

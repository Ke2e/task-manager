import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import TaskList from './components/TaskList.jsx'

// 冒烟测试：只用来确认 jsdom + Testing Library + jest-dom 三者能配合工作
describe('测试工具链', () => {
  it('能渲染组件并断言页面文案', () => {
    render(<TaskList tasks={[]} emptyText="还没有任务" />)

    expect(screen.getByText('还没有任务')).toBeInTheDocument()
  })
})

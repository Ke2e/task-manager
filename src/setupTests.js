import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// 每个测试结束后卸载已渲染的组件，避免测试之间互相污染
afterEach(() => {
  cleanup()
})

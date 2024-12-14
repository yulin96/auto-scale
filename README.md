# auto-scale-box

`auto-scale-box` 是一个用于自动调整元素宽度的工具。它根据设定的最大宽度动态缩放指定的 HTML 元素。

## 介绍

`auto-scale-box` 函数可用于在网页中自动监测和调整指定元素的宽度。当元素的宽度超过设定的最大值时，函数会自动缩放该元素以适应最大宽度。

## 安装

```bash
npm install auto-scale-box
# 或者使用 pnpm
pnpm add auto-scale-box
```

## 使用

```typescript
import autoScale from 'auto-scale-box'

// 使用元素的 id 和最大宽度
autoScale('elementId', 500)

// 或直接传入 HTMLDivElement 元素
const element = document.getElementById('elementId') as HTMLDivElement
autoScale(element, 500)
```

## 参数

- `element` (`HTMLDivElement | string`): 需要自动缩放的元素或元素的 id。
- `maxWidth` (`number`): 元素的最大宽度。

## 工作原理

`autoScale` 函数会在文档加载时初始化，并根据浏览器是否支持 `ResizeObserver` 来选择合适的观察者。当观察到元素宽度超过 `maxWidth` 时，会应用 CSS `transform` 进行缩放。

## 兼容性

- 支持现代浏览器
- 在不支持 `ResizeObserver` 的环境下，会使用 `MutationObserver` 作为替代方案。

## 许可证

MIT

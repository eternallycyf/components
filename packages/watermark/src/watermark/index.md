---
title: Watermark
order: 0
nav:
  title: 基础组件
  order: 4
group: 其他
apiHeader:
  pkg: '@ims-view/watermark'
  docUrl: https://github.com/eternallycyf/components/blob/master/packages/watermark/src/watermark/index.md
  sourceUrl: https://github.com/eternallycyf/components/blob/master/packages/watermark/src/watermark/index.tsx
---

# Watermark

## 介绍

`Clipboard` 组件可以 copy 指定内容到剪贴板。

## 引入

```js
import { Watermark } from '@ims-view/watermark';
```

## 代码演示

<code transform="true" src='./demo/demo1.tsx'></code>

## API

### Props

| 参数         | 说明         | 类型                                                                                                 | 默认值   |
| ------------ | ------------ | ---------------------------------------------------------------------------------------------------- | -------- |
| style        | 自定义样式   | CSSProperties                                                                                        | -        |
| className    | 自定义类名   | string                                                                                               | -        |
| zIndex       | 水印层级     | string \| number                                                                                     | 1000     |
| width        | 水印宽度     | number                                                                                               | 200      |
| height       | 水印高度     | number                                                                                               | 100      |
| rotate       | 水印旋转角度 | number                                                                                               | -30      |
| image        | 水印图片     | string                                                                                               | -        |
| content      | 水印文本     | string \| string[]                                                                                   | -        |
| fontStyle    | 水印文本样式 | { color?: string; fontFamily?: string; fontSize?: number \| string; fontWeight?: number \| string; } | -        |
| gap          | 水印间距     | [number, number]                                                                                     | [20, 20] |
| offset       | 水印偏移量   | [number, number]                                                                                     | [0, 0]   |
| getContainer | 获取容器节点 | () => HTMLElement                                                                                    | -        |
| children     | 子元素       | React.ReactNode                                                                                      | -        |

### 类型定义

组件导出以下类型定义：

```ts
import type { WatermarkProps } from '@ims-view/watermark';
```

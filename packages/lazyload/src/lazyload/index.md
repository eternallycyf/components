---
title: Lazyload
nav:
  title: 基础组件
group: 基础
apiHeader:
  pkg: '@ims-view/lazyload'
  docUrl: https://github.com/eternallycyf/components/blob/master/packages/lazyload/src/lazyload/index.md
  sourceUrl: https://github.com/eternallycyf/components/blob/master/packages/lazyload/src/lazyload/index.tsx
---

# Lazyload

## 介绍

`Lazyload` 组件可以 用于懒加载

## 引入

```js
import { Lazyload } from '@ims-view/lazyload';
```

## 代码演示

<code transform="true" src='./demo/demo1.tsx'></code>

## API

### Props

### LazyloadProps

| 参数             | 说明             | 类型             | 默认值 |
| ---------------- | ---------------- | ---------------- | ------ |
| className        | 自定义类名       | string           | ""     |
| style            | 自定义样式       | CSSProperties    | -      |
| placeholder      | 占位符           | ReactNode        | -      |
| offset           | 偏移量           | string \| number | 0      |
| width            | 宽度             | number \| string | -      |
| height           | 高度             | string \| number | -      |
| onContentVisible | 内容可见时的回调 | () => void       | -      |
| children         | 子元素           | ReactNode        | -      |

## 类型定义

组件导出以下类型定义：

```ts
import type { LazyloadProps } from '@ims-view/lazyload';
```

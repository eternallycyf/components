---
title: Popover
order: 0
nav:
  title: 基础组件
  order: 4
group: 信息展示
apiHeader:
  pkg: '@ims-view/popover'
  docUrl: https://github.com/eternallycyf/components/blob/master/packages/popover/src/popover/index.md
  sourceUrl: https://github.com/eternallycyf/components/blob/master/packages/popover/src/popover/index.tsx
---

# Popover

## 介绍

当目标元素有进一步的描述和相关操作时，可以收纳到卡片中，根据用户的操作行为进行展现。

和 `Popover` 的区别是，用户可以对浮层上的元素进行操作，因此它可以承载更复杂的内容，比如链接或按钮等

## 引入

```js
import { Popover } from '@ims-view/popover';
```

## 代码演示

<code transform="true" src='./demo/demo1.tsx'></code>

## API

### Props

### PopoverProps

| 参数         | 说明               | 类型                     | 默认值  |
| ------------ | ------------------ | ------------------------ | ------- |
| content      | 弹出内容           | ReactNode                | -       |
| trigger      | 触发方式           | 'hover' \| 'click'       | 'hover' |
| placement    | 弹出位置           | Side \| AlignedPlacement | 'top'   |
| open         | 是否显示弹出层     | boolean                  | false   |
| onOpenChange | 显示状态改变时触发 | (open: boolean) => void  | -       |
| className    | 自定义类名         | string                   | -       |
| style        | 自定义样式         | CSSProperties            | -       |

### Alignment

```ts
type Alignment = 'start' | 'end';
```

### Side

```ts
type Side = 'top' | 'right' | 'bottom' | 'left';
```

### AlignedPlacement

```ts
type AlignedPlacement = `${Side}-${Alignment}`;
```

## 类型定义

组件导出以下类型定义：

```ts
import type { PopoverProps } from '@ims-view/popover';
```

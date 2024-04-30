---
title: Message
order: 0
nav:
  title: 基础组件
  order: 4
group: 信息展示
apiHeader:
  pkg: '@ims-view/message'
  docUrl: https://github.com/eternallycyf/components/blob/master/packages/message/src/message/index.md
  sourceUrl: https://github.com/eternallycyf/components/blob/master/packages/message/src/message/index.tsx
---

# Message

## 介绍

`Message` 组件可以 用于全局提示。

## 引入

```js
import { Message } from '@ims-view/message';
```

## 代码演示

<code transform="true" src='./demo/demo1.tsx'></code>

## API

### Props

### MessageProps

| 参数      | 说明                | 类型                     | 默认值 |
| --------- | ------------------- | ------------------------ | ------ |
| style     | 自定义样式          | CSSProperties            | -      |
| className | 自定义类名          | string                   | -      |
| content   | 提示内容            | ReactNode                | -      |
| duration  | 展示时长，单位为 ms | number                   | 3000   |
| onClose   | 关闭时的回调函数    | `(...args: any) => void` | -      |
| id        | 消息的唯一标识      | number                   | -      |
| position  | 消息的位置          | Position                 | 'top'  |

### MessageRef

| 参数     | 说明         | 类型                                               |
| -------- | ------------ | -------------------------------------------------- |
| add      | 添加消息     | `(messageProps: MessageProps) => number`           |
| remove   | 移除消息     | `(id: number) => void`                             |
| update   | 更新消息     | `(id: number, messageProps: MessageProps) => void` |
| clearAll | 移除所有消息 | `() => void`                                       |

### ConfigProviderProps

| 参数       | 说明       | 类型                    | 默认值 |
| ---------- | ---------- | ----------------------- | ------ |
| messageRef | 消息的引用 | `RefObject<MessageRef>` | -      |

### Position

```ts
export type Position = 'top' | 'bottom';
```

## 类型定义

组件导出以下类型定义：

```ts
import type { MessageProps } from '@ims-view/message';
```

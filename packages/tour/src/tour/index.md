---
title: Tour
order: 0
nav:
  title: 基础组件
  order: 4
group: 信息展示
apiHeader:
  pkg: '@ims-view/tour'
  docUrl: https://github.com/eternallycyf/components/blob/master/packages/tour/src/tour/index.md
  sourceUrl: https://github.com/eternallycyf/components/blob/master/packages/tour/src/tour/index.tsx
---

# Tour

## 介绍

引导用户了解页面功能的操作流程。

## 引入

```js
import { Tour } from '@ims-view/tour';
```

## 代码演示

<code transform="true" src='./demo/demo1.tsx'></code>

## API

### TourProps

| 参数         | 说明             | 类型              | 默认值              |
| ------------ | ---------------- | ----------------- | ------------------- |
| open         | 是否开启引导     | boolean           | false               |
| step         | 当前步骤         | number            | 0                   |
| steps        | 引导步骤配置     | TourConfig[]      | []                  |
| getContainer | 指定渲染的父节点 | () => HTMLElement | () => document.body |
| onStepsEnd   | 引导结束回调     | () => void        | -                   |

### TourConfig

| 参数          | 说明           | 类型                                     | 默认值 |
| ------------- | -------------- | ---------------------------------------- | ------ |
| selector      | 引导元素选择器 | () => HTMLElement                        | -      |
| placement     | 引导提示位置   | TooltipPlacement                         | top    |
| renderContent | 引导提示内容   | (currentStep: number) => React.ReactNode | -      |
| beforeForward | 下一步回调     | (currentStep: number) => void            | -      |
| beforeBack    | 上一步回调     | (currentStep: number) => void            | -      |

### MaskProps

| 参数              | 说明         | 类型                                          | 默认值 |
| ----------------- | ------------ | --------------------------------------------- | ------ |
| element           | 遮罩元素     | HTMLElement                                   | -      |
| container         | 遮罩容器     | HTMLElement                                   | -      |
| renderMaskContent | 遮罩内容     | (wrapper: React.ReactNode) => React.ReactNode | -      |
| onAnimationStart  | 动画开始回调 | () => void                                    | -      |
| onAnimationEnd    | 动画结束回调 | () => void                                    | -      |

## 类型定义

组件导出以下类型定义：

```ts
import type { TourProps, TourConfig, MaskProps } from '@ims-view/tour';
```

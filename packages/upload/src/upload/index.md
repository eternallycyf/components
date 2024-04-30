---
title: Upload
order: 0
nav:
  title: 基础组件
  order: 4
group: 基础
apiHeader:
  pkg: '@ims-view/upload'
  docUrl: https://github.com/eternallycyf/components/blob/master/packages/upload/src/upload/index.md
  sourceUrl: https://github.com/eternallycyf/components/blob/master/packages/upload/src/upload/index.tsx
---

# Upload

## 介绍

`Upload` 组件可以上传 拖拽文件

## 引入

```js
import { Upload } from '@ims-view/upload';
```

## 代码演示

<code transform="true" src='./demo/demo1.tsx'></code>

## API

### 类型定义

组件导出以下类型定义：

```ts
import type { UploadProps, DraggerProps, UploadFile, UploadListProps } from '@ims-view/upload';
```

### UploadProps

| 参数            | 说明                     | 类型                                       | 默认值   |
| --------------- | ------------------------ | ------------------------------------------ | -------- |
|                 |                          |                                            |          |
| headers         | 设置上传的请求头部       | `Record<string, any>`                      | -        |
| name            | 上传的文件字段名         | `string`                                   | `'file'` |
| data            | 上传的额外数据           | `Record<string, any>`                      | -        |
| withCredentials | 支持发送 cookie 凭证信息 | `boolean`                                  | `false`  |
| accept          | 接受上传的文件类型       | `string`                                   | -        |
| multiple        | 是否支持多选文件上传     | `boolean`                                  | `false`  |
| beforeUpload    | 上传文件之前的钩子       | `(file: File) => boolean \| Promise<File>` | -        |
| onProgress      | 上传进度变化的钩子       | `(percentage: number, file: File) => void` | -        |
| onSuccess       | 上传成功的钩子           | `(data: any, file: File) => void`          | -        |
| onError         | 上传失败的钩子           | `(err: any, file: File) => void`           | -        |
| onChange        | 文件状态改变的钩子       | `(file: File) => void`                     | -        |
| onRemove        | 文件移除的钩子           | `(file: UploadFile) => void`               | -        |
| drag            | 是否启用拖拽上传         | `boolean`                                  | `false`  |

### DraggerProps

| 参数     | 说明           | 类型                        | 默认值 |
| -------- | -------------- | --------------------------- | ------ |
| onFile   | 上传文件的回调 | `(files: FileList) => void` | -      |
| children | 上传区域的内容 | `ReactNode`                 | -      |

### UploadFile

| 参数     | 说明           | 类型                                             | 默认值 |
| -------- | -------------- | ------------------------------------------------ | ------ |
| uid      | 文件唯一标识   | `string`                                         | -      |
| size     | 文件大小       | `number`                                         | -      |
| name     | 文件名         | `string`                                         | -      |
| status   | 文件状态       | `'ready' \| 'uploading' \| 'success' \| 'error'` | -      |
| percent  | 上传进度       | `number`                                         | -      |
| raw      | 原始文件对象   | `File`                                           | -      |
| response | 上传成功的响应 | `any`                                            | -      |
| error    | 上传失败的错误 | `any`                                            | -      |

### UploadListProps

| 参数     | 说明           | 类型                         | 默认值 |
| -------- | -------------- | ---------------------------- | ------ |
| fileList | 文件列表       | `UploadFile[]`               | -      |
| onRemove | 移除文件的回调 | `(file: UploadFile) => void` | -      |

---
title: '“蜂博客”文档格式简介'
category: '实践'
tags:
  - 'Intro'
  - 'LittleBee'
description: '这是一篇"Introduction"文章，介绍“蜂博客”所支持的相关格式。'
---

![markdown](/posts/2/markdown.png)

# Why

为了介绍“蜂博客”内容的网页渲染效果，这篇博文详细列举了“蜂博客”相关语法的写法。

# What

“蜂工地”除了支持`Markdown`语法的渲染以外，还支持`代码高亮`、`数学公式`以及`标题链接`等。本文会介绍以下格式的写法与渲染效果：
- Markdown语法
- 代码高亮
- Bash命令行
- Emoji表情
- 数学公式
- 图片
- 标题链接

# How

## Markdown语法

### 引用

- 写法

```
> 这是一句引用。
```

- 渲染效果<br>
> 这是一句引用。

### 文本格式

- 写法

```
*斜体*，**加粗**，***加粗并斜体***
```

- 渲染效果<br>
*斜体*，**加粗**，***加粗并斜体***

### 表格

- 写法

```
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
```

- 渲染效果

| Tables   |      Are      |   Cool |
| -------- | :-----------: | -----: |
| col 1 is | left-aligned  | \$1600 |
| col 2 is |   centered    |   \$12 |
| col 3 is | right-aligned |    \$1 |

## 代码高亮

### C++代码

- 渲染效果

```cpp
// cpp
void main() {
    std::cout << "Hello" << std::endl;
    return;
}
```

### Javascript代码

- 渲染效果

```js
// js
console.log('Hello');
```

### Python代码

- 渲染效果

```python
# python
print('Hello')
```

## Bash命令行

- 写法<br>
和代码高亮写法一样，只是代码类型写成`bash`。下面是`ls`命令的渲染效果。

- 渲染效果

```bash
ls
```

## Emoji表情

- 写法<br>
直接从其他地方复制`Emoji`内容到博客即可。

- 渲染效果<br>
😀 😁 😂 🤣 😃 😄

## 数学公式

- 写法

```
$a^2 + b^2 = c^2$
```

- 渲染效果<br>
$a^2 + b^2 = c^2$

## 图片

- 写法

```
![image](/posts/2/image-sample.jpg)
```

- 渲染效果

![image](/posts/2/image-sample.jpg)

## 标题链接

- 写法：普通`Markdown`标题写法

```
# 标题1
## 标题2
### 标题3
#### 标题4
```

- 渲染效果：可点击以下标题直接定位<br>
# 标题1
## 标题2
### 标题3
#### 标题4

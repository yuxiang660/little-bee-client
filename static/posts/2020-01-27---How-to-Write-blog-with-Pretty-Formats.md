---
title: "How to write a blog with pretty formats"
category: "Practice"
tags:
  - "Blog"
description: "This doc will show different format of a blog in little bee playground."
---

# Why
For this doc, it's going to solve the problem:
- How to write a blog with pretty formats?

# What
The blog in little be playground supports following formats:
- Basic markdown syntax
- Code highlighting
- Shell prompt
- Emoji
- Math equation
- Image reshape
- Auto link headers

# How
## Basic markdown syntax
### Quote
* text
```
> This is a quote.
```
* render<br>
> This is a quote.

### Test format
* text
```
*Italic*, **Bold**, ***Bold and Italic***
```
* render<br>
*Italic*, **Bold**, ***Bold and Italic***

### Table
* text
```
| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |
```
* render

| Tables   |      Are      |  Cool |
|----------|:-------------:|------:|
| col 1 is |  left-aligned | $1600 |
| col 2 is |    centered   |   $12 |
| col 3 is | right-aligned |    $1 |

## Code highlighting
## cpp
```cpp
// C++ Header
void main() {
    std::cout << "Hello" << std::endl;
    return;
}
```

## javascript
```js
console.log('Hello');
```

## python
```python
print('Hello')
```

## Shell prompt
* render

```bash
ls
```

## Emoji
😀 😁 😂 🤣 😃 😄

## Math equation
* text
```
$a^2 + b^2 = c^2$
```
* render

$a^2 + b^2 = c^2$

## Image reshape
* text
```
![image-1](/images/image-1.jpg)
```
* render

![image-1](/images/image-1.jpg)
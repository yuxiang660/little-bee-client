---
title: "How to Write A Blog"
category: "Practice"
tags:
  - "Blog"
  - "Intro"
description: "This is a template for writing a blog in little bee playground."
---

# Why
This is the first section of a blog: **Why**.
  * Why to write the blog?

For this doc, it's going to solve the problem:
  - How to write a blog in the little bee playground?

# What
This is the second section of a blog: **What**.
  - What's the solution?

A blog in little bee playground should follows following rules:
  - a blog should fill in basic contents with horizontal rule at the top.
  - a blog should focus on solving a problem with three section: `why? What? How?`.

# How
This is the second section of a blog: **How**.
  - How to implement the solution?

## Horizontal Rule
Every blog should fill in `title`, `description` and so on with horizontal rule at the top.
Here is an example:
```
---
title: "This is the blog title"
category: "category string"
tags:
  - "tag1"
  - "tag2"
description: "description..."
---
```
  - `category` vs `tags`
    - one blog only have one `category`, but several `tags`.
    - little bee playground can group blogs with same `category` or same `tag` to users.
    - `category` is shown at the main page to users along with `title` and `description`, but `tags` can only bee seen inside the blog.
  - `title` and `description`
    - they are shown at the main page as the index for blogs.
    - it will be empty if a blog doesn't have `title` and `description`.

## Three Section
Every blog in little bee playground should focus on solving a problem. And it should have three sections:
  - Why 
    - Why to write the blog? What's the problem?
  - What
    - What's the solution in the blog?
  - How
    - How to implement the solution?

---
title: Hexo NexT 添加霞鹜文楷字体
categories:
  - 个人博客
tags:
  - Hexo
  - Next
description: 为hexo博客添加霞鹜文楷字体
date: 2025-03-20 15:56:22
---
在hexo根目录创建：`source/_data/head.njk`
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/lxgw-wenkai-webfont@1.6.0/style.css" />
```

修改next主题文件夹下的 `_config.next.yml`
```bash
custom_file_path:
  head: source/_data/head.njk

font:
  enable: true

  # Uri of fonts host, e.g. https://fonts.googleapis.com (Default).
  host: https://fonts.googleapis.com

  # Font options:
  # `external: true` will load this font family from `host` above.
  # `family: Times New Roman`. Without any quotes.
  # `size: x.x`. Use `em` as unit. Default: 1 (16px)

  # Global font settings used for all elements inside <body>.
  global:
    external: false
    family: "LXGW WenKai"
    size:

  # Font settings for site title (.site-title).
  title:
    external: true
    family:
    size:

  # Font settings for headlines (<h1> to <h6>).
  headings:
    external: true
    family:
    size:

  # Font settings for posts (.post-body).
  posts:
    external: true
    family:

  # Font settings for <code> and code blocks.
  codes:
    external: false
    family: "LXGW WenKai Mono, Source Code Pro"
```
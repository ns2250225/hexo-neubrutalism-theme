---
title: hexo访问速度优化方案
categories:
  - 个人博客
tags:
  - Next
  - Hexo
description: hexo访问速度优化方案
date: 2025-04-24 13:57:10
---

> 主要通过压缩静态资源和图片懒加载来提高访问速度

# 压缩静态资源

1. 安装插件
```
npm install hexo-neat --save
```

2. 配置插件(打开博客根目录文件_config.yml，添加以下配置)
```
# hexo-neat 压缩
neat_enable: true

# 压缩html
neat_html:
  enable: true
  exclude:
# 压缩css  
neat_css:
  enable: true
  exclude:
    - '**/*.min.css'
# 压缩js
neat_js:
  enable: true
  mangle: true
  output:
  compress:
  exclude:
    - '**/*.min.js'
    - '**/jquery.fancybox.pack.js'
    - '**/index.js'

```

# 懒加载图片

1. 安装插件
```
npm install hexo-lazyload-image --save
```

2. 配置插件(打开博客根目录文件_config.yml，添加以下配置)
```
# 图片懒加载
lazyload:
  enable: true 
  onlypost: false
  loadingImg: /images/loading.gif #如果不填写图片则使用默认的图片
```
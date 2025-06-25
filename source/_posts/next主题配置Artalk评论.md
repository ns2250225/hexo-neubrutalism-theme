---
title: next主题配置Artalk评论
categories:
  - 个人博客
tags:
  - Hexo
  - Next
description: 为hexo博客添加Artalk评论功能
date: 2025-03-22 19:03:28
---
# 机器环境
- Centos7

# 安装docker
```bash
yum install docker-ce
```

# 安装Artalk
```bash
# 有域名的话，URL就配置域名，我这里填服务器ip
docker run -d \
    --name artalk \
    -p 8080:23366 \
    -v $(pwd)/data:/data \
    -e "TZ=Asia/Shanghai" \
    -e "ATK_LOCALE=zh-CN" \
    -e "ATK_SITE_DEFAULT=Layman 的博客" \
    -e "ATK_SITE_URL=http://101.33.255.17" \
    artalk/artalk-go
```

# 安装next插件（这个插件只适用于用npm安装的next主题，git安装不行的）
```bash
# 切换到hexo根目录
npm install hexo-next-artalk
```

# 配置hexo配置文件
```bash
# _config.yml
# 添加以下内容
artalk:
  enable: true
  # 服务器上docker服务的地址
  server: http://101.33.255.17:8080
  # 服务器上docker命令的site名字
  site: Layman 的博客
  # 改成自己的服务器地址
  jsUrl: http://101.33.255.17:8080/dist/Artalk.js
  cssUrl: http://101.33.255.17:8080/dist/Artalk.css
  # Page views count
  pvCount: false
  # Comments count
  commentCount: true
  # Dark mode
  darkMode: auto
  # Use backend to config
  ## Reference: https://artalk.js.org/guide/backend/fe-control.html
  useBackendConf: true
```
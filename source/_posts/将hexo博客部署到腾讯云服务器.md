---
title: 将hexo博客部署到腾讯云服务器
categories:
  - 个人博客
tags:
  - Hexo
  - Next
description: 将本地部署的hexo博客部署到腾讯云服务器
date: 2025-03-20 15:27:07
---
# 机器环境
- 系统：CentOS 7.6
- 2h2g

# 安装git
```bash
yun install git -y
```

# 创建git仓库
```bash
mkdir /root/blog
cd /root/blog
git init --bare hexoBlog.git
```

# 设置git hook文件
```bash
vim /root/blog/hexoBlog.git/hooks/post-receive

# 输入以下内容
#!/bin/bash
git --work-tree=/root/hexoBlog --git-dir=/root/blog/hexoBlog.git checkout -f

# 保存退出
chmod +x /root/blog/hexoBlog.git/hooks/post-receive
```

# 安装nginx
```bash
yum install nginx -y
```

# 创建nginx接管的网站目录
```bash
mkdir /root/hexoBlog
```

# 配置nginx
```bash
vim /etc/nginx/nginx.conf

# 修改以下内容
user root; #需要修改
server {
	listen 80 default_server;
	listen [::]:80 default_server;

	root /root/hexoBlog; #需要修改
	server_name www.bujige.net; #需要修改
	
	# Load configuration files for the default server block.
	include /etc/nginx/default.d/*.conf;
	
	location / {
	}
	error_page 404 /404.html;
	location = /40x.html {
	}
}

# 保存退出
service nginx restart
```

# 配置hexo项目
```bash
# 切换到hexo项目根目录
npm install hexo-deployer-git --save

# 修改_config.yml
deploy:
	type: git
	repo: root@你的云服务器的IP地址:/root/blog/hexoBlog
	branch: master
```

# 开始部署
```bash
hexo clean
hexo generate
hexo deploy
# 中途会提示输入服务器密码，输入就行
```

# 我的博客地址
- http://layman.xin/
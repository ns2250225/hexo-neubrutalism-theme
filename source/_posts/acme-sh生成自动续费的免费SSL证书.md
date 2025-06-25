---
title: acme.sh生成自动续费的免费SSL证书
categories:
  - 个人博客
tags:
  - Linux
  - https
description: acme.sh生成自动续费的免费SSL证书
date: 2025-04-24 13:27:24
---
# 机器环境
- CentOS 7.6
- 域名：`layman.xin`

# 安装acme.sh
```bash
git clone https://gitee.com/neilpang/acme.sh.git
cd acme.sh
./acme.sh --install -m 243027571@qq.com

重启终端
```

# 生成证书
```bash
# webroot是存放网站根目录的目录
acme.sh  --issue  -d layman.xin --webroot  /root/hexoBlog/
```

# 安装证书
```bash
mkdir -p /usr/local/nginx/cert/

acme.sh --install-cert -d layman.xin \
--key-file       /usr/local/nginx/cert/domain.key  \
--fullchain-file /usr/local/nginx/cert/domain.pem \
--reloadcmd     "service nginx force-reload"
```

# 配置nginx
```bash
server {
    listen  80;
    server_name     layman.xin;
    return  301 https://$server_name$request_uri;
}
server {
    listen               443 ssl;
    server_name          layman.xin;
    ssl_certificate      /usr/local/nginx/cert/domain.pem;
    ssl_certificate_key  /usr/local/nginx/cert/domain.key;

    location / {
        root /root/hexoBlog;
        index index.html;
    }
}

# 配置完重启nginx
systemctl restart nginx
```
---
title: 搭建在线匿名语音聊天应用mornin.fm
categories:
  - 音视频
tags:
  - webrtc
description: 搭建在线匿名语音聊天应用mornin.fm服务
date: 2025-03-24 09:32:09
---
# 项目架构
- 前端（mornin.fm）：https://github.com/lyricat/mornin.fm
- 后端（kraken）：https://github.com/MixinNetwork/kraken
- turn服务：coturn（可选，部署了服务更稳定一些）: https://github.com/coturn/coturn
- 所有服务到生产环境都有配置https（本地可以用localhost测试）

# 搭建后端服务
```bash
git clone https://github.com/MixinNetwork/kraken
cd kraken && go build

cp config/engine.example.toml config/engine.toml
-------------------------------------------------
[engine]
# the network interface to bind
interface = "eth0"
# the IP address to bind, empty allows the engine to get it from interface
address = "192.168.40.41"
log-level = 10
# the UDP port range, leave them to 0 for default strategy
port-min = 0
port-max = 0

[turn]
host = "turn:turn.kraken.fm:443"
# must be identical to coturn static auth secret
secret = "812ecb0604d9b90c4aa43a0e3fd1ba85"

[rpc]
port = 7000
-------------------------------------------------


./kraken -c config/engine.toml 
```

# 搭建前端项目
```bash
git clone https://github.com/lyricat/mornin.fm

yarn install

# 修改配置文件，指定后端服务地址
# nuxt.config.ts
-------------------------------------------------
env: {
    TOKEN: process.env.TOKEN || '',
    API_BASE: process.env.API_BASE || 'http://192.168.40.41:7000',
    APP_ENV: process.env.APP_ENV || ''
}
-------------------------------------------------

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```


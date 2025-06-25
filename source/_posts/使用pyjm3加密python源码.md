---
title: 使用pyjm3加密python源码
categories:
  - python
tags:
  - 加密
description: 使用pyjm3加密python源码
date: 2025-03-24 18:58:07
---
# 机器环境
- windows（.pyd）
- linux（.so）
- python版本 <= 3.9

# 1. 安装pyjm3
```python
pip install pyjm3
```

# 2. 加密源码
```python
# test.py
def say_hello():
    print("hello world")

# 加密源码(pyd或so文件生成在dist目录下)
jmpy -i test.py
```

# 3. 调用加密文件
```python
from dist.test import say_hello
say_hello()
# hello world
```
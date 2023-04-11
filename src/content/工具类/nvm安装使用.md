---
slug: "use-nvm-windows"
date: "2022-11-24"
title: "windows上nvm的安装使用"
type: "工具类"
---

## 安装nvm

https://nvm.uihtm.com/download.html

## npm安装pnpm

```
npm install -g pnpm
```

## PNPM命令行无法找到解决方法：

1. 找到pnpm的安装路径

```
D:\Program Files\npm_global
```

这里我使用了如下命令修改了npm的位置
```
npm config set prefix "D:\Program Files\npm_global"
npm config set cache "D:\Program Files\npm_cache"
```

2. 复制路径到PATH环境变量中，重新打开命令框即可使用。
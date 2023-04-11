---
slug: "reset-squash"
date: "2022-11-24"
title: "git常用命令"
type: "git"
---

# 创建本地分支

在本地创建分支dev并切换到该分支

```
git checkout -b dev(本地分支名称) origin/dev(远程分支名称)
```

# reset

将暂存区的commit释放

```
git reset commitHash
```

将暂存区的内容恢复到commitHash对应的位置

---

### 反悔merge

reset 到 merge 前的版本

```jsx
git reset --hard
```

# squash

<aside>
💡 merge的时候将commit信息合并为一条

</aside>

```
$ git merge --squash anotherbranch

$ git commit -m "message here"
```
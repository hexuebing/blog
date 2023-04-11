---
slug: "my-first-blog-post"
date: "2022-11-24"
title: "删除分支"
type: "git"
---

## 本地分支：

merge了的分支

```shell
git branch -d branch_name
```

不管它有没有merge

```
git branch -D branch_name
```

## 远程分支:

```
git push --delete origin branch_name
// 或者
git push origin :branch_name
```
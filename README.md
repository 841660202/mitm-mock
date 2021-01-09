## 名字来源
  `mitm-mock`（全称: Man-in-the-Middle-mock，源自 中间人攻击  `Man-in-the-MiddleAttack`，简称“MITM 攻击”，作为中间人，我们不仅可以攻击还可以 mock,最点正事，所以 Man-in-the-Middle-mock 名字就来了）
## 说明

-   此项目是为了 mock 数据更新使用的

## 场景（痛点）

-   假设你在前端项目中使用了 `mock.js` 或者其他模拟数据，联调前的工作，为你的前端开发提供数据支持
-   联调过程中，后端接口数据调整，页面也做相应的调整，这时候模拟数据已经不适用联调后的页面了（问题出现）
-   模拟数据更不更新就是一个问题，
    -   如果不更新，下次自己开发怎么办？
    -   对于不写模拟数据就开发页面的同事，你替 Ta 维护模拟数据？
    -   如果要你维护 Ta 的模块或者是代码，需要用到模拟数据，如何处理？

## 或许之前你可以这么解决

-   以上痛点出现了，必然就需要解决
-   假设手动拷贝，
    -   自己开发的模块，自己知晓的清楚，工作量自己可以接受
    -   同事一个模拟数据没写，连个文件都没有，这你也能忍？还是选择默默忍受？
    -   平时项目紧，模拟数据随便找个文件塞进去，妥妥的，毫不影响开发，下次要使用模拟数据，一脸懵逼，我放哪了？我要搜搜，搜搜我就知道在哪了，前端工程那么大，搜也慢，不我要换电脑，刻丝，扒皮们不提供经费，理想永远都是好的，现实总让我们伤痕累累。

## 现在完全自动化

-   只需要将前端项目代理到本项目
-   本项目转发所有请求到真正联调后的服务器
-   启动前端页面进行操作，次工程将自动为你生成 mock 数据
-   此产生的数据可以直接替换掉你原有前端项目的模拟数据
-   如果你懒到无可救药，或许你可以直接拷贝 mock 数据到你现有的 mock 目录，直接写的 mock 数据与事后更新的 mock 数据接口重复了，那么你或许就获取不到最新的 mock 数据了
-   当然你也可以使用 `git diff` 选择性替换

## feature

-   此项目可以配置 `useToken`
-   此项目可以配置 `useMapCache`
-   此项目 mock 可以与前端项目 mock 进行自动化 diff
-   此项目 mock 编辑后，可以自动重启动服务 （目前你可以选择 `nodemon` 启动）
-   此项目将作为 vscode 的一个插件形式存在
## 过程（这或许与你无关）
```
npx typescript --init
tsc --init
```

```
cnpm i morgan @types/morgan -D
npm i typescript ts-node-dev morgan @types/morgan rimraf -D

```

```
cnpm install -g commitizen
```

```
echo "# mitm-mock" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:841660202/mitm-mock.git
git push -u origin main

```
## git cz

```sh
cnpm install -g commitizen
npm init --yes

git cz

cnpm install -g conventional-changelog conventional-changelog-cli
# 将 cz-conventional-changelog 增加到命令
echo '{ "path": "cz-conventional-changelog" }' > ~/.czrc
# npm script 命令
"changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"



# https://www.cnblogs.com/zivxiaowei/p/10089201.html
```

### 这个参考或许可以用拿到启动多个控制台执行脚本
```
#!/bin/bash
# 先切换当前终端的目录
cd /etc/redis-6.0.9/src

# 启动另一终端，并切换目录
gnome-terminal --window -x bash -c "cd /etc/redis-6.0.9/src;exec bash"


```
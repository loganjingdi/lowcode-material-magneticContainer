# README

此项目是有基于阿里的文章 https://developer.aliyun.com/article/883433

实现的一个小demo，算是一个比较简单的东西，没有做很多优化。

现在项目有的一点小问题：

> 磁吸布局是在iframe中实现的，与纯的react-grid-layout相比，有点点卡

不过看到最近阿里的项目中有G6项目的开源，把 `iframe` 去掉了，不仅惊叹，还能这么玩，后面再持续优化吧。

## 体验

- 安装依赖，运行 `lowcode:dev`
- 在 3333 端口查看项目
- 拖入磁吸布局（默认会占满屏幕）
- 拖入组件1、组件2等即可实现效果

> 对于项目有任何改进想法的，可以私聊我： https://juejin.cn/user/699702857702583 。我是 叫我靖迪，哈哈哈哈

## 开发常用命令

- `cnpm start` 运行所有组件的开发调试环境
- `cnpm start page-header` 运行单个组件的开发调试环境
- `cnpm run lowcode:dev` 启动低代码开发调试环境
- `cnpm run lowcode:build` 构建低代码产物
- `cnpm run build` 打包生成 lib/ es/ dist/ build/文件
- `cnpm run materials` 生成物料中心需要的入库 JSON 文件
- `cnpm run lint` 进行代码检查

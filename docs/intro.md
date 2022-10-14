---
title: 快速入门
description: 介绍如何快速开始安装LDS的各个库
---

# 快速入门

LDS的所有组件库全部可以通过NPM或Yarn进行安装。在命令行终端运行：

安装全局CLI
```javascript
  /* 全局安装CLI */
  $ npm install -g @itsi/cli
```
安装Design Tokens，CSS Framework, Icons, Fonts
```javascript
  /* 安装Design Tokens，CSS Framework, Icons, Fonts */
  $ npm install @itsi/tokens
  $ npm install @itsi/css
  $ npm install @itsi/icons
  $ npm install @itsi/fonts
```
安装元组件库，MIS组件库，GIS组件库
```javascript
  /*  安装元组件库，MIS组件库，GIS组件库 */
  $ npm install @itsi/base-components
  $ npm install @itsi/mis-components
  $ npm install @itsi/gis-components
```

LDS组件库兼容流行的各种前端开发框架，比如： Vue，React，Angular

- Vue.js：2 -3 版本使用@itsi/base-components，@itsi/mis-components，@itsi/gis-components
- React.js：16.7.0及以上版本使用 @itsi/react NPM包
```javascript
  /* React 框架集成 */
  $ npm install @itsi/react
```
- Angular.js：7.2.1 - 13版本使用 @itsi/angular NPM包
```javascript
  /*  Angular 框架集成 */
  $ npm install @itsi/angular
```
<hr />

# 加入LDS社区

在使用LDS过程中，如果遇到问题可以实时与我们在社区网站进行沟通。
可以提交PR到我们的Github仓库，也欢迎有兴趣的开源爱好者参照Github仓库中的Contributing规范贡献代码
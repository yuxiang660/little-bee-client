---
title: '“蜂监工”简介'
category: '实践'
tags:
  - 'Intro'
  - 'LittleBee'
  - 'AntDesignPro'
  - 'React'
  - 'Redux'
description: '这是一篇"Introduction"文章，介绍“蜂监工”项目。'
---

![Little-Bee](http://q53wkmg88.bkt.clouddn.com/admin_and_antd.png)

# Why

为了让大家了解“蜂监工”项目，这篇博文详细介绍了“蜂监工”项目的工作原理。

## “蜂监工”的目的什么？

“蜂监工”是[“蜂乐园”平台](/pages/2/about/)后台客户端，用于监管“蜂乐园”平台，包括，查看“蜂乐园”服务器状态，管理“蜂乐园”用户、数据等。

## “蜂监工”为什么选择"Ant Design Pro"框架？

“蜂监工”的目的是为了管理“蜂乐园”平台，那么对它至少有两个要求：
- 拥有用户友好的界面，便于用户进行管理
- 支持`REST API`操作，可以和服务器通信

### "react-admin"和"Ant Design Pro"对比

在`React`社区中，["react-admin"](https://github.com/marmelab/react-admin)和["Ant Design Pro"](https://pro.ant.design/docs/getting-started-cn)是比较成熟的后台管理框架。它们都不仅集成了成熟的UI框架，还封装了`react-router`，`react-redux`等通用模块。

#### UI风格

"react-admin"用的是["Material-UI"](https://material-ui.com/zh/)UI框架，而"Ant Design Pro"用的是["Ant Design"](https://ant.design/index-cn)UI框架。对UI风格在这里不予置评，下面列出了两种UI框架的`Button`组件，大家可根据个人喜好进行选择：
- ["Material-UI Button组件"](https://material-ui.com/zh/components/buttons/)
- ["Ant Design Button组件"](https://ant.design/components/button-cn/)

#### 与服务器交互方式

- "react-admin"的["Data Provider"](https://marmelab.com/react-admin/DataProviders.html)
"react-admin"通过`Data Provider`与服务器交互，官方提供通用的`Data Provider`，但如果您的需求比较复杂，就需要自行编写`Data Provider`。
![DataProvider](http://q53wkmg88.bkt.clouddn.com/react-admin.png)

- "Ant Design Pro"的["UmiJS-request"](https://github.com/umijs/umi-request)
"Ant Design Pro"采用了[`UmiJS`](https://umijs.org/zh/guide/)的"UmiJS-request"库，作为与服务器交互手段。是一种比较通用的做法，而且并没有强制用户必须使用"UmiJS-request"。用户也可以用自己喜欢的其他库，如`react-axios`等。

#### 个人喜好

个人感觉，"react-admin"封装地相对彻底，`Data Provider`屏蔽了大部分细节，如果通用的`Data Provider`可以满足用户需求，上手会非常快。而"Ant Design Pro"并不直接封装`react-router`或`react-redux`等模块，而是直接利用其他框架，如：["UmiJS"](https://umijs.org/zh/guide/)和["DvaJS"](https://dvajs.com/guide/)等。因此，用户在使用"Ant Design Pro"时，还需对其他框架有所了解。如果您对"Ant Design Pro"有进一步的兴趣，可以参考"蜂博客"[什么是"Ant Design Pro"]()。

> 封装和灵活度是硬币的两面。

如果封装过度，势必影响使用的灵活性。如果封装过于简单，也会暴露过多细节给用户，给二次开发造成沉重的负担。一个好的框架，应该是开放而友好的。轻度用户可以快速上手，重度用户也有办法深度开发。在这点上，个人觉得"Ant Design Pro"较"react-admin"更出色。尤其是"Ant Design Pro"可以利用["DvaJS"](https://dvajs.com/guide/)，十分方便地进行`redux`模式开发。如果大家对`redux`模式感兴趣，可以参考“蜂博客”：[什么是"redux"模式]()。

# What

## “蜂监工”是什么项目？

“蜂监工”是“蜂乐园”项目中的基于`Ant Design Pro`框架，支持`REST`风格的后台客户端，是“蜂乐园”的协调者，用于管理“蜂乐园”用户、数据等。之所以叫“蜂监工”，是因为它负责监管整各“蜂乐园”平台。当前“蜂监工”已经完成了框架的搭建，如：可以和服务器进行`REST`风格的通讯，实现用户`Token`登录等。但是，具体功能还在开发中，希望以后其可以有更多强大的功能供用户使用。

## “蜂监工”是如何工作的？

- [项目展示](https://github.com/yuxiang660/little-bee-admin)
![Demo](http://q53wkmg88.bkt.clouddn.com/little-bee-admin-demo.gif)

## “蜂监工”是如何实现的？

“蜂监工”是一个基于["Ant Design Pro"](https://pro.ant.design/)框架的后台客户端。下面罗列了部分“蜂监工”涉及的技术。如果您对以项某项内容感兴趣，那么您可以继续往下看。在“How”部分，我们将详细介绍“蜂监工”是如何实现的。
- [`Ant Design Pro`](https://pro.ant.design/)
- [`Ant Design`](https://ant.design/)
- [`UmiJS`](https://umijs.org/)
- [`DvaJS`](https://dvajs.com/)
- [`Redux`](https://react-redux.js.org/)

# How

## “蜂监工”项目结构

* [“蜂监工”](https://github.com/yuxiang660/little-bee-admin)在`GitHub`上的文件组织结构如下：
    “蜂监工”是基于[官方模板](https://pro.ant.design/docs/getting-started-cn#%E5%AE%89%E8%A3%85)创建的，因此基础目录结构可参考[官方说明](https://pro.ant.design/docs/getting-started-cn#%E7%9B%AE%E5%BD%95%E7%BB%93%E6%9E%84)。

```js
.
├── README.md
├── build
|   └── dist                   // 存放Typescript编译输出
├── config                     // 存放用户配置
|   ├── config.ts              // 主配置文件，可定义菜单，路由，布局等
|   ├── defaultSettings.ts     // 默认配置，包括菜单样式，主题颜色等
|   ├── plugin.config.ts       // 项目插件配置
|   └── themePluginConfig.ts   // 可选主题
├── dist                       // 存放项目build输出
├── jest-puppeteer.config.js   // jest配置
├── jest.config.js             // jest配置
├── jsconfig.json              // 对Javascript文件的主配置
├── mock                       // 测试的mock文件
├── package.json               // 项目包管理文件
├── public                     // 静态资源存放目录，如icon，build后会被一起复制到/dist目录
├── src                        // 源文件
|   ├── assets                 // 静态资源存放目录，如logo，build后会被一起复制到/dist/static目录
|   ├── components             // React组件
|   ├── e2e                    // 集成测试用例
|   ├── global.less            // 框架文件，全局样式
|   ├── global.tsx             // 框架文件，和PWA相关
|   ├── layouts                // 通用布局
|   ├── locales                // 国际化资源
|   ├── manifest.json          // 框架文件，和PWA相关
|   ├── models                 // 全局 dva model
|   ├── pages                  // 页面入口，可在/config/config.ts中和路由绑定
|   ├── service-worker.js      // 框架文件
|   ├── services               // 后台接口服务
|   ├── typings.d.ts           // 对某些全局模块进行声明，服务于Typescript
|   └── utils                  // 工具库
├── tests                      // 测试配置脚本
└── tsconfig.json              // 对Typescript文件的主配置
```

## “蜂监工”如何渲染一个静态页面



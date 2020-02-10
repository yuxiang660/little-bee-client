---
title: '“蜂工厂”简介'
category: '实践'
tags:
  - 'Intro'
  - 'LittleBee'
  - 'Gin'
  - 'Go'
description: '这是一篇"Introduction"文章，介绍“蜂工厂”项目。'
---

![Little-Bee](http://q53wkmg88.bkt.clouddn.com/little-bee.jpg)

# Why

为了让大家了解“蜂工厂”项目，这篇博文详细介绍了“蜂工厂”项目的工作原理。

## “蜂工厂”的目的什么？

“蜂工厂”为[“蜂乐园”平台](/pages/2/about/)提供服务，包括：处理并存储“蜂乐园”用户、数据等。

## “蜂工厂”为什么选择"Gin"框架？

回答这个问题前，需先回答：**为什么选择"Go"搭建服务器？**。[`Golang`](https://golang.org/)作为21世纪的语言，自从诞生以来，就争论不断。这里不展开对比讨论，只列举`Golang`的优势：
- 高效，因其可直接编译成机器码，在效率方面可媲美C/C++。
- 动静结合，其是静态类型语言但又有动态语言的感觉。即降低了代码维护的成本，又提供了高效的编程体验。
- 语言层面的并发支持，`goroutine`的天生并发，可以用简洁的代码实现并发编程。

比较流行的，`Go`的HTTP服务框架有：["Beego"](https://beego.me/)和["Gin"](https://gin-gonic.com/docs/)。"Beego"以**全**见长，而"Gin"以**快**见长。

- "Beego"框架除了基础了`HTTP`模块外，还支持`logs`、`orm`等[模块](https://beego.me/docs/intro/#beego-%E7%9A%84%E6%9E%B6%E6%9E%84)。而"Gin"框架只是一个["HTTP"库](https://gin-gonic.com/docs/introduction/)，其他功能需要结合`Go`社区的其他库资源。这也使"Gin"框架的开放性更高，可以利用更多优秀的其他资源，如`orm`就可以采用["GORM"](https://gorm.io/docs/)实现。
- "Gin"框架以性能见长，这是官网的[Benchmarks](https://gin-gonic.com/docs/benchmarks/)，数据还是很可观的。要知道，`Go`的官方`http`库已经很友好了，如果HTTP服务框架拖累了性能，就得不偿失了。

# What

## “蜂工厂”是什么项目？

“蜂工厂”是“蜂乐园”项目中的基于`Gin`框架的`REST`风格服务器，是“蜂乐园”的大脑，用于处理并存储“蜂乐园”用户、数据等。之所以叫“蜂工厂”，是因为它能接收数据，处理并**厂出**新数据。当前“蜂工厂”`REST`风格的框架已经搭建完成，包括：利用中间件进行权限检测，数据库操作等。但是，`REST API`还在开发中，希望以后其可以有更多强大的`API`供用户使用。

## “蜂工厂”是如何工作的？

由于“蜂工厂”是一个后台服务器，并没有友好的`UI`界面，因此这里用`Postman`结合["swagger API 文档"](https://yuxiang660.github.io/little-bee-server/)，以操作`URL: /api/v1/pub/login`做演示。

- [项目展示](https://github.com/yuxiang660/little-bee-server)
![Demo](http://q53wkmg88.bkt.clouddn.com/little-bee-server-demo.gif)

## “蜂工厂”是如何实现的？

“蜂工厂”是一个基于["Gin"](https://gin-gonic.com/)框架的后台服务器。下面罗列了部分“蜂工厂”涉及的技术。如果您对以项某项内容感兴趣，那么您可以继续往下看。在“How”部分，我们将详细介绍“蜂工厂”是如何实现的。
- [`Go`](https://golang.org/)
- [`Gin`](https://gin-gonic.com/)
- [`GORM`](https://gorm.io/)
- [`JWT-GO`](https://github.com/dgrijalva/jwt-go)
- [`GO-Redis`](https://github.com/go-redis/redis)
- [`Go-Dig`](https://github.com/uber-go/dig)
- [`logrus`](https://github.com/sirupsen/logrus)

# How

## “蜂工厂”项目结构

- [“蜂工厂”](https://github.com/yuxiang660/little-bee-server)在`GitHub`上的文件组织遵循[golang-standards/project-layout](https://github.com/golang-standards/project-layout)规则，结构如下：

```go
.
├── Makefile               // 用Makefile管理项目的编译
├── README.md              // 解释文档
├── cmd                    // 程序入口文件夹
|   └── server             // 主程序文件夹
|       └── main.go        // 主程序，每一个Go项目有且只有一个main入口
├── configs                // 用户配置文件夹
|   └── config.toml        // 存储对服务器的所有配置
├── docs                   // 存储服务器的Swagger API文档
├── export                 // 存储服务器输出文件，包括数据信息、log信息等
├── go.mod                 // Go项目包管理文件
├── go.sum                 // Go项目包管理文件
└── internal               // 项目内部源文件(其他项目无法直接调用)
    └── app                // 内部源文件主目录
        ├── app.go         // 内部源文件初始化入口
        ├── auther         // 身份认证模块
        ├── auther.go      // 身份认证模块初始化入口
        ├── config         // 用户配置文件解析模块
        ├── controller     // 控制器模块，用于处理业务逻辑
        ├── controller.go  // 控制器模块初始化入口
        ├── errors         // 服务器错误模块，定义错误信息
        ├── ginhelper      // gin框架utilities
        ├── logger         // 日志模块
        ├── logger.go      // 日志模块初始化入口
        ├── model          // Model模块，提供接口给控制器存储数据
        ├── model.go       // Model模块初始化入口
        ├── routers        // 路由模块
        |   ├── api        // REST API
        |   ├── middleware // 中间件
        |   ├── routers.go // 初始化REST API和中间件
        |   └── swagger.go // API 文档入口
        ├── routers.go     // 路由初始化入口，并开启HTTP服务
        ├── store          // 数据库模块，提供接口给Model模块和数据库打交道
        └── store.go       // 数据模块初始化入口
```

## “蜂工厂”架构

- “蜂工厂”启动和工作流程图
![server](http://q53wkmg88.bkt.clouddn.com/little-bee-server-architecture.png)

- “蜂工厂”模块
    - 日志模块Logger<br>
    日志模块是基于[`logrus`](https://github.com/sirupsen/logrus)库实现的。<br>
    日志模块是一个独立模块，不依赖其他模块，读取用户配置后，即可完成初始化。
    - 数据库模块Store<br>
    数据库模块依赖了多个第三方库，实现对数据库的操作，包括：[`GORM`](https://gorm.io/)，[`GO-Redis`](https://github.com/go-redis/redis)，[buntdb](https://github.com/tidwall/buntdb)等。<br>
    数据库模块是底层模块，用[store接口](https://github.com/yuxiang660/little-bee-server/blob/master/internal/app/store/store.go)隐藏了底层实现。
    - Model模块<br>
    Model模块定义了特定数据类型的特定数据库操作（例如，`User`数据的`Query`操作），是控制器模块和数据库模块的中间层，控制器模块应通过Model模块操作数据，而不应直接操作数据库模块。
    - 控制器模块Controller<br>
    控制器模块用于处理业务逻辑，接收用户的`request`，返回`response`给用户。
    - 身份验证模块Auther<br>
    身份验证模块被中间件调用，进行`JWT`身份验证。由于`JWT`口令需要有销毁记录，以保证口令被销毁后，用户无法通过验证。因此，身份验证模块需要依赖“数据库模块”对数据库进行操作。
    - 中间件模块<br>
    中间件模块实践了日志记录，身份验证，CORS支持，异常恢复等常见功能。

- “蜂工厂”启动流程
    - 根据配置文件，配置日志模块
    - 根据配置文件，利用['Go-Dig'](https://github.com/uber-go/dig)的依赖注入技术初始化各模块
    - 启动HTTP服务，开启HTTP监听

- “蜂工厂”工作流程
    - 用户发起`REST API`请求
    - 通过对`URL`的解析，经过中间件处理，到达指定控制器模块相应API
    - 控制器模块调用Model模块进行数据库操作
    - Model模块操作数据库模块的API实现数据库操作
    - 数据库模块根据指令，读取或写入数据从/到数据库


---
title: '“蜂工地”简介'
category: '实践'
tags:
  - 'Intro'
  - 'LittleBee'
  - 'Gatsby'
  - 'React'
description: '这是一篇"Introduction"文章，介绍“蜂工地”项目。'
---

![Little-Bee](http://q53wkmg88.bkt.clouddn.com/little-bee.jpg)

# Why

为了让大家了解“蜂工地”项目，这篇博文详细介绍了“蜂工地”项目的结构。

## “蜂工地”的目的什么？

“蜂工地”力求用最简洁的形式（如：[“蜂博客”](/posts/1/2020-02-09---How-to-Write-a-Bee-Blog/)），记录和展示大家在开发过程中的感悟和心得。希望可以促进技术的交流和进步。

## “蜂工地”为什么选择"Gatsby"框架？

“蜂工地”主要以博客形式进行展示。当下比较流行的博客搭建框架有：[Hexo](https://hexo.io/zh-cn/docs/)，[Jekyll](https://jekyllrb.com/)，[Hugo](https://gohugo.io/documentation/)以及["Gatsby"](https://www.gatsbyjs.org/)。每种框架都有各自的优缺点，这里只说我们为什么选择`Gatsby`。如果您对其他框架的特点也感兴趣，可以参考这篇[文章](https://dzone.com/articles/static-site-generators-overview-gatsby-vs-hugo-vs)。

`Gatsby`主要特点如下：
- 依托于`React`，可以共享大量`React`社区资源
- 官方文档对初学者友好
- 利用[GraghQL](https://graphql.org/)检索数据，因此可以方便地实现其他框架难以实现的功能
- 框架开放性程度高，支持插件开发
- 社区比较活跃，还处于向上发展的阶段

# What

## “蜂工地”是什么项目？

“蜂工地”是“蜂乐园”项目中的基于`Gatsby`框架的子项目，是“蜂乐园”的入口，用于向用户展示整个“蜂乐园”项目。之所以叫“蜂工地”，是因为它还处于建设阶段。当前主要以“蜂博客”的形式，用图片和文字记录和展示开发过程中的感悟和心得。希望以后可以有更多、更有趣的形式加入进来。

## `Gatsby`是如何工作的？

`Gatsby`涉及的技术比较多，简单地说它是一个静态网页生成器，可以读取`Markdown`文件并在网页中渲染出来。因此十分适合做一个博客系统。详情可参考“蜂博客”：[什么是"Gastby"]()

## “蜂工地”是如何工作的？

- [项目展示](https://little-bee-client.netlify.com/)
![Demo](http://q53wkmg88.bkt.clouddn.com/little-bee-client.gif)

## “蜂工地”是如何实现的？

“蜂工地”是一个基于["Gatsby"](https://www.gatsbyjs.org/)框架的`React`网站。下面罗列了部分“蜂工地”涉及的技术。如果您对以项某项内容感兴趣，那么您可以继续往下看。在“How”部分，我们将详细介绍“蜂工地”是如何实现的。
- `React`
- `Gatsby`
- `GrapghQL`
- `TypeScrip`
- `Jest`

# How

## “蜂工地”项目结构

* [“蜂工地”](https://github.com/yuxiang660/little-bee-client)在`GitHub`上的文件组织结构如下：

```js
.
├── README.md           // 说明文档
├── configs             // 配置文件夹
|    ├── jest           // jest测试配置子文件夹
|    ├── metadata.js    // 自定义配置数据
|    └── postcss.js     // postcss配置文件
├── gatsby-browser.js   // Gatsby框架API文件
├── gatsby-config.js    // Gatsby框架API文件
├── gatsby-node.js      // Gatsby框架API文件
├── gatsby-ssr.js       // Gatsby框架API文件
├── jest.config.js      // jest测试主配置文件
├── package.json        // npm工程包管理文件
├── public              // 存放项目编译出的静态文件
├── src                 // 源文件夹
|    ├── assets         // 样式资源文件夹
|    ├── components     // React组件文件夹
|    ├── gatsby-api     // 存放Gatsby框架API调用的文件
|    ├── pages          // 静态页面文件夹
|    ├── shared         // 存放项目共享代码
|    └── templates      // 存放用于动态页面生成的模板
├── static              // 存放静态资源
|    ├── images         // 存放网站中用到的图片
|    ├── pages          // 存放菜单页面md文件
|    └── posts          // 存放博客页面md文件
└── tsconfig.json       // TypeScript配置文件
```

- `Gatsby API`文件
  - 可以简单理解为"Gatsby"框架的`Hook`，详情可参考[官网](https://www.gatsbyjs.org/docs/api-files/)或者[“蜂博客”-什么是"Gastby"]()。
- `gatsby-api`文件夹
  - 存放了被`Gatsby API`文件调用的子模块
- `src/pages`文件夹
  - 存放静态网页的JS文件。一个文件对应一个也面。路由名称即文件名。
- `src/components`文件夹
  - 存放用于动态页面的生成模板文件。被`Gatsby API`文件--`gatsby-node.js`在编译时调用，生成静态网页。
- `static`文件夹
  - 网站的静态资源，不涉及网站代码，包括图片于和博客文件等。

## 利用JS文件产生一个页面
“蜂工地”公开的网页都是通过[模板](https://github.com/yuxiang660/little-bee-client/tree/master/src/templates)动态生成的，只有一个内部调试的['debug'页面](https://github.com/yuxiang660/little-bee-client/blob/master/src/pages/debug.tsx)利用JS文件（准确的说是TS文件，“蜂工地”为保证产品质量，都是基于`TypeScript`编写的）生成。<br>
下面以此'debug'页面诠释`Gatsby`利用JS文件生成一个静态网页的工作流程。

### Debug页面效果
* 启动“蜂工地”

```bash
git clone https://github.com/yuxiang660/little-bee-client.git
npm i
gatsby develop
```
* 输入'debug'页面的URL：`http://localhost:8000/debug`，得到如下页面：

  ![DebugPage](http://q53wkmg88.bkt.clouddn.com/debug-page.png)

### Debug页面代码解析
- JS代码

```js
const Debug = () =>
(
  <Layout title="Debug">
    <SiderBar /> // 页面左侧的侧边栏
    <Files /> // 页面右侧的文件名列表
  </Layout>
);
export default Debug;
```

- 'debug'网页生成流程如下：
  - `gatsby develop`命令行会开始编译项目文件。
  - `Gatsby`读取`/src/pages`下的`debug.tsx`文件。
  - 渲染该文件`export`的[React-JSX](https://zh-hans.reactjs.org/docs/introducing-jsx.html#___gatsby)，如果你对`React-JSX`不是很了解，可以简单理解为一种强大的`HTML`。
  - `Gatsby`会根据`/src/pages`下的`debug.tsx`文件的文件名，为该页面生成对应的路由地址。因此，可以直接通过`http://localhost:8000/debug`访问到该页面。如果在`/src/pages`下创建`index.tsx`文件，则可以在路由中省略`index`，直接通过`http://localhost:8000`访问。下图显示了“蜂工地”的部分可用路由：<br>
  ![Routers](http://q53wkmg88.bkt.clouddn.com/litte-bee-routers.png)

## 利用模板动态生成一个页面
静态网站生成器之所以叫生成器，就是因为他们可以根据模板，自动生成多个页面。`Gatsby`作为一个强大的静态网站生成器（当然`Gatsby`的功能远大于一个静态网站生成器），自然可以根据模板生成页面。

简单来说，如下图所示，`Gatsby`读取对用户友好的`Markdown`文件，按照`template`模板的规则，自动生成对应的一个网页。这样，用户就可以只撰写一个`Markdown`语法格式的文档，就可以得到一个网页，分享在互联网上。
![gatsby-template](http://q53wkmg88.bkt.clouddn.com/gatsby-template.png)

下面以[/src/templates/not-found.tsx](https://github.com/yuxiang660/little-bee-client/blob/master/src/templates/not-found.tsx)为例子，阐述“蜂工地”的动态页面生成过程。

### 'not-found'页面效果

* 启动“蜂工地”后，在浏览器中输入：`http://localhost:8000/404`，得到如下页面：

  ![not-found-page](http://q53wkmg88.bkt.clouddn.com/not-found-page.png)

### 'not-found'动态页面生成代码分析
- `not-found`模板代码

```js
// /src/templates/not-found.tsx
const NotFoundTemplate = () => {
  const { title, subtitle } = useSiteMetadata();

  return (
    <Layout title={`Not Found - ${title}`} description={subtitle}>
      <Sidebar />
      <Page title="NOT FOUND">
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    </Layout>
  );
};
export default NotFoundTemplate;
```

- `Gatsby`动态生成页面代码

```js
// /src/gatsby-api/pages/index.js
createPage({
  path: '/404',
  component: path.resolve('./src/templates/not-found.tsx'),
});
```

你会发现，模板代码和静态页面的JS代码没有什么区别，都是`export`一个`React-JSX`。甚至对于`not-found`页面，把其模板文件挪到`/src/pages`文件夹下，并重命名为`404.tsx`。同样能在`http://localhost:8000/404`下访问到相同的页面。

### 动态生成网页的什么优势

对于单一页面，利用模板动态生成较静态页面并没有什么优势。但是，对于多页面，模板的优势就体现出来了。以博客系统为例，每篇博文的样式都是一样的，因此可以利用同一份模板，快速生成多个页面。

### “蜂博客”渲染过程

在“蜂工地”中，`Gatsby`利用同一份['post'](https://github.com/yuxiang660/little-bee-client/blob/master/src/templates/post.tsx)模板，对不同的[博客内容](https://github.com/yuxiang660/little-bee-client/tree/master/static/posts)进行渲染，生成对应的博客页面。

- “蜂博客”[post](https://github.com/yuxiang660/little-bee-client/blob/master/src/templates/post.tsx)模板

```js
// 关键代码
const PostTemplate: React.FC<PostTemplateProps> = ({ data }) => {
  ...
  return (
    <Layout title={`${postTitle} - ${siteTitle}`} description={metaDescription}>
      <Post post={data.markdownRemark} />
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      ...
  }
`;

export default PostTemplate;
```

对比`post`模板和`not-found`模板，`post`模板利用`GraphQL`获取了`Markdown`文件的内容，并一起被渲染成页面。而`not-found`模板没有处理外部数据，被渲染的只是一个空模板。

['GraphQL'](https://www.gatsbyjs.org/docs/graphql-concepts/)是`Gatsby`中最关键的技术，管理着`Gatsby`网页的所有数据。`Gatsby`在编译阶段，会将所有数据（包括以`Markdown`格式存放的博客文件）存入'GraphQL'，因此所有页面都可以很方便地通过`GraphQL API`获取所有数据。详情可参考“蜂博客”：[什么是"Gastby"]()。

为了便于调试，`Gatsby`还为我们自动生成了`___graphql`页面，用于本地开发调试。`gatsby develop`启动网站后，输入`http://localhost:8000/___graphql`即可得到如下页面，可用`GraphQL API`操作所有数据：
![graphql](http://q53wkmg88.bkt.clouddn.com/GraphiQL.png)

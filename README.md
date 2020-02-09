<h1 align="center">
    <img alt="LittleBee" title="Lumen" src="https://github.com/yuxiang660/little-bee-client/blob/master/.github/logo.jpg" width="140"> </br>
</h1>

<h4 align="center">
  “蜂工地”
</h4>
<h4 align="center">
  作者 -- “搬砖蜜蜂”
</h4>

# Demo
![Demo](https://github.com/yuxiang660/little-bee-client/blob/master/static/posts/3/little-bee-client.gif)

# Project Structure
```js
.
├── README.md
├── configs             // configuration folder
|    ├── jest           // jest sub-configuration
|    ├── metadata.js    // user customized data, such as: author
|    └── postcss.js     // for postcss
├── gatsby-browser.js   // Gatsby API
├── gatsby-config.js    // Gatsby API
├── gatsby-node.js      // Gatsby API
├── gatsby-ssr.js       // Gatsby API
├── jest.config.js      // jest configuration entry
├── package.json
├── public              // build output folder
├── src
|    ├── assets         // CSS folder
|    ├── components     // react components
|    ├── gatsby-api     // for Gatsby API caller
|    ├── pages          // static web pages
|    ├── shared         // shared utilities
|    └── templates      // templates for Gatsby web dynamic gen
├── static              // static resources
|    ├── images         // for images
|    ├── pages          // for page data (.md)
|    └── posts          // for post data (.md)
└── tsconfig.json       // typeScript configuration
```
- Refer to the [introduction](https://yuxiang660.github.io/little-bee-client/posts/3/2020-02-09---Little-Bee-Client-Intro/) for details.

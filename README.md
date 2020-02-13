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

# Introduction

- A `Gastby` based web app protected by `Typescript` and `Jest`
- Refer to the [blog](https://github.com/yuxiang660/little-bee-client/blob/master/.github/demo.gif) for details.

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

# Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:8000](http://localhost:8000) to view it in the browser.<br />
Open [http://localhost:8000/___graphql](http://localhost:8000/___graphql) to debug in the browser.<br />
The page will reload if you make edits.<br />

### `npm test`

Launches the tests.<br />

### `npm run build`

Builds the app for production to the `public` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run serve`

Serve the app locally.<br />
Open [http://localhost:9000](http://localhost:9000) to view it in the browser.<br />

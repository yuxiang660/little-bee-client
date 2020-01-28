const React = require('react');
const katexStylesheet = require(`../../assets/css/katex/katex.min.css`);

const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    React.createElement('style', {
      key: 'katex-inline-stylesheet',
      dangerouslySetInnerHTML: { __html: katexStylesheet.toString() }
    })
  ]);
};

module.exports = onRenderBody;

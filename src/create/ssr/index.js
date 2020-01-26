'use strict';

const React = require('react');
const siteConfig = require('../../../configs/metadata');
const katexStylesheet = require(`katex/dist/katex.min.css`);

const onRenderBody = ({ setHeadComponents }) => {
  const { useKatex } = siteConfig;

  if (useKatex) {
    setHeadComponents([
      React.createElement('style', {
        key: 'katex-inline-stylesheet',
        dangerouslySetInnerHTML: { __html: katexStylesheet.toString() }
      })
    ]);
  }
};

module.exports = onRenderBody;

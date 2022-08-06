/* eslint-disable import/no-extraneous-dependencies */
const { configure: webpackConfigApp } = require('@jotforminc/webpack-config-app');

const config = webpackConfigApp({
  environment: 'development',
  generateSourcemap: true,
  env: {
    NODE_ENV: 'development'
  },
  webpack: {
    devServer: {
      logRequests: true
    },
    externals: [
      'react',
      'react-dom'
    ]
  }
});

// console.log(require('util').inspect(config.toConfig(), false, 10, true));

module.exports = config.toConfig();

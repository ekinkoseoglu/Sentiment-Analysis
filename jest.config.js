/* eslint-disable import/no-extraneous-dependencies */
const deepmerge = require('deepmerge');

const base = require('@jotforminc/jest-preset-base')();

const react = require('@jotforminc/jest-preset-react')();

let config = deepmerge.all([base, react]);

if (process.env.JEST_E2E === 'true') {
  const e2eOpts = {};
  if (process.env.CI === 'true') {
    const testBaseURL = 'https://rc.jotform.com/PR/test-app/' + process.env.REVISION + '/';
    console.log("E2E Test Base URL: " + testBaseURL)
    e2eOpts.testBaseURL = testBaseURL;
  }
  const e2e = require('@jotforminc/jest-preset-e2e')(e2eOpts);

  config = deepmerge.all([config, e2e]);
}

module.exports = config;

const custom = require('../webpack.config.js');
const {stories} = require('../storybook/storyLoader.js');

module.exports = {
  stories: ['../app/stories/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-zeplin/register'],
  webpackFinal: config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {...config.resolve.alias, ...custom.resolve.alias},
      },
      module: {...config.module, rules: custom.module.rules},
    };
  },
};

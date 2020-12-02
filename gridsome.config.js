// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const path = require('path');

function addStyleResource(rule) {
  rule
    .use('style-resource')
    .loader('style-resources-loader')
    .options({
      patterns: [
        path.resolve(__dirname, './src/assets/scss/_variables.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_functions.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_variables.scss'),
        path.resolve(__dirname, './node_modules/bootstrap/scss/_mixins.scss'),
      ],
    });
}

module.exports = {
  siteName: 'Mahana Biopharma',
  plugins: [
    {
      use: 'gridsome-plugin-purgecss',
      options: {
        content: ['./src/**/*.vue', './src/**/*.js', './src/**/*.jsx', './src/**/*.pug', './src/**/*.md'],
        defaultExtractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
      },
    },
    {
      use: '@gridsome/source-datocms',
      options: {
        apiToken: 'ba82fb10ea197ebecbd0720ba45335', // required
        previewMode: false,
        apiUrl: 'https://site-api.datocms.com',
        typeName: 'DatoCms',
      },
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
        config: {
          id: 'G-668GKPYP88',
        },
      },
    },
  ],
  chainWebpack(config) {
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
    types.forEach((type) => {
      addStyleResource(config.module.rule('scss').oneOf(type));
    });
  },
};

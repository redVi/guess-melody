const { homepage } = require('./package.json');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? homepage : '/',
  productionSourceMap: false,
  css: {
    modules: true,
  },
};

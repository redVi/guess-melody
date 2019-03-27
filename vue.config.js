module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/guess-melody/'
    : '/',
  productionSourceMap: false,
  css: {
    modules: true,
  },
};

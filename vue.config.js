module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/guess-melody/' : '/',
  productionSourceMap: false,
  filenameHashing: false,
  crossorigin: 'anonymous',
  css: {
    modules: true,
    sourceMap: false,
    loaderOptions: {
      css: {
        url: false,
      },
    },
  },
};

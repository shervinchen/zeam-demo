const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://free-to-play-games-database.p.rapidapi.com/',
      changeOrigin: true,
      // pathRewrite: {
      //   '^/api': '',
      // },
    })
  );
};

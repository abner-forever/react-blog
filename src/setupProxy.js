const { createProxyMiddleware } = require('http-proxy-middleware');

//设置代理
module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api',
      {
        // target: 'http://foreverheart.top', 
        target: 'http://localhost:8080',
        changeOrigin: true
      })

  );
  app.use(
    createProxyMiddleware('/upload',
      {
        // target: 'http://foreverheart.top', 
        target: 'http://localhost:8080',
        changeOrigin: true
      })

  );
};


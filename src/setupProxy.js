const proxy = require('http-proxy-middleware');
//设置代理
module.exports = function(app) {
  app.use(proxy('/api', { target: 'http://localhost:3000/' }));
};
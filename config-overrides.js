const { override, addDecoratorsLegacy } = require('customize-cra');
const proxy = require('http-proxy-middleware');
const proxyTable = {
  '/api/*': {
    target: 'http://localhost:3000'
  }
}
module.exports = override(

  // proxyTable,
  addDecoratorsLegacy(),
);
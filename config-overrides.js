const { override, addDecoratorsLegacy, addWebpackAlias } = require('customize-cra');
const path = require('path')

module.exports = override(
  addDecoratorsLegacy(),
  addWebpackAlias({
    ["@"]: path.resolve(__dirname, "src"),
    ["@img"]: path.resolve(__dirname, "src/assets/static/images"),
    ["@svg"]: path.resolve(__dirname, "src/assets/static/iconSvg")
})
);
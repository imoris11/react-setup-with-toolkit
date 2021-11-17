const { override, fixBabelImports, addWebpackAlias } = require('customize-cra');
const path = require('path');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addWebpackAlias({
    ['@design-system']: path.resolve(__dirname, './src/design-system'),
    ['@auth']: path.resolve(__dirname, './src/app/auth'),
    ['@navigation']: path.resolve(__dirname, './src/app/navigation'),
    ['@user-dashboard']: path.resolve(__dirname, './src/app/user-dashboard'),
  }),
);

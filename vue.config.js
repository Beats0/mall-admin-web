const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:8201/mall-admin',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
});

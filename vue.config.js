const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    host:'localhost',
    port: 81,
    proxy: {
      '/api': {
        target: 'http://localhost:8201',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    },
  },
});

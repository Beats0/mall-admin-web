const path = require('path');
const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
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
  publicPath: './',
  outputDir: 'dist',
  assetsDir: 'static',
  indexPath: 'index.html',
  chainWebpack: config => {
    // 原svg规则覆盖了所有的svg图标，需要先将自己的svg排除，以应用新的sprite规则
    // src/assets/icons是我们将要存放svg的目录
    config.module
      .rule('svg')
      .exclude.add(path.join(__dirname, 'src/icons/svg')) // 排除自定义svg目录
      .end()
    config.module
      .rule('icons') // 新规则
      .test(/\.svg$/)
      .include.add(path.join(__dirname, 'src/icons/svg')) // 新规则应用于我们存放svg的目录
      .end()
      .use('svg-sprite-loader') // 用sprite-loader接卸
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()
  }
});

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/getList': {
        target: 'http://gmall-h5-api.atguigu.cn',
        pathRewrite: {
          '^/getList': '' // 将/api前缀替换为空
        }
      }
    }
  }
})

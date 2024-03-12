const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  devServer: {
    port : 3000,
    proxy : {
      '/api' : {
        target : 'https://localhost:8080',
        vs: true,
        changerOrigin: true
      }
    }
  }
}
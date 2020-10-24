module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common':'@/common',
        'network':'@/network',
        'router':'@/router',
        'views':'@/views',
        'store':'@/store',
        'components':'@/components'
      }
    }
  }
}

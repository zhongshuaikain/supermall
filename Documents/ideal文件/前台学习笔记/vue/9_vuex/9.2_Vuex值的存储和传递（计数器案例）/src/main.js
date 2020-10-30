import Vue from 'vue'
import App from './App'
import router from './router'
import store from "./vuex";

Vue.config.productionTip = false
Vue.prototype.$store = store


new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

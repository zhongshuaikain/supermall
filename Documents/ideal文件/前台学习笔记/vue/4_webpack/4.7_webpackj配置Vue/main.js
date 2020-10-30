import Vue from 'vue';

// import app from './js/app'
import app from './vue/app.vue'
new Vue({
  el: '#app',
  template: `<app/>`,
  components: {
    app
  }
})

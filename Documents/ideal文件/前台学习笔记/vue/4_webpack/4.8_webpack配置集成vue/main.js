import Vue from 'vue';

// import name  from './vue/app.js';

import name from './vue/app.vue';

new Vue({
  el: '#app',
  template: '<name/>',
  components: {
    name
  }
})
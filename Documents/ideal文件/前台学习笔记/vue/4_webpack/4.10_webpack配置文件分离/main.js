import Vue from 'vue';

import app from './vue/App.vue';

new Vue({
  el: '#app',
  template: `
    <app/>`,
  components: {
    app
  }

})
document.writeln('heo');
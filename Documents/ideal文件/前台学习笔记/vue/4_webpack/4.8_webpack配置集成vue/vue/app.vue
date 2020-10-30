<template>
  <div>
    <div> {{name}}</div>
    <button @click="cli">点击</button>
    <child></child>
  </div>
</template>

<script>
  import child from './Cpn.vue';
  export default {
    name: "app",
    components:{
      child
    },
    data() {
      return {
        name: 'hello'
      }
    },
    methods: {
      cli() {
        alert('点击');
      }
    }
  }
</script>

<style scoped>

</style>
<template>
  <div>
    <h2> {{message}}</h2>
    <button @click="cli">点击</button>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: 'hello！zhopngshuai!',
        name: "hello"
      }
    },
    methods: {
      cli() {
        alert('我被点击喽！');
      }
    }

  }

</script>


<style scoped>

</style>
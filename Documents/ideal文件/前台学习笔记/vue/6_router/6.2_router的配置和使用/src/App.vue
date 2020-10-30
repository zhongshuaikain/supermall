<template>
  <div>

    <router-link to="/home" tag="button" replace>home 页面</router-link>
    <router-link to="/index">index 页面</router-link>
    <button @click="onclick">我是新建的按钮</button>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    methods:{
      onclick(){
        this.$router.push('index').catch(err=>{err});
      }
    }
  }

</script>

<style>
  .active {
    color: deeppink;
  }
</style>

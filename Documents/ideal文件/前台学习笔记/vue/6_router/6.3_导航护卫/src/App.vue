<template>
  <div id="app">
    <router-link replace tag="button" to="/index">首页</router-link>
    <router-link replace tag="button" to="/about">关于</router-link>
    <router-link replace tag="button" to="/user">用户</router-link>
    <button @click="onclick">档案</button>

<keep-alive exclude="Index,about">
  <router-view/>
</keep-alive>
  </div>
</template>

<script>

  export default {
    methods:{
      onclick(){
        this.$router.push("/profile")
      }
    }

  }
</script>

<style>

</style>

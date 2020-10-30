<template>
  <div>
    <h2>detail hello world!</h2>
    <router-link :to="'/detail_child1/'+userid" tag="button">detail1</router-link>
    <router-link to="/detail_child2" tag="button">detail2</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        userid:'zhangsan'
      }
    }
  }

</script>

<style scoped>

</style>

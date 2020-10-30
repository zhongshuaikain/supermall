<template>
  <div>
    <router-link to="/goindex" tag="button" replace>index</router-link>
    <!--  参数传递到页面的方法二 query方法 -->
    <router-link :to="{path:'/profile',query:{name:'lisi',age:18}} " tag="button" replace>profile</router-link>
    <button @click="onclick">detail</button>
    <router-view></router-view>
  </div>
</template>

<script>


  export default {

    methods: {
      onclick() {
        this.$router.push('/godetail');
      }
    }
  }
</script>


<style>

  .active {
    color: #00b4ff;
  }

</style>

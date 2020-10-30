<template>
  <div>
    <h2>我是about页面</h2>
    <router-link :to="'/detail1/'+ userid">详情1</router-link>
    <router-link to="/detail2">详情2</router-link>
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: "about",
    data() {
      return {
        userid: 'zhangsan'
      }
    },
    // 当组件处于活跃状态时，调用之前存储过的path路径
    activated() {
      this.$router.push(this.path);
    },
    // 记录当前组件离开时的路径
    beforeRouteLeave(to, from, next) {
      this.path = this.$route.path;
      next();
    }

  }
</script>

<style scoped>

</style>

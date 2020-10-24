<template>
  <div>
    <MainTabbar></MainTabbar>
    <router-view/>
  </div>
</template>

<script>

  import MainTabbar from "./components/content/mianTabbar/MainTabbar";

  export default {


    components: {
      MainTabbar
    }
  }
</script>

<style scoped>
  @import "assets/css/base.css";
  @import "assets/css/tabbar.css";

</style>

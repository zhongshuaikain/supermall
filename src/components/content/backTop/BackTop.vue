<template>
  <div class="backTop">
    <img src="../../../assets/img/common/top.png" height="86" width="86"/>
  </div>
</template>

<script>
  export default {
    name: "BackTop",
    methods:{
      backClick(){

      }
    }
  }
</script>

<style scoped>
  .backTop {
    position: fixed;
    right: 8px;
    bottom: 55px;
  }

  .backTop img{
    width: 43px;
    height: 43px;
  }
</style>

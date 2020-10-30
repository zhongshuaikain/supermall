<template>
  <div>
    <h2>我是detail1子文件</h2>
    <!-- 将路径参数传递获取到页面中   -->
    <h2>{{$route.params.userid}}</h2>
  </div>
</template>

<script>
  export default {
    name: "detail1"
  }
</script>

<style scoped>

</style>

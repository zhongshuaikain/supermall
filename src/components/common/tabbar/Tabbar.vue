<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
.tab-bar{
  z-index: 999;
}
</style>

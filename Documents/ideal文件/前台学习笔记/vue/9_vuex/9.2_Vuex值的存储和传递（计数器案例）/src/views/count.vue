<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "count",
    props: {
      count: {
        type: Number,
        default: 1
      }
    }
  }
</script>

<style scoped>

</style>

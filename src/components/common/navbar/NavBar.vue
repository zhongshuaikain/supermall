<template>
  <div class="navbar">
    <div class="leftNav">
      <slot name="LeftNav"></slot>
    </div>
    <div class="CenterNav">
      <slot name="CenterNav"></slot>
    </div>
    <div class="RightNav">
      <slot name="RightNav"></slot>
    </div>

  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>
  .navbar {
    display: flex;
    height: 44px;
    line-height: 44px;
    text-align: center;
  }

  .CenterNav {
    flex: 1;
  }

  .leftNav, .RightNav {
    width: 60px;
    /*background-color: blue;*/
  }

</style>

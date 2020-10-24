<template>

  <div class="tab-bar-Item" @click="onclick">
    <div v-if=isActive>
      <slot name="picture1"></slot>
    </div>
    <div v-else>
      <slot name="picture2"></slot>
    </div>
    <div :style="ActiveStyle">
      <slot name="character"></slot>
    </div>
  </div>

</template>

<script>
  export default {
    name: "TabbarItem",
    props: {
      path: String,
      activeColor: {
        type: String,
        default: 'red'
      }
    },
    methods: {
      onclick() {
        this.$router.push(this.path);
      }
    },
    computed: {
      isActive() {
        return this.$route.path.indexOf(this.path) == -1;
      },
      ActiveStyle() {
        return this.isActive ? {} : {color: this.activeColor}
      }
    }
  }
</script>

<style scoped>

</style>

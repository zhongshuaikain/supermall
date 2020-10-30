<template v-slot>
  <div class="TabbarItem" @click="itemClick">

      <div v-if="isActive">
        <slot name="isActive"></slot>
      </div>
      <div v-else>
        <slot name="picture"></slot>
      </div>
      <!--      <a :class="{character_color:isActive}">-->
      <div :style="activeStyle">
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
      itemClick() {
        this.$router.push(this.path)
      }
    },
    computed: {
      isActive() {
        //判断当前路由所在位置的path是不是等于当前页面路径所在的path，不是的话就是返回-1，是就不是-1
        return this.$route.path.indexOf(this.path) !== -1;
      },
      activeStyle() {
        return this.isActive ? {color: this.activeColor} : {};
      }
    }
  }
</script>

<style scoped>

  /*.character_color {*/
  /*  color: red;*/
  /*}*/

</style>

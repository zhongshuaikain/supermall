<template>
  <div class="goodList">
    <goods-list-item v-for="item in goods" v-bind:goods-item="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";

  export default {
    name: "GoodsList",
    components: {GoodsListItem},
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }

</script>

<style scoped>
.goodList{
  display: flex;
  flex-wrap: wrap;
}

</style>

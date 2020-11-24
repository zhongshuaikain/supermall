<template>
  <div class="recommend">
    <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
      <a :href="item.link"> <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
        type: Array,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .recommend {
    display: flex;
    width: 100%;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 8px solid #eee;
    font-size: 16px;

  }
  .recommend-item{
    flex: 1;
  }

  .recommend img {
    width: 73px;
    height: 73px;
    margin: 10px 10px;
  }
</style>

<template>
  <div>
    <Tabbar>
      <TabbarItem path="/home">
        <img slot="picture1" src="../../../assets/img/home/home.svg" alt="">
        <img slot="picture2" src="../../../assets/img/home/home_activated.svg" alt="">
        <div slot="character">首页</div>
      </TabbarItem>
      <TabbarItem path="/classify">
        <img slot="picture1" src="../../../assets/img/classify/classify.svg" alt="">
        <img slot="picture2" src="../../../assets/img/classify/classify_activated.svg" alt="">
        <div slot="character">分类</div>
      </TabbarItem>
      <TabbarItem path="/car">
        <img slot="picture1" src="../../../assets/img/car/car.svg" alt="">
        <img slot="picture2" src="../../../assets/img/car/car_activated.svg" alt="">
        <div slot="character">购物车</div>
      </TabbarItem>
      <TabbarItem path="/mine">
        <img slot="picture1" src="../../../assets/img/mine/mine.svg" alt="">
        <img slot="picture2" src="../../../assets/img/mine/mine_activated.svg" alt="">
        <div slot="character">我的</div>
      </TabbarItem>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "../../../components/common/tabbar/Tabbar";
  import TabbarItem from "../../../components/common/tabbar/TabbarItem";

  export default {
    components: {
      Tabbar,
      TabbarItem
    }
  }


</script>

<style scoped>
  /*@import "assets/css/tabbar.css";*/

</style>

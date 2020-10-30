<template>
  <div>
    <router-view></router-view>
    <Tabbar>
      <TabbarItem path="/home">
        <img slot="picture" src="./assets/img/home.svg" alt="">
        <img slot="isActive" src="./assets/img/home_activated.svg" alt="">
        <div slot="character">首页</div>
      </TabbarItem>

      <TabbarItem path="/car"  activeColor='green'>
        <img slot="picture" src="./assets/img/car.svg" alt="">
        <img slot="isActive" src="./assets/img/car_activated.svg" alt="">
        <div slot="character">购物车</div>
      </TabbarItem>

      <TabbarItem path="/classify">
        <img slot="picture" src="./assets/img/classify.svg" alt="">
        <img slot="isActive" src="./assets/img/classify_activated.svg" alt="">
        <div slot="character">分类</div>
      </TabbarItem>

      <TabbarItem path="/my">
        <img slot="picture" src="./assets/img/my.svg" alt="">
        <img slot="isActive" src="./assets/img/my_activated.svg" alt="">
        <div slot="character">我的</div>
      </TabbarItem>

    </Tabbar>

  </div>


</template>

<script>

  import Tabbar from './components/tabbar/Tabbar'
  import TabbarItem from "./components/tabbar/TabbarItem";

  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  @import "./assets/css/tabbar.css";
  @import "./assets/css/base.css";

</style>

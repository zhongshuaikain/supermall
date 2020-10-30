<template>
  <div>
    <Tabbar>
      <TabbarItem>  <div>首页</div>   </TabbarItem>
      <TabbarItem>  <div>分类</div>   </TabbarItem>
      <TabbarItem>  <div>购物车</div>  </TabbarItem>
      <TabbarItem>  <div>我的</div>   </TabbarItem>
    </Tabbar>

  </div>
</template>

<script>

  import Tabbar from './components/tab-bar/Tabbar'
  import TabbarItem from "./components/tab-bar/TabbarItem";
  export default {
    name: 'App',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>

<style>
  @import "./assets/tabbar.css";

</style>

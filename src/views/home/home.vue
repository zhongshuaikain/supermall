<template>
  <div class="home">
    <navbar class="homeColor">
      <template #CenterNav>
        <div> 购物车</div>
      </template>
    </navbar>
    <Scroll class="content"
            ref="scroll"
            @scroll="scrollPostion"
            :probeType="3"
            pull-up-load="true"
            @pullingUp="loadMore">
      <HomeSwiper :banners="banners"/>
      <RecommendView :recommends="recommends"/>
      <FeatureView></FeatureView>
      <TabControl :title="['流行','新款','精选']" @tabClick="tab_click"></TabControl>
      <GoodsList :goods="goods[currentType].list"></GoodsList>
    </Scroll>
    <BackTop @click.native="backClick" v-show="isShow"></BackTop>
  </div>
</template>

<script>
  import navbar from '../../components/common/navbar/NavBar'
  import TabbarItem from "../../components/common/tabbar/TabbarItem";
  import Scroll from "../../components/common/scroll/Scroll";

  import TabControl from "../../components/content/tabControl/TabControl";
  import GoodsList from "../../components/content/goods/GoodsList";
  import BackTop from "../../components/content/backTop/BackTop";

  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import FeatureView from "./childComps/FeatureView";


  import {getHomeMultidata, getHomeGoods} from '../../network/home'


  export default {
    name: "home",
    components: {
      TabbarItem,
      navbar,
      Scroll,
      HomeSwiper,
      RecommendView,
      FeatureView,
      TabControl,
      GoodsList,
      BackTop
    },
    data() {
      return {
        banners: [],
        recommends: [],
        goods: {
          'pop': {page: 0, list: []},
          'new': {page: 0, list: []},
          'sell': {page: 0, list: []}
        },
        currentType: 'pop',
        isShow: false
      }
    },
    created() {
      //请求首页头部多个数据
      this.getHomeMultidata();

      //请求首页商品
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    },
    methods: {
      getHomeMultidata() {
        return getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getHomeGoods(type) {
        const page = this.goods[type].page + 1;
        return getHomeGoods(type, page).then(res => {
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;

          //拉取更多数据
          this.$refs.scroll.scroll.finishPullUp();
        })
      },

      // 获取列表数据
      tab_click(index) {
        switch (index) {
          case 0:
            this.currentType = 'pop'
            break;
          case 1:
            this.currentType = 'new'
            break;
          case 2:
            this.currentType = 'sell'
            break;
        }
        // this.currentType=Object.keys(this.goods)[index]
      },

      // 返回顶部按钮
      backClick() {
        this.$refs.scroll.scrollTo(0, 0, 700);
      },

      //监听滚动位置
      scrollPostion(position) {
        this.isShow = (-position.y) > 1000;
      },

      //上拉加载更多
      loadMore() {
        this.getHomeGoods(this.currentType);
        //重新计算可滚动的高度，解决滚动卡顿bug
        this.$refs.scroll.scroll.refresh();
      }
    }
  }


</script>

<style scoped>
  .homeColor {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    background-color: #ef4562;
    font-width: 800px;
    font-size: 24px;
    color: white;
    z-index: 999;
  }

  .content {
    position: absolute;
    overflow: hidden;
    top: 0px;
    bottom: 49px;
    left: 0;
    right: 0;
  }


</style>

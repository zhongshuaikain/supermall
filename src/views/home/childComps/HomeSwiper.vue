<template>
  <Swiper class="to">
    <SwiperItem v-for="(item,index) in banners" :key="index">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>

    </SwiperItem>
  </Swiper>
</template>

<script>
  import {Swiper, SwiperItem} from './../../../components/common/swiper'


  export default {
    name: "HomeSwiper",
    components: {
      Swiper,
      SwiperItem
    },
    props:{
      banners:{
        type:Array,
        default(){
          return []
        }
      }
    }

  }
</script>

<style scoped>
  .to{
    padding-top: 44px;
  }

</style>

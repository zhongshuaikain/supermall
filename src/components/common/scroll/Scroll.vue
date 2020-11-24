<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Scroll",
    data() {
      return {
        scroll: null
      }
    },
    props: {
      probeType() {
        return {
          type: Number,
          default: 0
        }
      },
      pullUpLoad(){
        return{
          type:Boolean,
          default: false
        }
      }
    },
    mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
        click:true,
        probeType:this.probeType,
        pullUpLoad:this.pullUpLoad
      })

      this.scroll.on('scroll',(positon)=>{
        this.$emit('scroll',positon);
      })

      this.scroll.on('pullingUp',()=>{
        this.$emit('pullingUp');
      })
    },
    methods: {
      scrollTo(x, y, time = 300) {
        this.scroll.scrollTo(x, y, time);
      }
    }

  }
</script>

<style scoped>

</style>

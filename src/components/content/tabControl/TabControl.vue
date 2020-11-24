<template>
  <div class="tabControl">
    <div v-for="(item,index) in title" class="tab_title" :class="{active : index===currentIndex}"
         @click="titleClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    data() {
      return {currentIndex: 0}
    },
    props: {
      title: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    methods: {
      titleClick(index) {
        this.currentIndex = index;
        this.$emit('tabClick',index)
      }
    }
  }

</script>

<style scoped>
  .tabControl {
    position: sticky;
    top: 44px;
    background-color: #fff;
    display: flex;
    padding-top: 6px;
    padding-bottom: 6px;
    text-align: center;
  }

  .tab_title {
    flex: 1;
  }

  .tab_title span {
    padding-bottom: 3px;


  }

  .active {
    color: var(--color-high-text);
  }

  .active span {
    border-bottom: 2px solid var(--color-high-text);
  }
</style>

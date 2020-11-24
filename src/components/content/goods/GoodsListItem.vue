<template>
  <div class="goodsListItem">
    <img :src="goodsItem.show.img" alt="">
    <div class="goodsInfo">
      <p >{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.price}}</span>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props: {
      goodsItem: {
        type: Object,
        default() {
          return [];
        }
      }
    }
  }
</script>

<style scoped>
  .goodsListItem {
    position: relative;
    /*padding-bottom: 40px;*/
    padding: 0 4px 40px;
    width: 30%;

    /*font-size: 10px;*/
  }

  .goodsListItem img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
  }

  .goodsInfo {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goodsInfo p{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goodsInfo .price{
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goodsInfo .collect{
    position: relative;
  }

  .goodsInfo .collect::before{
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url('../../../assets/img/common/collect.svg') 0 0/14px 14px;
  }
</style>

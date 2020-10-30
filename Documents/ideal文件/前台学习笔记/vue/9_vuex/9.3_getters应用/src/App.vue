<template>
  <div>
    <h2>count的值是 {{$store.state.count}}</h2>
    <h4>利用getter属性计算，count的平方是：{{$store.getters.powerCount}}</h4>
    <h4>利用mutations属性，点击按钮count加一的值：{{$store.state.count}}</h4>
    <button @click="onclick">点击count加1</button>

<!--    由于getter方法类似于计算属性，所以调用的时候，$store.getters.score相当于一个属性值，而不是函数-->
    <h2> 成绩大于60分的学生信息是：{{$store.getters.score}}</h2>
    <h2> 成绩大于60分的学生有：{{$store.getters.more60count}}个</h2>

    <h2>需求：成绩大于 X分 的学生信息是什么，X 为手动输入的值，且信息能成功打印</h2>
    <h2>成绩大于 X 的学生信息是:{{$store.getters.moreXScore(70)}}</h2>

  </div>
</template>

<script>
  export default {
    name: 'App',
    methods: {
      onclick() {
        return this.$store.commit('count')
      }
    }
  }
</script>

<style>

</style>

<template>
  <div>
    <!--    <h2>计数器的值为{{count}}</h2>-->
    <!--    <button>+</button>-->
    <!--    <button>-</button>-->
    <!--   -->
    <cpn>
      <h2>计数器的值为{{$store.state.count}}</h2>
<!--      想要在外部组件中修改state里面的值，首先要在 new Vuex.store的mutations内有修改state值的方法，在外部组件中定义方法，
          再利用 this.$store.commit('mutations中定义的方法')进行提交既可实现-->
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </cpn>
  </div>
</template>

<script>
  import cpn from './views/count'

  export default {
    name: 'App',
    components: {
      cpn
    },
    methods: {
      increment() {
        this.$store.commit('add')

      },
      decrement() {
        this.$store.commit('jian')
      }
    }
  }
</script>

<style>

</style>

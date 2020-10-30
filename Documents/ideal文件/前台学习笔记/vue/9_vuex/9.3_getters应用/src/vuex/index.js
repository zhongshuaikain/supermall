import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 100,
    student: [
      {name: 'zhangsan', age: 18, score: 62, address: '湖南'},
      {name: 'lisi', age: 18, score: 70, address: '湖南'},
      {name: 'wangwu', age: 18, score: 40, address: '湖南'},
      {name: 'zhaoliu', age: 18, score: 80, address: '湖南'},
      {name: 'kain', age: 18, score: 29, address: '湖南'}
    ]
  },
  getters: {
    powerCount(state) {
      return state.count * state.count;
    },
    // 获取分数大于60分学生的信息
    score(state) {
      // 方法一 箭头函数
      return state.student.filter(oneStudent => {
        return oneStudent.score > 60;
      })
      //方法二 传统函数过滤器
      // score(state) {
      //   return state.student.filter( function (oneStudent){
      //     return oneStudent.score>60;
      //   })
    },
    // 获取分数大于六十学生的总个数
    more60count(state, getter) {
      return getter.score.length;
    },

    // 获取成绩大于 X 分的学生信息
    moreXScore(state, getter) {
      return function (X) {
        return state.student.filter( oneStudent => {
          return oneStudent.score > X;
        })
      }
    }
  },
  mutations: {
    count(state) {
      state.count++
    }
  }
})

export default store

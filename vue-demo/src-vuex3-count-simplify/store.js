/**
 * Created by infaa on 2018/9/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { // 初始化状态
  count: 0
}
const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  }
}

const actions = {
  increment ({commit}) {
    commit('INCREMENT')
  },
  decrement ({commit}) {
    commit('DECREMENT')
  },
  incrementIfOdd ({commit, state}) {
    if (state.count % 2 === 1) {
      commit('INCREMENT')
    }
  },
  incrementAsync ({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 1000)
  }
}

const getters = {
  eventOrOdd (state) {
    return state.count % 2 === 0 ? '偶数' : '奇数'
  }
}

export default new Vuex.Store({
  state, // 状态对象
  mutations, // 更新state函数的对象
  actions, // dispatch 对应actiong
  getters // 对应computed 中getters
})

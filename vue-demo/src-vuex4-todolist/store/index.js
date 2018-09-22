/**
 * Created by infaa on 2018/9/22.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

/* eslint-disable new-cap */

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})

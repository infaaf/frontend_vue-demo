/**
 * Created by infaa on 2018/9/19.
 */
import Vue from 'vue'
import App from './App'
import store from './store'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  store // 所有组件对象多了一个属性$store
})

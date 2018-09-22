/**
 * Created by infaa on 2018/9/19.
 */
import Vue from 'vue'
import App from './App'
import router2 from './router'

/* eslint-disable no-new */

new Vue({
  el: '#app',
  components: {App},
  template: '<App/>',
  router: router2
})

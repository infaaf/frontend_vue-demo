/**
 * Created by infaa on 2018/9/19.
 */
import Vue from 'vue'
import App from './components/App'
import store from './store'
import './base.css'
/* eslint-disable no-new */

new Vue({
  el: '#app',
  render: h => h(App),
  store
})

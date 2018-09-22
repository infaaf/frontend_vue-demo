/**
 * Created by infaa on 2018/9/21.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]

})

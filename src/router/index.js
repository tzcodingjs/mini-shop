import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home.vue'
import '@assets/css/reset.scss'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

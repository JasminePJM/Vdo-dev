import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/view/home.vue' //主框架
import IsHit from '@/view/hit/isHit.vue' 



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/IsHit',
      component:IsHit
    }
  ]
})

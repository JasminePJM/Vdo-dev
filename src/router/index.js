import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/view/home.vue' //主框架
import Detail from '@/view/detail/index.vue' 
import Search from '@/view/search.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home
    },
    {
      path: '/detail/:id',
      component:Detail
    },
    {
      path: '/search',
      component:Search
    }
  ]
})

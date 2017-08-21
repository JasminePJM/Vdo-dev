// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'

//Mint UI
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
//Element UI
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
// Swiper
import '../static/Js/swiper-3.4.2.min.css'
import '../static/Js/swiper-3.4.2.min.js'

import './Js/rem.js'// 适配方案

import focus from './Js/focus'

Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import 'swiper/dist/css/swiper.css'
import './assets/style/reset.css'
import './assets/iconfont/iconfont.css'
import FastClick from 'fastclick'
import store from './store/'
FastClick.attach(document.body);
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(VueResource)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

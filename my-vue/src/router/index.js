import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index/Index'
import Detail from '@/page/detail/Detail'
import City from '@/page/city/City'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail,
      children:[{
          name:'sight',
      	  path: 'sight/:id',
	      component: {
	      	 template:'<div>sight</div>'
	      }
	     },
	     { path: 'ticket',
	      component: {
	      	 template:'<div>ticket</div>'
	      }
      }]
    },
    {
      path: '/city',
      name: 'City',
      component: City
    }
  ]
})

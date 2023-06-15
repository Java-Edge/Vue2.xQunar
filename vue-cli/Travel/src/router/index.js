import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 访问根路径时
      path: '/',
      name: 'Home',
      // 该路径对应的页面内容
      component: Home
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      // 动态路由
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
// @符号指的就是 src 目录
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      // 访问根路径时
      path: '/',
      name: 'Home',
      // 该路径对应的页面内容
      component: Home
    }
  ]
})

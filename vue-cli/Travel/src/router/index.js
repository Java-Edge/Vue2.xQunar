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
    }],
  // 页面切换时，总在最顶部，而不是其他页面当时屏幕所处位置
  /**
   * 这段代码的作用是设置页面跳转时的滚动行为，将页面滚动位置重置为 (0, 0)。
   *  scrollBehavior 是 Vue Router 提供的一个全局钩子函数，用于控制页面跳转时的滚动行为。
   *  to：即将跳转的路由对象。
   *  from：当前路由对象。
   *  savedPosition：记录的滚动位置。
   *  return { x: 0, y: 0 }：将滚动位置重置为 (0, 0)，即页面顶部。
   * @param to
   * @param from
   * @param savedPosition
   * @returns {{x: number, y: number}}
   */
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import '/Users/javaedge/Downloads/WebStormProjects/Vue2.xQunar/vue-cli/Travel/node_modules/swiper/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
// mount with global
Vue.use(VueAwesomeSwiper)

// eslint-disable-next-line
new Vue({
  el: '#app',
  router,
  // 将存储对象传递给Vue实例，会被分发到每个子组件，以便管理应用程序状态
  store,
  // 入口组件
  components: { App },
  template: '<App/>'
})

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
  store,
  components: { App },
  template: '<App/>'
})

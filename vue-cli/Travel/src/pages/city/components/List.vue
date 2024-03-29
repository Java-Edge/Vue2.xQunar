<template>
<!--  ref可以帮我们获取 DOM -->
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) of cities"
        :key="key"
        :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    hot: Array,
    cities: Object,
    // 接受来自父组件 City.vue 的 letter
    letter: String
  },
  /**
   * 使用 Vuex#mapState 将当前城市的状态映射到当前组件的计算属性
   * 1. 使用 spread 运算符将 mapState 函数返回的对象展开
   * 2. 展开的对象中，将当前城市的状态映射到 currentCity 计算属性
   * 3. 当前组件可以通过访问 currentCity 计算属性来获取当前城市的状态
   */
  computed: {
    ...mapState({
      currentCity: 'city'
    })
  },
  methods: {
    // 将传递的city参数传递给changeCity方法
    // 并使用Vue Router将路由推到根路径
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    // 使用mapMutations将changeCity方法映射到组件的mutations
    ...mapMutations(['changeCity'])
  },
  watch: {
    // 监听letter变量的变化，如果letter变量发生变化，则执行以下操作
    letter () {
      if (this.letter) {
        /**
         * 2. 通过this关键字获取当前组件实例的引用
         * 3. 使用this.$refs获取当前组件中所有具有ref属性的DOM元素的引用 因为 ref 是通过循环得到的，其为一个数组
         * 4. 通过方括号语法，使用变量this.letter作为属性名获取对应的DOM元素的引用
         * 5. 由于this.$refs[this.letter]返回的是一个数组，因此使用[0]获取数组中的第一个元素
         * 6. 将获取到的DOM元素的引用赋值给变量element
         */
        const element = this.$refs[this.letter][0]
        // 将页面滚动到该元素
        this.scroll.scrollToElement(element)
      }
    }
  },
  /**
   * 组件挂载完成后，创建一个Bscroll实例，并将其应用于组件中的wrapper元素上，同时传入一个配置对象，使得该实例可以响应点击事件
   * 1. 在组件的mounted生命周期钩子函数中，创建了一个名为scroll的实例属性
   * 2. 使用new操作符创建了一个Bscroll实例，传入了一个对象作为配置参数，其中包含了一个click属性，将其值设置为true
   * 3. 将该实例应用于组件中的wrapper元素上，通过this.$refs.wrapper获取到该元素的引用
   * 4. 最终得到一个可响应点击事件的Bscroll实例，可以用于实现滚动效果
   */
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>

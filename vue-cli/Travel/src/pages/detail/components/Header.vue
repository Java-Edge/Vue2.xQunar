<!--这段代码是一个Vue组件，用于显示一个带有滚动效果的景点详情页的顶部导航栏。当用户滚动页面时，导航栏的样式会发生变化，从绝对定位的样式变为固定定位的样式。-->
<!--代码中的模板部分包含两个导航栏，一个是绝对定位的，一个是固定定位的。绝对定位的导航栏在页面顶部，当用户向下滚动页面时，会逐渐消失，同时固定定位的导航栏会出现在页面顶部。这个效果是通过监听窗口滚动事件实现的，当滚动距离超过一定值时，会切换导航栏的显示状态。-->
<template>
  <div>
    <router-link
      tag="div"
      to="/"
      class="header-abs"
      v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      景点详情
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    /**
     * 在代码的脚本部分，定义了一个名为DetailHeader的Vue组件
     * 包含一个名为handleScroll的方法，用于处理滚动事件
     * 当滚动距离超过一定值时，该方法会更新组件的数据状态
     * 从而触发导航栏的样式变化
     *
     * 当滚动距离超过一定值时，该方法会更新组件的数据状态，从而触发导航栏的样式变化。
     * 获取当前页面滚动距离，并根据距离计算导航栏的透明度
     *
     */
    handleScroll () {
      // 浏览器兼容性问题
      const top = document.documentElement.scrollTop ||
        document.body.scrollTop || window.pageYOffset
      // 如果滚动距离超过60px
      if (top > 60) {
        let opacity = top / 140
        // 则将导航栏的透明度设置为计算出的值
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        // 并隐藏固定在页面顶部的导航栏
        this.showAbs = false
      } else {
        // 否则，显示固定在页面顶部的导航栏
        this.showAbs = true
      }
    }
  },
  // 因为被排除于 keep-alive 之外了
  // 所以对应的函数也要调整为原生 Vue 自带的
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<!--绝对定位的导航栏的样式为半透明的圆角矩形
固定定位的导航栏的样式为固定在页面顶部的矩形-->
<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>

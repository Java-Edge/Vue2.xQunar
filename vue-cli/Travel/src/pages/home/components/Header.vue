<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to='/city'>
      <div class="header-right">
<!--        {{ this.city }}-->
        <!-- 通过 main.js 分发出来的，所以能直接接收 -->
<!--        {{ this.$store.state.city }} 可简写：-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";

export default {
  name: 'HomeHeader',
  computed: {
    // 使用计算属性 ...mapstate(['city']) 来获取名为 city 的状态值
    // mapstate：将状态映射到组件的计算属性
    ...mapState(['city']),
    // 将 doubleCity getter 映射到当前组件
    // 在模板中使用计算属性中的 doubleCity 值进行展示或其他操作
    // 将 Vuex 中的一个 getter 映射到当前组件中，方便在模板中使用
    ...mapGetters(['doubleCity'])
  }
}
</script>

<style lang="stylus" scoped>
//样式里面引入样式，需使用@符号
@import '~@/assets/styles/varibles.styl'
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff

  .header-left
    //1rem = html font-size = 50px 86/100
    width: .64rem
    float: left

    .back-icon
      text-align: center
      font-size: .4rem

  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    margin-top: .12rem
    margin-left: .2rem
    padding-left: .2rem
    background: #fff
    border-radius: .1rem
    color: #ccc

  .header-right
    min-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    // router-link标签有默认的颜色，这里可修改
    color: #fff

    .arrow-icon
      margin-left: -.04rem
      font-size: .24rem
</style>

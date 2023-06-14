<template>
<!--  div来包裹整个轮播图，防止图片还未加载出来导致轮播图区域下面的东西提前显示
最后又移动位置了-->
  <div class="wrapper">
<!-- 通过v-if来判断是否展示轮播图，如果list数组有数据则展示，否则不展示
     而且还能让轮播图由完整数据来初始化，而非空数组-->
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
<!--      在swiper标签里面使用了一个不带页码的点号显示，通过slot来实现-->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  // 子组件中定义 data 时，必须是个函数 ES6中可省略 function 简化代码
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 轮播图支持循环轮播
        loop: true
      }
    }
  },
  computed: {
    // 判断list数组是否有数据，如果有则返回true，展示轮播图
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
// <<<  符号表示使用深度选择器，可以选择父级的所有后代元素。
.wrapper >>> .swiper-pagination-bullet-active
  // 将轮播图的当前页码的背景颜色设为白色
  background: #fff
.wrapper
  overflow: hidden
  width: 100%
  height: 0
  // 这里是为了实现固定的宽高比（标准写法）
  padding-bottom: 31.25%
  background: #eee
  .swiper-img
    width: 100%
</style>

<template>
<!--  div来包裹整个轮播图，防止图片还未加载出来导致轮播图区域下面的东西提前显示
最后又移动位置了-->
  <div class="wrapper">
<!--    通过v-if来判断是否展示轮播图，如果list数组有数据则展示，否则不展示-->
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
  // props: {
  //   list: Array
  // },
  // 子组件中定义 data 时，必须是个函数 ES6中可省略 function 简化代码
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        // 轮播图支持循环轮播
        loop: true
      },
      list: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/p/p56/1809/c4/90ba238a586bf802.jpg_750x500_eb8fb5ee.jpg'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_b2c_001/2adb694c-06a1-4e35-9117-b4481584c6f9.jpg_304x201_4f2a3178.jpg'
      }]
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

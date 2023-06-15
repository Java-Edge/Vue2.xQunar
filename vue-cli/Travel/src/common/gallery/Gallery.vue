<template>
  <!-- 绑定点击事件 点击后关闭画廊 -->
  <div class="container" @click="handleGalleryClick">
    <div class="wrapper">
      <!--swiper轮播图组件-->
      <swiper :options="swiperOptions">
        <swiper-slide
          v-for="(item, index) in imgs"
          :key="index"
        >
          <img class="gallery-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommonGallery',
  props: {
    // 接收一个名为imgs的数组类型的props，默认为空数组
    imgs: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      // 该对象包含了一些swiper轮播图的配置项
      // 文档地址 https://3.swiper.com.cn/api/index.html
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        // https://3.swiper.com.cn/api/Observer/2015/0308/219.html
        // 将observe应用于Swiper的父元素
        // 当Swiper的父元素变化时，例如window.resize，Swiper更新。
        observeParents: true,
        /**
         * https://3.swiper.com.cn/api/Observer/2015/0308/218.html
         * - swiper 样式改变（例如隐藏/显示）
         * - 或修改swiper的子元素时
         * 自动初始化swiper，就解决了swiper的宽度计算问题
         */
        observer: true
      }
    }
  },
  methods: {
    // 当容器被点击时，会触发该方法
    handleGalleryClick () {
      // 发出close事件
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    display: flex
    flex-direction: column
    justify-content: center
    z-index: 99
    position: fixed
    left: 0
    right: 0
    top: 0
    bottom: 0
    background: #000
    .wrapper
      height: 0
      width: 100%
      padding-bottom: 100%
      .gallery-img
        width: 100%
      .swiper-pagination
        color: #fff
        bottom: -1rem
</style>

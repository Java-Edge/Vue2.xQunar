<!--在页面上显示一个图标集合，通过Swiper实现分页滑动效果-->
<template>
  <div class="icons">
    <!-- 使用Swiper组件 并将swiperOption传入 swiperOption设置autoplay=false 防止自动轮播-->
    <swiper :options="swiperOption">
      <!-- v-for循环遍历page数组中的每个元素，即每一页中的每个图标-->
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <!-- 使用div包裹每个图标，并设置其样式。-->
        <div class="icon" v-for="item of page" :key="item.id">
          <div class='icon-img'>
            <img class='icon-img-content' :src='item.imgUrl'/>
          </div>
          <p class="icon-desc">{{ item.desc }}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    list: Array
  },
  data () {
    return {
      swiperOption : {
        autoplay: false
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      // 将list数组中的每个元素，按8个为一组进行分页
      // 存储在pages数组
      this.list.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<!--设置图标的基本样式，包括宽高、位置 图标图片和描述的样式。-->
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%

.icons
  margin-top: .1rem

  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%

    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: .44rem
      box-sizing: border-box
      padding: .1rem

      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%

    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: .44rem
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>

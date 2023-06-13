<!--用于在页面上展示商品列表-->
<!--组件接受一个名为list的数组作为参数，每个元素包含商品的标题、描述和图片等信息。
组件会在页面上渲染一个标题“热销推荐”和一个商品列表，
每个商品都包含标题、描述、图片和一个“查看详情”的按钮。
当用户点击某个商品时，组件会跳转到该商品的详情页。-->

<!--代码中的<template>部分定义了组件的HTML结构，包括一个标题和一个商品列表。
商品列表中的每个商品都是一个<router-link>标签，用于实现页面跳转。
:v-for指令用于遍历list数组中的每个元素，并将其绑定到变量item上，
:key指令用于为每个商品设置一个唯一的标识符。-->
<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link
        tag="li"
        class="item border-bottom"
        v-for="item of list"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl"/>
        <div class="item-info">
          <p class="item-title">{{ item.title }}</p>
          <p class="item-desc">{{ item.desc }}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  // props: {
  //   list: Array
  // },
  data () {
    return {
      list: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2306/cb/cb5d743bdfdc301ea3.water.jpg_600x330_525d681a.jpg',
        title: '海边小吃',
        desc: '景点推荐'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/vs_ceph_b2c_001/2adb694c-06a1-4e35-9117-b4481584c6f9.jpg_304x201_4f2a3178.jpg',
        title: '海边小吃',
        desc: '景点推荐'
      }
      ]
    }
  }
}
</script>

<!-- 样式都是基于flex布局实现的，以便在不同设备上适应不同的屏幕尺寸。-->
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
// 设置标题的样式
.title
  margin-top: .2rem
  line-height: .8rem
  background: #eee
  text-indent: .2rem

// .item样式用于设置商品的样式，包括图片、标题、描述和按钮等。
.item
  overflow: hidden
  display: flex
  height: 1.9rem

  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: .1rem

  .item-info
    flex: 1
    padding: .1rem
    min-width: 0

    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()

    .item-desc
      line-height: .4rem
      color: #ccc
      ellipsis()

    .item-button
      line-height: .44rem
      margin-top: .16rem
      background: #ff9300
      padding: 0 .2rem
      border-radius: .06rem
      color: #fff
</style>

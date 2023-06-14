<template>
  <ul class="list">
    <!--  @click="handleLetterClick"：组件联动事件 -->
    <!-- 根据letters数组循环渲染多个列表项 -->
    <!-- @touchstart.prevent="handleTouchStart"：绑定一个触摸事件，当用户开始触摸列表项时 -->
    <!-- @touchmove="handleTouchMove"：触摸事件，当用户在列表项上滑动时 -->
    <!-- @touchend="handleTouchEnd"：触摸事件，当用户停止触摸列表项时 -->
    <!-- @click="handleLetterClick"：点击事件，当用户点击列表项时 -->
    <li
      class="item"
      v-for="item of letters"
      :key="item"
      :ref="item"
      @touchstart.prevent="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
      @click="handleLetterClick"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      // 是否触摸屏幕
      touchStatus: false,
      // 触摸屏幕时手指的起始位置
      startY: 0,
      // 计时器,做手指滑动函数的节流
      timer: null
    }
  },
  /**
   *  在updated生命周期钩子函数
   *  通过this.$refs['A'][0].offsetTop获取元素A距离顶部的距离
   *  并将该值赋给startY属性，为后续的操作中使用startY属性来计算手指移动的距离。
   */
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    // 将值传递给 List 组件(兄弟组件），先传给父组件，在有父组件传给子组件
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    // 触摸屏幕时，将 touchStatus 设为 true
    handleTouchStart () {
      this.touchStatus = true
    },
    // 滑动字母跳转
    handleTouchMove (e) {
      // 首先判断 touchStatus 是否为 true
      if (this.touchStatus) {
        // 如果是
        if (this.timer) {
          // 清除定时器 timer
          clearTimeout(this.timer)
        }
        // 然后通过 setTimeout 方法 延迟 8 ms执行函数
        this.timer = setTimeout(() => {
          // 获取触摸点的纵坐标 touchY，计算当前所在字母的索引 index，并通过 $emit 方法将该字母传递给父组件。
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    // 触摸结束时，将 touchStatus 设为 false
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .list
    display: flex
    flex-direction: column
    justify-content: center
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    width: .4rem
    .item
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>

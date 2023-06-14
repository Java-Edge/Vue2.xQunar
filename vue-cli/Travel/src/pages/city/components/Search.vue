<template>
  <div>
<!-- 搜索框，可输入城市名或拼音进行搜索
   v-model将输入框中的内容绑定到Vue实例的keyword属性。当用户输入内容时，Vue会自动更新keyword属性的值，从而实现实时搜索 -->
<!-- 当用户在输入框中输入内容时，Vue会自动将输入框中的内容更新到keyword属性上。在Vue实例中监听keyword属性的变化，从而实现搜索功能。-->
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音" />
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li
          class="search-item border-bottom"
          v-for="item of list"
          :key="item.id"
          @click="handleCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    // 通过props属性接收cities属性
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    /**
     * 监听keyword属性，当关键词发生变化时
     * 根据关键词去筛选城市列表中的城市，并将筛选结果赋值给组件的list属性
     */
    keyword () {
      // 如果存在计时器
      if (this.timer) {
        // 先清除计时器
        clearTimeout(this.timer)
      }
      // 若keyword属性为空
      if (!this.keyword) {
        // 将list属性清空并返回
        this.list = []
        return
      }
      // 否则，设置一个计时器，延迟100ms执行操作：
      this.timer = setTimeout(() => {
        // 定义一个空数组result用于存储筛选结果
        const result = []
        for (let i in this.cities) {
          // 遍历cities对象中的所有城市
          this.cities[i].forEach((value) => {
            // 对于每个城市，如果其拼音或名称中包含关键词
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              // 则将其加入result数组
              result.push(value)
            }
          })
        }
        // 将result数组赋值给组件的list属性
        this.list = result
      }, 100)
    }
  },
  methods: {
    handleCityClick (city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      width: 100%
      height: .62rem
      padding: 0 .1rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    z-index: 1
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    background: #eee
    .search-item
      line-height: .62rem
      padding-left: .2rem
      background: #fff
      color: #666
</style>

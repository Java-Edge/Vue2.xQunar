<!--这段代码是一个Vue组件，名为DetailList
模板部分定义了一个div，其中包含一个v-for循环，循环遍历list数组中的每一个元素
将其渲染为一个item。每个item包含一个标题和一个可能存在的子列表
如果item有子列表，就会将其传递给另一个名为detail-list的组件进行渲染
脚本部分定义了DetailList组件，其props接受一个名为list的数组参数
样式部分定义了一些CSS样式，用于美化组件的外观。-->


<!--5. 在脚本中，定义DetailList组件，其props接受一个名为list的数组参数。-->
<!--6. 样式部分定义了一些CSS样式，用于美化组件的外观。-->
<template>
  <div>
    <!--2. 在模板中定义一个div，其中包含一个v-for循环
        循环遍历list数组中的每一个元素，将其渲染为一个item。-->
    <!--3. 每个item包含一个标题和一个可能存在的子列表。-->
    <div class="item" v-for="(item, index) of list" :key="index">
      <!-- 第一层循环 -->
      <div class="item-title border-bottom">
        <span class="item-title-icon"></span>
        {{item.title}}
      </div>
      <!--4. 如果item有子列表，就会将其传递给另一个名为detail-list的组件进行渲染。-->
      <div v-if="item.children" class="item-children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailList',
  props: {
    list: Array
  }
}
</script>

<style lang="stylus" scoped>
  .item-title-icon
    position: relative
    left: .06rem
    top: .06rem
    display: inline-block
    width: .36rem
    height: .36rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat
    margin-right: .1rem
    background-size: .4rem 3rem
  .item-title
    line-height: .8rem
    font-size: .32rem
    padding: 0 .2rem
  .item-children
    padding: 0 .2rem
</style>

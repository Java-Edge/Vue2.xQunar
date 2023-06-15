<!--这是一个单文件组件-->

<!--组件的模板-->
<template>
  <div id="app">
    <!-- 让 Detail 详情页不被缓存，每次都要请求后端最新值 -->
    <keep-alive exclude="Detail">
      <!--显示当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<!--组件的逻辑-->
<script>
export default {
  name: 'App'
}
</script>

<!--组件的 css 样式-->
<style>
</style>

<template>
  <div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  // 声明 局部组件，注册到 Home 组件之后，Home的模板里就能使用它了
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>

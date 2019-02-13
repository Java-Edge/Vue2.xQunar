<template>
  <Rate :value="score"></Rate>
</template>

<script setup>
import {ref} from 'vue'
import Rate from './components/Rate1.vue'
let score = ref(3)
</script>
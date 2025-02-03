<template>
  <div class="bg-primary">
    <div class="container max-w-screen-xl mx-auto px-4 py-8">
      <h1 class="text-4xl font-bold text-white">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Page Title',
  },
})
</script>
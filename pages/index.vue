<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtWelcome />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Homepage',
  layout: 'landing'
});
</script>
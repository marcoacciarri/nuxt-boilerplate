<template>
  <div>
    <PageHeader />
    <main>
      <PageTitle v-if="!isHomePage" :title="pageTitle" />
      <div>
        <slot />
      </div>
    </main>
    <PageFooter />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isHomePage = computed(() => route.path === '/');
const pageTitle = computed(() => route.meta.title as string);
</script>
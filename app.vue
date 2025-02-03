<template>
  <div class="overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const isHomePage = computed(() => route.path === '/');
const pageTitle = computed(() => route.meta.title as string);
const pageDescription = computed(() => route.meta.description as string);

useSeoMeta({
  title: pageTitle,
  description: pageDescription,
  ogTitle: pageTitle,
  ogDescription: pageDescription,
  //ogImage: 'https://yourzone.website/og.png',
  //ogUrl: `https://yourzone.website/${route.path}`
});

useSchemaOrg([
  defineWebPage({
    name: pageTitle,
    description: pageDescription
  }),
  defineWebSite({
    name: 'Yourzone Sites'
  })
]);
</script>


<style lang="scss">
@use "/assets/scss/main.scss";

.page-enter-active,
.page-leave-active,
.layout-enter-active,
.layout-leave-active {
  transition: all 0.2s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

.layout-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
</style>
<template>
  <header class="lg:px-8 bg-white shadow-md">
    <div class="nav">
      <NuxtLink to="/" class="nav__logo">
        <NuxtImg src="images/pulsi-know-people-logo.svg" width="300" height="122" alt="Pulsi Logo" />
      </NuxtLink>

      <button class="nav__toggle" @click="toggleNav">
        <Icon name="material-symbols:menu" class="nav__toggle-menu" :class="{ 'nav__toggle-menu--active': !showNav }" />
        <Icon name="material-symbols:close-rounded" class="nav__toggle-close"
          :class="{ 'nav__toggle-close--active': showNav }" />
      </button>

      <nav class="nav__desktop">
        <ul class="nav__items">
          <li class="nav__item">
            <NuxtLink to="/" class="nav__link">Home</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/about" class="nav__link">Who it's for</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/contact" class="nav__link">Contact</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="nav__link">
              <Icon name="material-symbols:account-circle" class="mr-2 text-grey-400" />
            </NuxtLink>
          </li>
        </ul>
      </nav>

      <nav class="nav__mobile" :class="{ 'nav__mobile--active': showNav, 'hidden': !mounted }">
        <ul class="nav__items space-y-8">
          <li class="nav__item">
            <NuxtLink to="/" class="nav__link">Home</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/about" class="nav__link">Who it's for</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="/contact" class="nav__link">Contact</NuxtLink>
          </li>
          <li class="nav__item">
            <NuxtLink to="#" class="nav__link">
              <Icon name="material-symbols:account-circle" class="mr-2 text-grey-400" />
            </NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
const route = useRoute();
const viewport = useViewport();
const showNav = ref(false);
const mounted = ref(false);

const toggleNav = () => {
  showNav.value = !showNav.value
}

onMounted(() => {
  mounted.value = true;
});

watchEffect(() => {
  if (!mounted.value) {
    return;
  }

  if (route.path && viewport.isLessThan('desktop')) {
    showNav.value = false;
    return;
  }

  showNav.value = true;
});
</script>

<style lang="scss" scoped>
.nav {
  @apply relative max-w-screen-xl max-h-[122px] mx-auto flex items-center justify-between;

  &__logo {
    @apply max-w-[300px] w-full mr-20 z-20 text-2xl font-bold text-gray-800;
  }

  &__desktop {
    @apply hidden lg:flex w-full items-center;
  }

  &__mobile {
    @apply lg:hidden absolute h-svh w-full top-0 left-0 right-0 items-center bg-white z-10 translate-x-full transition-all duration-300 ease-in-out;

    &--active {
      @apply translate-x-0;
    }
  }

  &__items {
    @apply w-full pt-[140px] lg:pt-0 lg:h-auto flex flex-col items-center lg:justify-end lg:flex-row;
  }

  &__item {
    @apply text-center text-2xl md:text-lg lg:text-xl hover:text-primary;

    &:last-child {
      @apply w-8;

      & .nav__link {
        @apply p-0 flex;
      }
    }
  }

  &__link {
    @apply w-full block px-4;
  }

  &__toggle {
    @apply relative z-20 lg:hidden text-7xl text-primary;
  }

  &__toggle-menu,
  &__toggle-close {
    @apply absolute right-4 -top-[40px] transition-all duration-300 ease-in-out;
  }

  &__toggle-menu {
    opacity: 0;
    transform: rotate(90deg);
  }

  &__toggle-close {
    opacity: 0;
    transform: rotate(-90deg);
  }


  &__toggle-menu--active {
    opacity: 1;
    transform: rotate(0deg);
  }


  &__toggle-close--active {
    opacity: 1;
    transform: rotate(0deg);
  }
}

.router-link-active {
  @apply text-primary;
}
</style>
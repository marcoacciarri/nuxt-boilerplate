<template>
  <div class="bg-white border-t-4 border-primary">
    <div class="container-max-1200 flex lg:flex-row-reverse gap-8 items-center justify-between py-4 text-primary-light">
      <div class="hidden lg:block"></div>

      <NuxtLink to="/" class="">
        <NuxtImg class="lg:hidden" src="images/pulsi-know-people-vertical.png" width="200" alt="Pulsi Logo" />
        <NuxtImg class="hidden lg:block" src="images/pulsi-know-people-logo.svg" width="300" alt="Pulsi Logo" />
      </NuxtLink>

      <div class="flex flex-col lg:hidden text-5xl">
        <NuxtLink to="https://instagram.com" target="_blank">
          <Icon name="fa6-brands:instagram" />
        </NuxtLink>
        <NuxtLink to="https://linkedin.com" target="_blank">
          <Icon name="fa6-brands:linkedin-in" />
        </NuxtLink>
      </div>

      <div class="flex flex-col text-xl">
        <NuxtLink to="/">Home</NuxtLink>
        <NuxtLink to="/about">About</NuxtLink>
        <NuxtLink to="/contact">Contact</NuxtLink>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row items-center just md:justify-between p-2 text-base md:text-xs bg-primary text-primary-xlight">
      <div class="flex md:mr-4 space-x-2">
        <NuxtLink to="/privacy-policy">Privacy Policy</NuxtLink>
        <NuxtLink to="/terms-conditions">Terms & Conditions</NuxtLink>
      </div>
      <div>©2025 CreativePulse All Rights Reserved</div>
    </div>
  </div>
</template>
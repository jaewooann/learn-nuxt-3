<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const nuxtApp = useNuxtApp();
console.log('nuxtApp: ', nuxtApp);

// vue application instance
// nuxtApp.vueApp.component()
// nuxtApp.vueApp.directive()
// nuxtApp.vueApp.use()

// provide 활용
// nuxtApp.provide('hello', (msg: string) => `Hello ${msg}`);
</script>

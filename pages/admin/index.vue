<template>
  <q-page padding>
    <div class="q-my-xl text-center">
      <PageTitle title="Admin Page" />
      <PageDescription description="admin layout 실습을 위한 페이지 입니다." />
    </div>
  </q-page>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'admin',
  // middleware: ['admin-only'],
});
</script>

<style scoped></style>

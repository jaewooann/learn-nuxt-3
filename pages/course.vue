<template>
  <q-page padding>
    <div class="row q-col-gutter-md">
      <div class="col-3">
        <q-card>
          <q-item-label header
            >강의 로드맵{{ $hello('gymcoding') }}</q-item-label
          >
          <q-list bordered separator>
            <q-item
              v-for="(course, index) in courses"
              :key="course.courseSlug"
              v-ripple
              clickable
              :to="course.path"
            >
              <q-item-section>
                {{ index + 1 }}. {{ course.title }}
              </q-item-section>
            </q-item>
            <q-item v-ripple clickable to="/course/empty">
              <q-item-section> Empty Course (throw error) </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
      <div class="col">
        <NuxtErrorBoundary>
          <NuxtPage />
          <template #error="{ error }">
            <div class="flex flex-center column q-py-xl">
              <div class="text-h6 q-mb-lg">
                {{ error }}
              </div>
              <q-btn
                label="Reset"
                color="positive"
                no-caps
                @click="error.value = null"
              />
            </div>
          </template>
        </NuxtErrorBoundary>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
const { courses } = await useCourses();
</script>

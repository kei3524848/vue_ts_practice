<script setup lang="ts">
import type { CategoryTask } from "../types/";
defineProps<{
  categoryTask: CategoryTask;
}>();
</script>

<template>
  <div class="bg-gray-200 m-2 p-2 text-sm">
    <span class="font-bold"> {{ categoryTask.name }}</span>
  </div>
</template>

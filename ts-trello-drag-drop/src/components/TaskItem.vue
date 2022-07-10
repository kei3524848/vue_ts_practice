<script setup lang="ts">
import type { Task } from "../types/";

defineProps<{
  task: Task;
}>();
</script>

<template>
  <div>
    {{ task.name }}
  </div>
</template>

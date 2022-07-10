<script setup lang="ts">
import type { Category } from "../types";

defineProps<{
  category: Category;
}>();
</script>

<template>
  <div class="bg-gray-200 m-2 p-2 text-sm">
    <span class="font-bold"> {{ category.name }}</span>
  </div>
</template>

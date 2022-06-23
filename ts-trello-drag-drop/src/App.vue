<script setup lang="ts">
import category_data from "./data/categories.json";
import task_data from "./data/tasks.json";

import { ref, computed } from "vue";
import type { Category, Task, CategoryTask } from "./types/";
import CategoryItem from "./components/CategoryItem.vue";

const categories = ref<Category[]>(category_data);
const tasks = ref<Task[]>(task_data);

const renderCategoryTask = computed<CategoryTask[]>(() => {
  return categories.value.map((c) => {
    const filterTasks = tasks.value.filter((t) => t.category_id === c.id);

    return {
      id: c.id,
      name: c.name,
      tasks: filterTasks,
    };
  });
});
</script>

<template>
  <div class="h-12 p-2">
    <h1 class="text-sm font-bold">Trello風タスク管理</h1>
    <div class="flex">
      <CategoryItem
        class="min-w-[400px]"
        v-for="categoryTask in renderCategoryTask"
        :key="categoryTask.id"
        :categoryTask="categoryTask"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<script setup lang="ts">
import category_data from "./data/categories.json";
import task_data from "./data/tasks.json";

import { ref, computed } from "vue";
import type { Category, Task, CategoryTask } from "./types/";
import CategoryItem from "./components/CategoryItem.vue";

const categories = ref<Category[]>(category_data);
const tasks = ref<Task[]>(task_data);
const dragTask = ref<Task | null>(null);

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

const setDragTask = (task: Task): void => {
  dragTask.value = task;
};

const dragOverTask = (overTask: Task): void => {
  if (dragTask.value?.id !== overTask.id) {
    const deleteIndex = tasks.value.findIndex(
      (task) => task.id === dragTask.value?.id
    );
    const addIndex = tasks.value.findIndex((task) => task.id === overTask.id);
    if (dragTask.value !== null) {
      tasks.value.splice(deleteIndex, 1);
      dragTask.value.category_id = overTask.category_id;
      tasks.value.splice(addIndex, 0, dragTask.value);
    }
  }
};

const dragOverCategory = (categoryTask: CategoryTask): void => {
  if (dragTask.value?.category_id !== categoryTask.id) {
    const filterTasks = tasks.value.filter(
      (task) => task.category_id === categoryTask.id
    );
    if (filterTasks.length === 0 && dragTask.value !== null) {
      dragTask.value.category_id = categoryTask.id;
    }
  }
};
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
        @dragover="dragOverCategory(categoryTask)"
        @setDragTask="setDragTask"
        @dragOverTask="dragOverTask"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

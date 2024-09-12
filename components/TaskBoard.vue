<template>
  <div class="container my-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h2>Task Board</h2>
      <div>
        <input
            v-model="searchQuery"
            type="text"
            class="form-control"
            placeholder="Search tasks..."
        />
      </div>
      <router-link to="/task/new" class="btn btn-sm btn-success"><i class="bi bi-plus-lg"></i></router-link>
    </div>
    <div class="row">
      <TaskColumn
          v-for="status in taskStore.statuses"
          :key="status"
          :status="status"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, provide } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

const taskStore = useTaskStore();
const searchQuery = ref('');
provide('searchQuery', searchQuery);
</script>

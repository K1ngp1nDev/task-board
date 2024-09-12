<template>
  <div class="card mb-3">
    <div class="card-header d-flex justify-content-between align-items-center">
      <h5 class="card-title mb-0">{{ task.name }}</h5>
      <span
          :class="[
          'badge',
          task.priority === 'High'
            ? 'bg-danger'
            : task.priority === 'Medium'
            ? 'bg-warning text-dark'
            : 'bg-success',
        ]"
      >
        {{ task.priority }}
      </span>
    </div>
    <div class="card-body">
      <p class="card-text">{{ task.description }}</p>
      <p class="card-text mb-1">
        <strong>Ответственный:</strong> {{ task.responsiblePerson }}
      </p>
      <p class="card-text mb-1">
        <strong>Исполнители:</strong> {{ task.performers.join(', ') }}
      </p>
    </div>
    <div class="card-footer d-flex justify-content-end">
      <button
          class="btn btn-sm btn-primary me-2"
          @click="editTask"
      >
        <i class="bi bi-pencil"></i>
      </button>
      <button
          class="btn btn-sm btn-danger"
          @click="deleteTask"
      >
        <i class="bi bi-trash"></i>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { useTaskStore } from '@/stores/taskStore';

const props = defineProps<{ task: Task }>();
const router = useRouter();
const taskStore = useTaskStore();

function editTask() {
  router.push(`/task/${props.task.id}/edit`);
}

function deleteTask() {
  taskStore.deleteTask(props.task.id);
}
</script>

<style scoped>
.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
}

.btn:hover {
  opacity: 0.9;
}

</style>

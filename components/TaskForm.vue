<template>
  <div class="container my-4">
    <h2>{{ isEditMode ? 'Edit Task' : 'New Task' }}</h2>
    <form @submit.prevent="onSubmit">
      <div class="mb-3">
        <label for="taskName" class="form-label">Name</label>
        <input
            v-model="task.name"
            type="text"
            class="form-control"
            id="taskName"
            required
        />
      </div>
      <div class="mb-3">
        <label for="taskDescription" class="form-label">Description</label>
        <textarea
            v-model="task.description"
            class="form-control"
            id="taskDescription"
            rows="3"
        ></textarea>
      </div>
      <div class="mb-3">
        <label for="responsiblePerson" class="form-label">Responsible Person</label>
        <input
            v-model="task.responsiblePerson"
            type="text"
            class="form-control"
            id="responsiblePerson"
        />
      </div>
      <div class="mb-3">
        <label for="performers" class="form-label">Performers</label>
        <input
            v-model="performersInput"
            type="text"
            class="form-control"
            id="performers"
            placeholder="Comma-separated names"
        />
      </div>
      <div class="row">
        <div class="col-md-6 mb-3">
          <label for="status" class="form-label">Status</label>
          <select v-model="task.status" class="form-select" id="status">
            <option
                v-for="status in taskStore.statuses"
                :key="status"
                :value="status"
            >
              {{ status }}
            </option>
          </select>
        </div>
        <div class="col-md-6 mb-3">
          <label for="priority" class="form-label">Priority</label>
          <select v-model="task.priority" class="form-select" id="priority">
            <option
                v-for="priority in taskStore.priorities"
                :key="priority"
                :value="priority"
            >
              {{ priority }}
            </option>
          </select>
        </div>
      </div>
      <button type="submit" class="btn btn-primary me-2">
        {{ isEditMode ? 'Update Task' : 'Create Task' }}
      </button>
      <router-link to="/" class="btn btn-secondary">Cancel</router-link>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import { useRoute, useRouter } from 'vue-router';
import type { Task } from '@/types/Task';

const taskStore = useTaskStore();
const route = useRoute();
const router = useRouter();

const isEditMode = computed(() => route.params.id !== undefined);
const task = ref<Task>({
  id: Date.now(),
  name: '',
  description: '',
  responsiblePerson: '',
  performers: [],
  status: 'TODO',
  priority: 'Medium',
});

const performersInput = ref('');

onMounted(() => {
  if (isEditMode.value) {
    const existingTask = taskStore.tasks.find(
        (t) => t.id === Number(route.params.id)
    );
    if (existingTask) {
      task.value = { ...existingTask };
      performersInput.value = task.value.performers.join(', ');
    } else {
      router.push('/');
    }
  }
});

function onSubmit() {
  task.value.performers = performersInput.value
      .split(',')
      .map((name) => name.trim());

  if (isEditMode.value) {
    taskStore.updateTask(task.value);
  } else {
    taskStore.addTask(task.value);
  }
  router.push('/');
}
</script>

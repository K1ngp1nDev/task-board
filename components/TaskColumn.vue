<template>
  <div class="col-md-4 mb-4">
    <div class="card h-100 bg-body-secondary ">
      <div
          class="card-header text-center text-white"
          :class="statusClass"
      >
        <h5 class="mb-0">{{ status }}</h5>
      </div>
      <div class="card-body p-0">
        <Draggable
            v-model="localTasks"
            :group="'tasks'"
            item-key="id"
            @change="onDragChange"
            class="task-column"
        >
          <template #item="{ element }">
            <TaskCard :task="element" />
          </template>
        </Draggable>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, computed, inject, onMounted } from 'vue';
import { useTaskStore } from '@/stores/taskStore';
import Draggable from 'vuedraggable';
import type { Task } from '@/types/Task';

const props = defineProps<{ status: string }>();
const taskStore = useTaskStore();
const searchQuery = inject('searchQuery', '');

const filteredTasks = computed(() =>
    taskStore.tasks.filter(
        (task) =>
            task.status === props.status &&
            task.name.toLowerCase().includes((searchQuery.value as string).toLowerCase())
    )
);

const localTasks = ref<Task[]>([]);

onMounted(() => {
  localTasks.value = [...filteredTasks.value];
});

watch(
    filteredTasks,
    (newTasks) => {
      localTasks.value = [...newTasks];
    },
    { immediate: true }
);

function onDragChange(event: any) {
  const { added, moved, removed } = event;

  if (added) {
    const addedTask: Task = added.element;
    addedTask.status = props.status as Task['status'];
    taskStore.updateTask(addedTask);
  }
}

const statusClass = computed(() => {
  switch (props.status) {
    case 'TODO':
      return 'bg-secondary';
    case 'In Progress':
      return 'bg-primary';
    case 'Done':
      return 'bg-success';
    default:
      return 'bg-light text-dark';
  }
});
</script>

<style scoped>
.task-column {
  min-height: 80vh;
  border: 1px solid #dee2e6;
  padding: 10px;
  border-radius: 5px;
}
</style>

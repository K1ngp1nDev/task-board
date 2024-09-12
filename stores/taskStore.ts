import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Task } from '@/types/Task';

export const useTaskStore = defineStore('taskStore', () => {
    const tasks = ref<Task[]>([]);
    const statuses = ref(['TODO', 'In Progress', 'Done']);
    const priorities = ref(['Low', 'Medium', 'High']);

    function addTask(task: Task) {
        tasks.value.push(task);
    }

    function updateTask(updatedTask: Task) {
        const index = tasks.value.findIndex((task) => task.id === updatedTask.id);
        if (index !== -1) {
            tasks.value.splice(index, 1, updatedTask);
        } else {
            tasks.value.push(updatedTask);
        }
    }

    function deleteTask(taskId: number) {
        tasks.value = tasks.value.filter((task) => task.id !== taskId);
    }

    return {
        tasks,
        statuses,
        priorities,
        addTask,
        updateTask,
        deleteTask,
    };
});

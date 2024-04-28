import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useTodo = defineStore("todo", () => {
  const todoList = ref([]);
  const id = ref(0);

  //Actions
  function addTodo(task) {
    const date = new Date();
    const newTask = {
      id: id.value++,
      task,
      completed: false,
      date,
    };
    this.todoList.push(newTask);
  }
  function toggleTodo(id) {
    const task = this.todoList.find((t) => t.id === id);
    if (task) {
      task.completed = !task.completed;
    }
  }
  function deleteTodo(id) {
    this.todoList = this.todoList.filter((t) => t.id !== id);
  }

  //Getters
  const totalTodo = computed(() => todoList.value.length);
  const totalCompleted = computed(
    () => todoList.value.filter((i) => i.completed).length
  );

  return {
    todoList,
    addTodo,
    toggleTodo,
    deleteTodo,
    totalTodo,
    totalCompleted,
  };
});

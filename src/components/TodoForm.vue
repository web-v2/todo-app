<script setup>
import { useTodo } from "@/stores/todo";
import {ref} from "vue";
const store = useTodo();
const task = ref("");

function addNewTask(){
    if(task.value.trim().length === 0){
       return
    }
    store.addTodo(task.value.trim());
    task.value="";
}
</script>

<template>
    <form @submit.prevent="addNewTask" class="flex mb-3">
        <input type="text" name="task" id="task" v-model="task" class="rounded-lg w-full h-10 px-3 text-base border border-primary focus: border-secondary focus:border-2 focus:outline-none mr-2" placeholder="Name task">
        <button class="bg-secondary rounded-lg text-white px-4 py-2">Add</button>
    </form>    
</template>
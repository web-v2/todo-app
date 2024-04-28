<script setup>
import { computed } from 'vue';
import { storeToRefs } from 'pinia';
import { useTodo } from '@/stores/todo';
import TodoForm from './TodoForm.vue';
import TodoList from './TodoList.vue';
import ClipBoardList from 'vue-material-design-icons/ClipBoardList.vue';
import Information from 'vue-material-design-icons/Information.vue';
const store = useTodo();
const {totalTodo, totalCompleted} = storeToRefs(store);
const hasTodo = computed( ()=>{
    return store.totalTodo > 0 ? true:false;
})
</script>

<template>
    <div class="bg-accent p-10 rounded-lg shadow-lg">
        <h1 class="text-3xl text-white text-center font-bold mb-3"><ClipBoardList></ClipBoardList> To do App</h1>  
        <p v-if="hasTodo" class="text-sm text-white text-center mb-3">Total Completadas:  {{ totalCompleted }}/{{ totalTodo }}</p>
        <TodoForm/>
        <TodoList/> 
        <div v-if="!hasTodo" class="bg-primary text-white p-2 rounded-lg mt-2">
            <p><span class="text-lg"><Information></Information></span> Nothing to do ? Add new task!!!</p>
        </div> 
    </div>       
</template>

<style scoped>
.title{
    font-size: 20px;
    font-weight: bold;
}
</style>
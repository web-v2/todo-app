<script setup>
import {useTodo} from "../stores/todo";
import TodoListItem from "./TodoListItem.vue";
const store = useTodo();
function formatDate(date) {
    const myDate = new Date(date);
    const h = ( 0 + String(myDate.getHours())).slice(-2);
    const m = ( 0 + String(myDate.getMinutes())).slice(-2);
    const s = ( 0 + String(myDate.getSeconds())).slice(-2);
    return `${h}:${m}:${s}`;
}
</script>

<template>
    <ul>
        <template v-for="todo in store.todoList" :key="`todo-item${todo.id}`">
            <div>
                <todoListItem 
                    :id="todo.id" 
                    :task="todo.task" 
                    :completed="todo.completed" 
                    :date="formatDate(todo.date)">
                </todoListItem>                
            </div>
        </template>        
    </ul>   
</template>
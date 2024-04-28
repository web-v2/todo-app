<script setup>
import {useCounter} from "../stores/counter";
import {storeToRefs} from 'pinia';
const store = useCounter();
const {counter,name, dobleCount,nameUpercase} = storeToRefs(store);
const {increment,decrement,reverseName} = store;
</script>

<template>
    <div>
        <div>
            <p>Count: {{counter}}</p>
            <p>Doble: {{dobleCount}}</p>
            <p>Name: {{name}}</p>
            <p>NameUpercase: {{nameUpercase}}</p>
            <hr>
            <button @click="increment">Mas+</button>
            <button @click="decrement">Menos-</button>
            <hr>
            <button @click="reverseName">Reversar Nombre</button>
        </div>
    </div>
</template>
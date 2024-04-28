import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounter = defineStore("counter", () => {
  const counter = ref(0);
  const name = ref("SamirV");

  function increment() {
    counter.value++;
  }
  function decrement() {
    counter.value--;
  }
  function reverseName() {
    const rv = name.value.split("").reverse().join("");
    name.value = rv;
  }

  const dobleCount = computed(() => counter.value * 2);
  const nameUpercase = computed(() => name.value.toUpperCase());

  return {
    counter,
    name,
    increment,
    decrement,
    reverseName,
    dobleCount,
    nameUpercase,
  };
});

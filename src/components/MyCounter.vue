<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button class="btn" @click="increase">+1</button>
      <button class="btn" @click="decrease">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from './composables/useCounter';
const props = defineProps<{
  value: number;
}>();

const { counter, squareCounter, increase, decrease } = useCounter(props.value);
</script>

<style scoped>
.btn {
  @apply p-2 bg-blue-500 rounded hover:bg-blue-700 mr-2;
}
</style>

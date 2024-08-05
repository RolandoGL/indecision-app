<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3>Square: {{ squareCounter }}</h3>
    <div>
      <button @click="increase">+1</button>
      <button @click="decrease">-1</button>
    </div>
  </section>
</template>

<script lang="ts" src="./MyCounterScript.ts"></script>

<style scoped>
h1 {
  color: green;
}
</style>

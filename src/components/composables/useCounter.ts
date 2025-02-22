import { ref, computed } from 'vue';

export const useCounter = (initialValue: number) => {
  const counter = ref(initialValue);
  const squareCounter = computed(() => counter.value * counter.value);
  const increase = () => counter.value++;
  const decrease = () => counter.value--;

  return {
    counter,
    squareCounter,

    increase,
    decrease,
  };
};

import { ref, computed, defineComponent } from 'vue';

// // const props = defineProps({
// //   value: { type: Number, required: true, default: 0 },
// // });

// const props = defineProps<{
//   value: number;
// }>();
// const counter: number = ref(props.value);
// const squareCounter: number = computed(() => counter.value * counter.value);

// const increase = () => counter.value++;
// const decrease = () => counter.value--;

export default defineComponent({
  props: {
    value: { type: Number, required: true },
  },
  setup(props) {
    const counter = ref(props.value);
    const squareCounter = computed(() => counter.value * counter.value);
    const increase = () => counter.value++;
    const decrease = () => counter.value--;
    return {
      counter,
      squareCounter,

      increase,
      decrease,
    };
  },
});

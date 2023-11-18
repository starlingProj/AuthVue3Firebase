<script setup>
import { onMounted } from "vue";
import {useFruitStore} from "@/store/FruitStore"
const fruitStore = useFruitStore()

onMounted(async () => {
  await fruitStore.getFruits();
});
</script>

<template>
  <main class="flex flex-col items-center ">
  <span class="mb-5 text-3xl text-amber-600 font-extrabold ">Some info from Back-End</span>
  <div class="flex flex-col gap-3">
    
    <div v-for="(fruit, i) in fruitStore.fruits" :key="i">
      <section>
        Fruit color = {{ fruit.color }} Fruit sweet = {{ fruit.sweet }}
        {{ fruit }}
      </section>
    </div>
  </div>
</main>
</template>

<style scoped></style>

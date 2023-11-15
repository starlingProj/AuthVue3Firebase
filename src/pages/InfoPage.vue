<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "../store/AuthStore";
import axios from "axios";

const authStore = useAuthStore();

const fruits = ref();
const getFruits = async () => {
  try {
    const responce = await axios.get(
      `https://testauth-2ea5c-default-rtdb.europe-west1.firebasedatabase.app/info.json`
    );
    fruits.value=responce.data;
  } catch (err) {
    console.log(err.responce);
  }
};
onMounted(async()=>{
    await getFruits()
})
</script>

<template>
  <div class="flex flex-col gap-3">
    <div v-for="(fruit, i) in fruits" :key="i">
      <section>
        Fruit color = {{ fruit.color }} Fruit sweet = {{ fruit.sweet }} {{fruit}}
      </section>
    </div>
  </div>
  <!-- https://testauth-2ea5c-default-rtdb.europe-west1.firebasedatabase.app/ -->
</template>

<style scoped></style>

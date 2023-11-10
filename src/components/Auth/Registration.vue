<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/store/AuthStore";

const authStore = useAuthStore();

const userReg = reactive({
  email: "",
  pass: "",
});
const setReg = async () => {
  await authStore.signup({ email: userReg.email, password: userReg.pass });
  console.log("asd");
};
</script>
<template>
  <div class="flex flex-col justify-center items-center min-h-[500px]">
    <form
      class="flex flex-col border-4 p-20 bg-purple-700"
      @submit.prevent="setReg"
    >
      <input
        v-model="userReg.email"
        class="h-10 mb-5"
        type="email"
        placeholder="Email"
      />
      <input
        v-model="userReg.pass"
        class="h-10"
        type="password"
        placeholder="Password"
      />
      <button class="mt-3 bg-red-600" type="submit">Відправити</button>
    </form>
  </div>
</template>

<style scoped></style>

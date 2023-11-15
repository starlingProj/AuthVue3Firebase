<script setup>
import { reactive } from "vue";
import { useAuthStore } from "@/store/AuthStore";
import { useRouter } from 'vue-router';

const router = useRouter();

const authStore = useAuthStore();

const userReg = reactive({
  email: "",
  pass: "",
});
const setReg = async () => {
   await authStore.auth({ email: userReg.email, password: userReg.pass },'signup');
   router.push('/info')
  };

</script>
<template>
   <div class="w-[700px] p-2 bg-pink-600 text-center text-4xl" v-if="authStore.error">{{authStore.error}}</div>
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
      <button class="mt-3 bg-red-600 p-3" type="submit">Відправити</button>
      <router-link class ="mt-3 text-red-200" :to="{ name: 'Login' }">Вже зареєстровані?</router-link>
    </form>
  </div>
</template>

<style scoped></style>

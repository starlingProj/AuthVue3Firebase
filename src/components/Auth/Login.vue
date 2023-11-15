<script setup>
import { reactive } from 'vue';
import { useAuthStore } from "@/store/AuthStore";
import { useRouter } from 'vue-router';

const router = useRouter();

const authStore = useAuthStore();
const userLog = reactive({
    email:'',
    pass:''
})
const setLogin = async()=>{
     await authStore.auth({email:userLog.email, password:userLog.pass},'signin')
     router.push('/info')
}



</script>
<template>
    <div class="w-[700px] p-2 bg-pink-600 text-center text-4xl" v-if="authStore.error">{{authStore.error}}</div>
    <div class="flex flex-col  justify-center items-center min-h-[500px] ">
        <form class="flex flex-col border-4 p-20 bg-amber-400"
        @submit.prevent="setLogin()"
        >
            <input v-model="userLog.email" class="h-10 mb-5" type="email" placeholder="Email">
            <input v-model="userLog.pass" class="h-10" type="password" placeholder="Password">
            <button class="mt-3 bg-blue-400 border-4 border-separate border-red-300 p-3" type="submit"> Відправити</button>
            <router-link class ="mt-3 text-lime-900" :to="{ name: 'Registration' }">Ще не зареєстровані?</router-link>
        </form>
    </div>
</template>


<style  scoped>

</style>
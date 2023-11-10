<script setup>
import { reactive } from 'vue';

const userLog = reactive({
    email:'',
    pass:''
})
const setLogin = ()=>{
    console.log(userLog.email, userLog.pass)
}
</script>
<template>
    <div class="flex flex-col  justify-center items-center min-h-[500px] ">
        <form class="flex flex-col border-4 p-20 bg-amber-400"
        @submit.prevent="setLogin()"
        >
            <input v-model="userLog.email" class="h-10 mb-5" type="email" placeholder="Email">
            <input v-model="userLog.pass" class="h-10" type="password" placeholder="Password">
            <button class="mt-3 bg-blue-400 border-4 border-separate border-red-300" type="submit"> Відправити</button>
        </form>
    </div>
</template>


<style  scoped>

</style>
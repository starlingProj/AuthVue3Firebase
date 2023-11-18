<script setup>
import { useAuthStore } from '../store/AuthStore';

const authStore = useAuthStore()


</script>
<template>
  <div class="flex flex-col min-h-screen">
    <div class="mt-10 ml-12 flex justify-between">
      <h1
        class="font-normal text-5xl font-[alata] tracking-[6px] text-[#171717]"
      >
        <router-link :to="{ name: 'Home' }">WEDD</router-link>
      </h1>
      <div v-if="!authStore.UserInfo.token"
        class="p-1 rounded-full bg-red-100 text-[#914cdf] mr-20 w-80 flex justify-around items-center"
      >
        <router-link to="/register"> Зареєструватися</router-link>
        <router-link to="/login"> Увійти</router-link>
      </div>
      <div v-else
        class="p-1 rounded-full bg-red-100 text-[#914cdf] mr-20 w-80 flex justify-around items-center"
      >
        <router-link to="/info"> Інформація</router-link>
        <router-link @click.prevent = "authStore.logoutUser()" to="/"> Вийти</router-link>
      </div>
    </div>
    

    <main
      class="min-w-full flex justify-center items-center mt-6 font-[roboto] grow"
    >
      <router-view />
    </main>
    <footer class="bg-yellow-400 h-40 flex flex-row justify-around">
      <div class="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        harum, atque accusantium voluptatem, sed enim odit modi ut adipisci ex
        perspiciatis recusandae facere voluptates corporis facilis provident
        similique quisquam quibusdam!
      </div>
      <div class="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
        harum, atque accusantium voluptatem, sed enim odit modi ut adipisci ex
        perspiciatis recusandae facere voluptates corporis facilis provident
        similique quisquam quibusdam!
      </div>
    </footer>
  </div>
</template>

<style></style>

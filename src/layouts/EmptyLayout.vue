<script setup></script>
<template>
  <div class="mt-10 ml-12 flex justify-between">
    <h1 class="font-normal text-5xl font-[alata] tracking-[6px] text-[#171717]">
      <router-link :to="{ name: 'Home' }">WEDD</router-link>
    </h1>
    <div
      class="p-1 rounded-full bg-red-100 text-[#914cdf] mr-20 w-80 flex justify-around items-center"
    >
      <router-link to="/register"> Зареєструватися</router-link>
      <router-link to="/login"> Увійти</router-link>
    </div>
  </div>
  <div class="min-w-full flex justify-center items-center mt-6 font-[roboto]">
    <router-view />
  </div>
</template>

<style></style>

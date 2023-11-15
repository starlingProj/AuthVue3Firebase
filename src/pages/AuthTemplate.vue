<script setup></script>
<template>
  <h1 class="font-normal text-5xl font-[alata] tracking-[6px] text-[#171717]">
    <router-link :to="{ name: 'Home' }">WEDD</router-link>
  </h1>
  <div>
    <router-view></router-view>
  </div>
</template>

<style scoped></style>

<script setup></script>
<template>
    <div class="flex flex-col min-h-screen">
  <header class="mt-10 ml-12 flex justify-between">
    <h1 class="font-normal text-5xl font-[alata] tracking-[6px] text-[#171717]">
      <router-link :to="{name:'Home'}">WEDD</router-link>
    </h1>
    <div class="w-[1500px] flex justify-around items-center list-none mr-4">
      <ul></ul>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
      <li class="bg-green-400 ml-1 p-1 rounded-full">SomeCategory</li>
    </div>
</header>
  <main class="min-w-full flex justify-center items-center mt-6 font-[roboto] grow">
    <router-view />
  </main>
  <footer class="bg-yellow-400 h-40 flex flex-row justify-around">
    <div class=" w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum, atque accusantium voluptatem, sed enim odit modi ut adipisci ex perspiciatis recusandae facere voluptates corporis facilis provident similique quisquam quibusdam!</div>
    <div class=" w-1/3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum harum, atque accusantium voluptatem, sed enim odit modi ut adipisci ex perspiciatis recusandae facere voluptates corporis facilis provident similique quisquam quibusdam!</div>
  </footer>
</div>
</template>

<style></style>

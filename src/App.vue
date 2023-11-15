<script setup>
import { RouterView } from "vue-router";
import AppLayout from "./layouts/AppLayout.vue";

import { useAuthStore } from "./store/AuthStore";
const authStore = useAuthStore()

authStore.getTokens

</script>

<template>
 <AppLayout>
    <RouterView />
  </AppLayout>
</template>

<style scoped></style>


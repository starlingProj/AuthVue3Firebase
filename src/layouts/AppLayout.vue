<script setup>
import EmptyLayout from './EmptyLayout.vue'
import { shallowRef, watch } from 'vue'
import { useRoute } from 'vue-router'
import { AppLayoutToFileMap } from '../layouts/layouts.types.js'
const layout = shallowRef('')
const route = useRoute()
watch(
  () => route.meta,
  async (meta) => {
    try {
      const layoutEnumValue = meta.layout
      const layoutComponentName = AppLayoutToFileMap[layoutEnumValue].split('.vue')[0]
      const component = await import(`../layouts/${layoutComponentName}.vue`)
      layout.value = component?.default || EmptyLayout
    } catch (e) {
      layout.value = EmptyLayout
    }
  },
  { immediate: true }
)
</script>

<template>
  <component :is="layout"> </component>
</template>

<style scoped></style>

<script setup lang="ts">
import { ref } from "vue";
const isActive = ref(false);
</script>

<template lang="pug">
button.text-xs.text-white.mr-4.relative.flex.justify-center.items-center.flex-col.cursor-pointer(
  @mouseenter="isActive = true",
  @mouseleave="isActive = false"
)
  p
    slot
  .transition-all.border-b-2(:class="isActive ? 'w-full' : 'w-0'")
</template>
<script setup lang="ts">
import { ref } from "vue";
const isActive = ref(false);
</script>

<template lang="pug">
button.px-4.py-1.relative.flex.text-sm.text-white.rounded.font-inter(
  @mouseenter="isActive = true",
  @mouseleave="isActive = false"
) click me
  .border-l-2.border-t-2.border-violet-500.absolute.transition-all(
    class="h-1/2 w-1/4",
    :class="[{ '-top-2 -left-2 opacity-0': !isActive }, { '-left-1 -top-1': isActive }]"
  )
  .border-r-2.border-b-2.border-violet-500.absolute.transition-all(
    class="h-1/2 w-1/4",
    :class="[{ '-right-2 -bottom-2 opacity-0': !isActive }, { '-right-1 -bottom-1': isActive }]"
  )
  .border-l-2.border-b-2.border-violet-500.absolute.transition-all(
    class="h-1/2 w-1/4",
    :class="[{ '-left-2 -bottom-2 opacity-0': !isActive }, { '-left-1 -bottom-1': isActive }]"
  )
  .border-r-2.border-t-2.border-violet-500.absolute.transition-all(
    class="h-1/2 w-1/4",
    :class="[{ '-right-2 -top-2 opacity-0': !isActive }, { '-right-1 -top-1': isActive }]"
  )
</template>

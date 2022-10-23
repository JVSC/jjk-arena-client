<script setup lang="ts">
import { ref, onBeforeUnmount } from "vue";
const isLandscape = ref(true);
const setOrientation = () => {
  if (window.innerHeight > window.innerWidth) isLandscape.value = false;
  else isLandscape.value = true
};
window.addEventListener("resize", setOrientation);
onBeforeUnmount(() => {
  window.removeEventListener("resize", setOrientation);
});
</script>

<template lang="pug">
.bg-neutral-800.bg-opacity-50.w-full.h-full.flex.justify-center.items-center.absolute(
  v-if="!isLandscape"
)
  p.text-sm.bg-neutral-200.bg-opacity-75.w-72.rounded-md.p-4(class="top-1/2") This application is best used in Landscape mode, please rotate your device
.bg-gradient-to-tr.from-primary-700.to-secondary-700.overflow-hidden.flex.flex-col.w-full.h-full
  .w-full.h-20
    slot(name="header")
  .w-full.flex-1
    slot(name="content")
  .w-full.h-20
    slot(name="footer")
</template>
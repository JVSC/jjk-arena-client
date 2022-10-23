<script setup lang="ts">
defineProps({
  src: {
    type: String,
    default: "https://imgur.com/rIqpYOy.jpg",
  },
  alt: {
    type: String,
    default: "skill avatar",
  },
});
</script>

<template lang="pug">
img.overflow-hidden.flex.items-center.justify-center(
  class="max-w-[5rem] max-h-[5rem]",
  :src="src",
  :alt="alt"
)
</template>

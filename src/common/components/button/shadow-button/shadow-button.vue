<script lang="ts" setup>
import { ref, defineProps } from "vue";
const isActive = ref(false);
</script>

<template lang="pug">
button.overflow-hidden.flex.justify-center.items-center.font-inter.px-2.py-1.text-white.transition-all.text-sm.relative(
    @mouseenter="isActive = true",
    @mouseleave="isActive = false"
) click me
    .w-full.h-full.bg-gradient-to-l.from-zinc-900.to-transparent.absolute.-z-10.transition-all.duration-300(
        :class="[{ 'translate-x-full': !isActive }]"
    )
</template>



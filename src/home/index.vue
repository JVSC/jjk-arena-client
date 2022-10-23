<script setup lang="ts">
import { isMobile } from "../common/composables/mobile-detector";
import desktop from "./index.desktop.vue";
import mobile from "./index.mobile.vue";
</script>

<template lang="pug">
mobile(v-if="isMobile()")
desktop(v-else)
</template>


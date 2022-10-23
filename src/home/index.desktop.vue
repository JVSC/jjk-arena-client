<script setup lang="ts">
import Layout from "../common/layouts/default-layout.desktop.vue";
import Navigation from "../common/components/navigation/default-navigation.desktop.vue";
import NavButton from "../common/components/button/nav-button.vue";
import CharacterHero from "./components/character-hero.vue";
import { ref } from "vue";
const isActive = ref(false);
</script>


<template lang="pug">
layout
  template(v-slot:header)
    navigation.justify-between.px-8
      .w-9.h-9.rounded-full.bg-white.border-2.mr-4
      .flex
        nav-button ladder
        nav-button statistics
        nav-button challenges

  template(v-slot:content)
    .w-full.h-full.flex.justify-center.items-center
      character-hero

  template(v-slot:footer)
    p hello
</template>
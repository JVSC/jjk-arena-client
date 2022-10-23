<script setup lang="ts">
import { ref } from "vue";
const props = defineProps({
  src: {
    type: String,
    default: "https://imgur.com/Lv9kQ0D.jpg",
  },
  alt: {
    type: String,
    default: "Avatar",
  },
  volume: {
    type: Number,
    default: 50
  },
  particles: {
    type: Boolean,
    default: true
  }
});
const leftOrRight = () => {
  const value = Math.random() < 0.5 ? 0 : 1;
  if (value) return "right";
  return "left";
};
const randomPercentage = () => {
  return Math.floor(Math.random() * 90);
};

const particlePlacement = () => {
  const pos = leftOrRight();
  return `${pos}: ${randomPercentage()}%`;
};

const isActive = ref(false);
</script>


<template lang="pug">
.cursor-pointer.relative.w-20.h-20.flex.justify-center.items-center(
  @mouseenter="isActive = true",
  @mouseleave="isActive = false"
)
  img.rounded.shadow(:src="src", :alt="alt", srcset="")
  .fire.absolute.bottom-0.flex.items-end.justify-end.items-center.w-full.h-full.-z-10.transition-all
    .particle.w-10.h-10.absolute.bottom-0(
      v-if='particles'
      v-for="particle in volume",
      :key="particle",
      :style="particlePlacement()"
    )
</template>

<style scoped lang="scss">
$fireColor: rgb(65, 38, 159);
$fireColorT: rgba(255, 80, 0, 0);
$dur: 1s;
$blur: 0.02em;
$fireRad: 3em;
$parts: 50;

.fire {
  filter: blur($blur);
  -webkit-filter: blur($blur);
}
.particle {
  animation: rise $dur ease-in infinite;
  background-image: radial-gradient($fireColor 20%, $fireColorT 70%);
  border-radius: 50%;
  mix-blend-mode: screen;
  opacity: 0;
  // spread particles out in time and x-position to get desired effect
  @for $p from 1 through $parts {
    &:nth-of-type(#{$p}) {
      animation-delay: $dur * random();
    }
  }
}
@keyframes rise {
  from {
    opacity: 0;
    transform: translateY(0) scale(1);
  }
  25% {
    opacity: 1;
  }
  to {
    opacity: 0;
    transform: translateY(-5em) scale(0);
  }
}
</style>
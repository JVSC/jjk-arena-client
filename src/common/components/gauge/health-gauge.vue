<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps({
  health: {
    type:Number,
    default: 50
  },
  particleVolume: {
    type: Number,
    default: 30
  },
  particles: {
    type: Boolean,
    default: false
  }
})
const healthColor = computed(()=>{
  if(props.health > 70) return 'bg-green-500'
  if(props.health > 50) return "bg-amber-500"
  if(props.health > 30) return "bg-orange-500"
  return "bg-red-500"
})

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

</script>



<template lang="pug">
.rounded-md.bg-zinc-300.relative.flex
  p.text-white.text-xs.absolute.w-full.h-full.flex.justify-center.items-center {{health}}
  .flex.justify-center.items-center.h-full.bg-green-500.rounded-md.transition-colors(:style='`width:${health}%`' :class="healthColor")
  .fire.absolute.bottom-0.flex.items-end.justify-end.items-center.w-full.h-full.-z-10.transition-all
    .particle.w-5.h-5.absolute.-bottom-2(
      v-if='particles'
      v-for="particle in particleVolume",
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
    transform: translateY(-2em) scale(0);
  }
}
</style>
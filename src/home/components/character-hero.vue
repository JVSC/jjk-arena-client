<script setup lang="ts">
import CharacterAvatar from "../../common/components/avatar/character-avatar/character-avatar.vue"
</script>

<template lang='pug'>
.h-48.relative.flex.justify-center.items-center.rounded-l-full.overflow-hidden(
    class="w-5/6 bg-gradient-to-r from-neutral-900 via-neutral-900/30 to-transparent"
)
    .absolute.h-full.left-0.cursor-pointer.z-10(
        class='w-[25%] bg-gradient-to-r from-primary to-transparent'
    )
</template>
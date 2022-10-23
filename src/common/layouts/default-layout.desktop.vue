<template lang="pug">
.overflow-hidden.flex.flex-col.px-4(
  class="w-[800px] h-[600px]"
)
  .w-full.h-20.flex.justify-center.items-center
    slot(name="header")
  .w-full.flex-1.flex.justify-center.items-center
    slot(name="content")
  .w-full.h-20.flex.justify-center.items-center
    slot(name="footer")
</template>
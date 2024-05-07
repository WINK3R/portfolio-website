<script setup>
const props = defineProps({
  number : String,
  label : String
})
</script>

<template>
  <div class="flex flex-row items-center gap-2 hover:scale-105 transition-all ease-in duration-150 group">
    <p class="font-bold text-6xl sm:text-8.5xl font-sofia text-blue-50 group-hover:scale-105 transition-all ease-in duration-150">{{ props.number }}</p>
    <p class="text-grey-200 text-xl sm:text-2.5xl font-extralight leading-5 sm:leading-8" v-html="props.label"/>
  </div>
</template>
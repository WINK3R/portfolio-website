<script setup>
const props = defineProps({
  title : String,
  text : String
})
</script>

<template>
  <div class="overflow-hidden xl:pt-28 md:pt-12 sm:pt-20 lg:pt-24 pt-12 bg-grey-400 border border-grey-300 p-6 rounded-sm h-72 hover:shadow-2xl transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:scale-101 min-w-64">
    <div class="flex flex-row items-center justify-start pb-2 gap-2">
      <slot></slot>
      <p class="text-2xl text-grey-250 transition-all ease-in duration-500 group-hover:brightness-200">{{ props.title }}</p>
    </div>
    <p class="text-grey-90 text-lg leading-5 overflow-hidden text-ellipsis">{{ props.text }}</p>
  </div>
</template>

<style scoped>

</style>
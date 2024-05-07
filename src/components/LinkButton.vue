<script setup>
const props = defineProps({
    url: String
})
</script>

<template>
  <a :href="props.url" target="_blank">
    <button class="px-10 bg-grey-900 border border-grey-300 flex flex-row justify-center items-center py-3 gap-2 text-grey-100 transition-all duration-300 ease-in-out hover:bg-grey-100/10 hover:text-white hover:shadow-xl hover:-translate-y-1 hover:scale-105">
        <slot></slot>
    </button>
  </a>
</template>
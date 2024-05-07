<script setup lang="ts">
const props = defineProps({
  url: String
})
</script>
<template>
    <a :href="`#${url}`">
      <span class="hover:text-blue transition-all ease-in-out duration-250 cursor-pointer">
        <slot></slot>
      </span>
    </a>
</template>

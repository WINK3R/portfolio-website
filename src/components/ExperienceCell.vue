<script setup>
import InfoBuble from "./InfoBuble.vue";

const props = defineProps({
  year: String,
  duration: String,
  description: String,
  image: String,
  company: String,
  important: Boolean
});
</script>

<template>
  <div class="flex flex-col bg-grey-400 rounded-md border border-grey-300 items-start p-8 relative transition-all
      duration-300 ease-out hover:-translate-y-1 hover:border-white/15 hover:scale-101 group"
       :class="{ 'mb-16' : props.important === false}">
    <div class="flex flex-row gap-4 absolute -top-5">
      <InfoBuble>{{ props.year }}</InfoBuble>
      <InfoBuble>{{ props.duration }}</InfoBuble>
    </div>
    <img :src="`images/${ props.image }`" class="object-contain mb-6"
         :class=" props.important === true ? 'h-24' : 'h-10'" :alt="`logo de l'entreprise ${props.company}`">
    <p class="text-xl text-gray-500" v-html="props.description"/>

  </div>
</template>
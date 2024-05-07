<script setup>

import {ref, watch} from "vue";

const props = defineProps({
  title : String,
  application : String,
  image: String,
  opacity: Number,
  progress: Number
})
const translateYleft = ref(0)
const translateYright = ref(0)
watch(() => props.progress, (progress) => {
  translateYleft.value = Math.max(-50, -(progress - 0.5) * 50);
  if (progress > 0.85) {
    translateYright.value = Math.max(-50, -(progress - 0.85) * 2 * 50);
  }
})

</script>

<template>
  <div class="grid min-h-screen w-full grid-cols-1 lg:grid-cols-2" :style="{ opacity: props.opacity }">
    <div class="flex h-[30vh] flex-col items-center justify-center text-3xl lg:h-auto lg:text-3xl" :style="{ transform: `translateY(${translateYright}px)`}">
      <div class="leading-10 text-white">
        <p class="text-2xl font-medium md:text-3xl xl:text-4xl text-gray-500"> {{ props.title}}</p>
        <p class="text-2xl font-bold md:text-3xl xl:text-4xl text-white"> {{ props.application}}</p>
      </div>
    </div>
    <div class="flex h-[70vh] lg:h-screen flex-1 justify-center lg:items-center p-4"
         :style="{ transform: `translateY(${translateYleft}px)`}">
      <img :src="`images/${ props.image}`" class="w-full h-full object-contain p-20"
           :alt="`screenshot de ${props.application}`" width="100" height="100">
    </div>
  </div>
</template>
<script setup>
import PrimaryButton from './PrimaryButton.vue';
import BreadCrumb from './BreadCrumb.vue';
import BreadCrumbCell from './BreadCrumbCell.vue';
import {Vue3Lottie} from "vue3-lottie";
import CopyJson from '../assets/lotties/Animation - 1714933994295.json'
import { ref } from "vue";
function openCV(){
  console.log('openCV')
  window.open('/files/cv.pdf', '_blank');
}
const copyAnimation = ref(null)
const display = ref(false)

function copyEmail(event) {
  console.log('copyEmail');
  navigator.clipboard.writeText('delanierlucas@gmail.com');
  if(!display.value) {
    const rect = event.target.getBoundingClientRect(); // Récupérer les coordonnées du bouton cliqué
    copyAnimation.value.play();
    display.value = true;
    copyAnimation.value.$el.style.left = `${event.clientX - rect.left}px`; // Définir la position X de l'animation
    copyAnimation.value.$el.style.top = `${event.clientY - rect.top}px`; // Définir la position Y de l'animation
    setTimeout(() => {
      copyAnimation.value.stop();
      display.value = false;
    }, 2700);
  }
}


</script>
<template>
    <header class="flex w-full p-12 justify-between items-center">
        <div class="flex items-center gap-7">
            <p class="selectable hidden lg:block">{{ $t('personal-email')}}</p>
            <div class="relative parent hidden lg:block">
              <PrimaryButton text="Copier" @click="copyEmail"/>
              <Vue3Lottie ref="copyAnimation" :animationData="CopyJson" :height="180" :width="180"
                          class="absolute z-10 pointer-events-none child" :auto-play="false" :loop="false"
                          v-show="display"/>
            </div>
            <PrimaryButton :text="$t('cv')" @click="openCV"/>
        </div>
        <div class=" hidden sm:block">
            <BreadCrumb>
                <template v-slot:first>
                    <BreadCrumbCell url="about">{{ $t('about')}}</BreadCrumbCell>
                </template>
                <template v-slot:second>
                    <BreadCrumbCell url="skills">{{ $t('skills')}}</BreadCrumbCell>
                </template>
              <template v-slot:third>
                <BreadCrumbCell url="experiences">{{ $t('experiences')}}</BreadCrumbCell>
              </template>
                <template v-slot:fourth>
                    <BreadCrumbCell url="projects">{{ $t('projects')}}</BreadCrumbCell>
                </template>
            </BreadCrumb>
        </div>
    </header>
</template>
<style>
.parent{
  position: relative;
}
.child{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
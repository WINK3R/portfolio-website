<script setup lang="ts">
import LinkButton from "./LinkButton.vue";
import RedirectLogo from './../assets/icons/redirect.svg';
</script>
<template>
    <div class="flex flex-col justify-center items-center">
        <img src="/src/assets/images/picture.png" height="624" width="624" class="w-24 h-24 sm:w-40 sm:h-40">
        <div class="flex flex-row items-center gap-1">
          <p class="pt-2">Salut, je suis Lucas</p><p class="hover:scale-150 transition-all ease-in duration-300 hover:rotate-12">👋</p>
        </div>
        <h2 class="text-center text-3xl sm:text-5xl font-medium bg-gradient-to-r from-grey-50 to-grey-100 bg-clip-text text-transparent leading-tight pt-5">Développeur &<br>designer d'application.</h2>
        <div class="flex scale-90 sm:scale-100 flex-row gap-3 pt-8 flex-wrap items-center justify-center">
          <LinkButton url="https://www.linkedin.com/in/lucas-delanier/">
            Linkedin
            <RedirectLogo/>
          </LinkButton>
          <LinkButton url="https://github.com/WINK3R">
            Github
            <RedirectLogo/>
          </LinkButton>
          <LinkButton url="mailto:delanierlucas@gmail.com">
            Mail
            <RedirectLogo/>
          </LinkButton>
        </div>
    </div>
</template>
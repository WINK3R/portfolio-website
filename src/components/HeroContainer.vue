<script setup lang="ts">
import LinkButton from "./LinkButton.vue";
import RedirectLogo from './../assets/icons/redirect.svg';
</script>
<template>
    <div class="flex flex-col justify-center items-center">
        <img src="/images/picture.png" height="624" width="624" class="w-24 h-24 sm:w-40 sm:h-40"
             alt="Lucas Delanier">
        <div class="flex flex-row items-center gap-1">
          <p class="pt-2">
            {{ $t('welcome-message')}}
          </p>
          <p class="hover:scale-150 transition-all ease-in duration-300 hover:rotate-12">
            👋
          </p>
        </div>
        <h1 class="text-center text-3xl sm:text-5xl font-medium bg-gradient-to-r from-grey-50 to-grey-100 bg-clip-text
         text-transparent leading-tight pt-5" v-html="$t('catch-phrase')">
        </h1>
        <div class="flex scale-90 sm:scale-100 flex-row gap-3 pt-8 flex-wrap items-center justify-center">
          <LinkButton url="https://www.linkedin.com/in/lucas-delanier/">
            {{ $t('social-media.linkedin')}}
            <RedirectLogo/>
          </LinkButton>
          <LinkButton url="https://github.com/WINK3R">
            {{ $t('social-media.github')}}
            <RedirectLogo/>
          </LinkButton>
          <LinkButton url="mailto:delanierlucas@gmail.com">
            {{ $t('social-media.mail')}}
            <RedirectLogo/>
          </LinkButton>
        </div>
    </div>
</template>
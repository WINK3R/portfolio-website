<script setup>
import LinkedinLogo from './../assets/icons/linkedin.svg';
import GithubLogo from './../assets/icons/github.svg';
</script>

<template>
    <div class="flex flex-col justify-center items-center bg-grey-400 text-white pt-40 pb-8 px-12 sm:px-64">
      <div class="flex flex-row justify-center items-center gap-2 py-4">
        <a href="https://github.com/WINK3R" target="_blank">
          <LinkedinLogo class="w-8 h-8 text-gray-500"/>
        </a>
        <a href="https://www.linkedin.com/in/lucas-delanier/" target="_blank">
          <GithubLogo class="w-8 h-8 text-gray-500"/>
        </a>
      </div>
      <hr class="w-full border-grey-300">
      <p class="text-gray-500 pt-6">© 2024 Delanier Lucas</p>
    </div>
</template>

<style scoped>

</style>
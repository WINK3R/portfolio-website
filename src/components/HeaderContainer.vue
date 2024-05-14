<script setup>
</script>
<template>
    <div class="flex w-full p-12 justify-between items-center">
        <div class="flex items-center gap-7">
            <p class="selectable hidden lg:block">{{ $t('personal-email')}}</p>
            <div class="relative parent hidden lg:block">
        </div>
        <div class="hidden sm:block">
        </div>
        </div>
    </div>
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
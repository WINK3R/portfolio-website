<script setup>
const props = defineProps({
    text: String
})
</script>
<template>
    <div class="px-7 py-1.5 bg-blue rounded-full text-sm font-bold shadow-lg shadow-blue/20 transition-all ease-in-out delay-75 text-nowrap duration-150 hover:shadow-none hover:scale-105 cursor-pointer">
        <p>{{ props.text }}</p>
    </div>
</template>
<template>
    <button class="px-10 rounded outline outline-1 outline-stone-500" @click="counter++">{{ counter }}</button>
</template>

<script setup>
    import { ref } from 'vue';
    const counter = ref(0)
</script>
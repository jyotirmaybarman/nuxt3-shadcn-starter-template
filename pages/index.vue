<template>
    <h1>Hello world</h1>
</template>

<script setup>
import { useThemeStore } from '~/store/useThemeStore'

const themeStore = useThemeStore();

console.log(themeStore.theme);

</script>

<style lang="postcss" scoped>

</style>
<template>
    <div class="default-layout h-screen container mx-auto flex flex-col">
        <the-navbar />
        <div class="main-content flex-auto border dark:border-gray-800">
            <slot />
        </div>
        <the-footer />
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>

</style>
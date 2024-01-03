<template>
    <div class="default-layout min-h-screen container mx-auto flex flex-col">
        <the-navbar />
        <div class="flex-auto">
            <slot />
        </div>
        <the-footer />
    </div>
</template>

<script setup>

</script>

<style lang="postcss" scoped>

</style>
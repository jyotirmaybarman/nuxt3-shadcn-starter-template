<template>
    <nav class="text-center py-4 border dark:border-gray-500 flex items-center justify-center">
        The Navbar

        <client-only>
            <button class="flex px-2 py-1 rounded-md" @click="toggleDark()">
                <svg v-if="isDark"  class="h-8 w-8 mr-2 p-1" :class="isDark == 'light' ? 'active':''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg v-else class="h-8 w-8 p-1" :class="isDark ? 'active':''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
        </client-only>
    </nav>
</template>

<script setup>
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<style lang="postcss" scoped>

</style>
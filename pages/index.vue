<template>
    <div class="index flex flex-col justify-center items-center">
        <client-only>
            <button class="flex px-2 py-1 rounded-md" @click="toggleTheme">
                <svg  class="h-8 w-8 mr-2 p-1" :class="theme == 'light' ? 'active':''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                <svg  class="h-8 w-8 p-1" :class="theme == 'dark' ? 'active':''" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </button>
        </client-only>
        <h1 class="mt-2">Hello world</h1>
        <div class="w-[50%] my-8">
            <h1 class="text-xl mb-4">Markdown Support</h1>
            <MarkdownEditor></MarkdownEditor>
        </div>

    </div>
</template>

<script setup>
import { useThemeStore } from '~/store/useThemeStore'
import MarkdownEditor from '~~/components/MarkdownEditor.vue';

const themeStore = useThemeStore();
if(process.client){
    themeStore.initThemeStore();
}

let theme = computed(() => themeStore.getTheme)

function toggleTheme(){
    themeStore.toggleTheme();
}

</script>

<style lang="postcss" scoped>
.active{
    @apply bg-black text-white rounded-full dark:bg-white dark:text-black;
}
</style>
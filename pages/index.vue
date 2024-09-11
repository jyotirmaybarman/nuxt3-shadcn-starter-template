<template>
    <div class="index h-[calc(100vh-8.3rem)] flex flex-col justify-center items-center border dark:border-gray-500">
        <h1 class="mt-2">Installed items: </h1>
        <p class="mt-2">
            <strong>Nuxt 3</strong>, 
            <strong>Pinia</strong>,
            <strong>Tailwind CSS</strong>, 
            <strong>VueUse</strong>, 
            <strong>NuxtImage</strong>,
            <strong>shadcn-vue</strong>,
            <strong>@radix-icons/vue</strong>
        </p>
        

        <ClientOnly>
            <HoverCard>
                <HoverCardTrigger>
                    <Button class="mt-4 rounded-full h-8 w-8 p-0">
                        <InfoCircledIcon class="rounded-full h-8 w-8"></InfoCircledIcon>
                    </Button>
                </HoverCardTrigger>
                <HoverCardContent class="text-center">
                    This is a combination of shadcn-vue's <strong>HoverCard</strong> & <strong>Button</strong> components.
                </HoverCardContent>
            </HoverCard>
        </ClientOnly>

    </div>
</template>

<script setup>
import { InfoCircledIcon } from '@radix-icons/vue';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

</script>

<style lang="postcss" scoped>
.active{
    @apply bg-black text-white rounded-full dark:bg-white dark:text-black;
}
</style>
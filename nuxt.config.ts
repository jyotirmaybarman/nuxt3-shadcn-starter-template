import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    build: {
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                }
            }
        },
    },
    buildModules: [
        ['@pinia/nuxt', { disableVuex: true }]
    ],
    css:[
        '@/assets/css/tailwind.css'
    ]
})

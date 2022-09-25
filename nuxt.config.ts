import { defineNuxtConfig } from 'nuxt'

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

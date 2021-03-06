import { defineNuxtConfig } from 'nuxt3'
export default defineNuxtConfig({
    publicRuntimeConfig: {
        myEnvVar: process.env.MY_ENV_VAR,
        myOtherEnvVar: process.env.MY_OTHER_ENV_VAR
    },
    buildModules: ['nuxt-windicss'],

    css: [
        'virtual:windi-base.css',
        'virtual:windi-components.css',
        'virtual:windi-utilities.css',
        '~/assets/css/tailwind.css'
    ]
})

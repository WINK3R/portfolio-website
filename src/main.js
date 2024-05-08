import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import {Vue3Lottie} from "vue3-lottie";
import { createI18n } from 'vue-i18n';
import fr from '../public/i18n/fr.json'
import en from '../public/i18n/en.json'

const i18n = createI18n({
    locale: 'fr',
    fallbackLocale: 'fr',
    messages: {
        en: en,
        fr: fr
    }
})
createApp(App).use(Vue3Lottie).use(i18n).mount('#app')
import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/plugins/router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import '@/style.css'

createApp(App).use(router).use(VueAxios, axios).mount('#app')

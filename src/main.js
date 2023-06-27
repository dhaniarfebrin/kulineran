import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.min.css'
import './assets/css/main.css'

import 'bootstrap/dist/js/bootstrap.min.js'

createApp(App)
    .use(ToastPlugin)
    .use(router)
    .mount('#app')

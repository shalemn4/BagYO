/**
 * Main Application Entry Point
 * 
 * This file initializes the Vue 3 application and mounts it to the DOM.
 * It also imports global styles and sets up the router.
 */

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/global.css'

// Create and mount the Vue application
const app = createApp(App)

// Use the router
app.use(router)

// Mount to #app element in index.html
app.mount('#app')
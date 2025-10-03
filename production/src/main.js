// import { createApp } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')

import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Імпортуємо наш маршрутизатор

// Використовуємо маршрутизатор

createApp(App).use(router).mount('#app');
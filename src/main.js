import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"


// project style 
import './assets/style/index.scss'

const app = createApp(App)
app.use(store);
app.use(router)
app.mount('#app')

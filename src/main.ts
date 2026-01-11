import './assets/index.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)


//

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { IoClose } from "oh-vue-icons/icons";

addIcons(IoClose);
// <v-icon name="bi-music-player" />

app.component("v-icon", OhVueIcon);

//



app.mount('#app')

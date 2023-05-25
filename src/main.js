import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { 
    DxPlugin, 
} from 'dws-dx'
import 'dws-dx/dist/style.css';
import PrimeVue from 'primevue/config';
import "primevue/resources/themes/lara-light-indigo/theme.css";     
import "primevue/resources/primevue.min.css";

import './assets/main.css'


const app = createApp(App)

app.use(DxPlugin, { baseImagePath: '/Resources/vue',})
app.use(PrimeVue)
app.use(router)
app.mount('#app')


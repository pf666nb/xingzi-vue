import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import router from './router'
import '~/theme/index.css'
import Vuex from 'vuex'


const app = createApp(App)
app.use(router)
app.use(Vuex)
app.use(ElementPlus)

app.mount('#app')

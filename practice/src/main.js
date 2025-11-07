import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './@core/plugins/vuetify'
import './@core/scss/index.scss'
import store from './store'

const app = createApp(App)
app.use(vuetify)
app.use(router)
app.use(store)

app.mount('#app')

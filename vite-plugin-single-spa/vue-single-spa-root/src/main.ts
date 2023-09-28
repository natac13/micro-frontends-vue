import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
// import router from './router'

import { registerApplication, start } from 'single-spa'

const safetyHQ = '@foundationsoft/safteyhq'

registerApplication({
  name: 'safetyhq',
  app: () => import(/* @vite-ignore */ safetyHQ),
  activeWhen: ['/safetyhq']
})

start({
  urlRerouteOnly: true
})

const app = createApp(App)

app.use(createPinia())
// app.use(router)

app.mount('#app')

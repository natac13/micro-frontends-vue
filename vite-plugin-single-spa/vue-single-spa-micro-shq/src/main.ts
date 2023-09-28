import './assets/main.css'

import { createApp, h } from 'vue'

import singleSpaVue from 'single-spa-vue'
import App from './App.vue'

const vueLifecycles = singleSpaVue({
  createApp,
  appOptions: {
    render() {
      return h(App, {
        props: {
          name: this.name,
          // @ts-ignore
          mountParcel: this.mountParcel,
          // @ts-ignore
          singleSpa: this.singleSpa
        }
      })
    }
  }
  // handleInstance: (app) => {
  //   // app.use(createPinia())
  //   // app.use(router)
  // }
})

export const bootstrap = async (props: any) => {
  console.log('bootstrap safetyhq', props)
  return vueLifecycles.bootstrap(props)
}
export const mount = async (props: any) => {
  console.log('mount safetyhq', props)
  return vueLifecycles.mount(props)
}
export const unmount = async (props: any) => {
  console.log('unmount safetyhq', props)
  return vueLifecycles.unmount(props)
}

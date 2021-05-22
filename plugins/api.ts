import { Plugin } from '@nuxt/types'
import { Factories } from './../types/api/Factories'
import Nominatim from '~/api/nominatim'

declare module 'vue/types/vue' {
  // this.$myInjectedFunction inside Vue components
  interface Vue {
    $api:Factories
  }
}

declare module '@nuxt/types' {
  // nuxtContext.app.$myInjectedFunction inside asyncData, fetch, plugins, middleware, nuxtServerInit
  interface NuxtAppOptions {
    $api:Factories
  }
  // nuxtContext.$myInjectedFunction
  interface Context {
    $api: Factories
  }
}

declare module 'vuex/types/index' {
  // this.$myInjectedFunction inside Vuex stores
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Store<S> {
    $api: Factories
  }
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const apiPlugin:Plugin = (context, inject) => {
  // Initialize API factories
  const factories = {
    nominatim: Nominatim(context.$axios)
  }

  // Inject $api
  inject('api', factories)
}

export default apiPlugin

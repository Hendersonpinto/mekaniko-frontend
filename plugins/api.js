import Nominatim from '~/api/nominatim'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default (context, inject) => {
  // Initialize API factories
  const factories = {
    nominatim: Nominatim(context.$axios)
  }

  // Inject $api
  inject('api', factories)
}

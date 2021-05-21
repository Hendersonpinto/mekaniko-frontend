// We need to use curly braces to import a non default exported interface
import { NuxtAxiosInstance } from '@nuxtjs/axios'

const baseUrl = 'https://nominatim.openstreetmap.org'

export default ($axios: NuxtAxiosInstance) => ({

  searchPlaces (query:string, format?:string, limit?:string) {
    return $axios.$get(`${baseUrl}/search`, {
      params: {
        q: query,
        format: format || '',
        limit: limit || '1'
      }
    })
  }

  // create(payload) {
  //   return $axios.$post(`/posts`, payload)
  // },

  // show(id) {
  //   return $axios.$get(`/posts/${id}`)
  // },

  // update(payload, id) {
  //   return $axios.$put(`/posts/${id}`, payload)
  // },

  // delete(id) {
  //   return $axios.$delete(`/posts/${id}`)
  // }

})

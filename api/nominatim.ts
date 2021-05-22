import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Params } from '~/types/api/Params'
// We need to use curly braces to import a non default exported interface

const baseUrl = 'https://nominatim.openstreetmap.org'

export default ($axios: NuxtAxiosInstance) => ({

  searchPlaces (query:string, format?:string, limit?:string) {
    const params = { q: query } as Params
    limit && (params.limit = limit)
    format && (params.format = format)

    return $axios.$get(`${baseUrl}/search`, { params })
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

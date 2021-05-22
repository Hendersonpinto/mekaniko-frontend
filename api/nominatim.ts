import { NuxtAxiosInstance } from '@nuxtjs/axios'
import { Params } from '~/types/api/Params'
// We need to use curly braces to import a non default exported interface

const baseUrl = 'https://nominatim.openstreetmap.org'

export default ($axios: NuxtAxiosInstance) => ({

  searchPlaces (query:string, addressDetails?:boolean, format?:string, limit?:number) {
    const params = { q: query } as Params
    limit && (params.limit = limit.toString())
    format && (params.format = format)
    addressDetails && (params.addressdetails = '1')

    return $axios.$get(`${baseUrl}/search`, { params })
  },
  reverseGeocode (lat:number, lon:number, addressDetails?:boolean, format?:string, zoom?:number) {
    const params = { lat, lon } as Params
    zoom && (params.zoom = zoom)
    format && (params.format = format)
    addressDetails && (params.addressdetails = '1')

    return $axios.$get(`${baseUrl}/reverse`, { params })
  }
})

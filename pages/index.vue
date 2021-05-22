<template>
  <div class="container">
    <input v-model="searchQuery" placeholder="Search for a place" @keyup="searchPlaces(searchQuery, true, 'json', 10)">
    <p>Query is: {{ searchQuery }}</p>
    <button @click="locateMe">
      Get my location
    </button>
    <p v-if="gettingLocation">
      getting location
    </p>
    <p v-if="userLocation !== ''">
      {{ userLocation }}
    </p>
    <p>{{ userLat }}</p>
    <p>{{ userLon }}</p>
    <div v-if="searchQuery !== ''">
      <p v-for="(address, index) in searchResults" :key="index">
        {{ address.display_name }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

const timer: ReturnType<typeof setTimeout> = setTimeout(() => '', 1000)

export default Vue.extend({
  data () {
    return {
      searchQuery: '',
      searchResults: [],
      lastTimeCalled: new Date(),
      timeBetweenCalls: 1050,
      timer,
      userLat: 0,
      userLon: 0,
      userLocation: '',
      gettingLocation: false,
      errorMessage: null as null | string
    }
  },
  methods: {
    async searchPlaces (query:string, addressDetails?:boolean, format?:string, limit?:number) {
      clearTimeout(this.timer)
      const now = new Date()
      if (now.getTime() - this.lastTimeCalled.getTime() >= this.timeBetweenCalls) {
        this.lastTimeCalled = now
        const response = await this.$api.nominatim.searchPlaces(query, addressDetails, format, limit)
        this.searchResults = response
      }
      this.timer = setTimeout(async () => {
        const response = await this.$api.nominatim.searchPlaces(query, addressDetails, format, limit)
        this.searchResults = response
      }, 1100)
    },
    async getReverseLocation () {
      const response = await this.$api.nominatim.reverseGeocode(this.userLat, this.userLon, true, 'json', 18)
      if (response) {
        this.userLocation = response.display_name
      } else {
        this.errorMessage = "Couldn't find your location"
      }
    },
    getLocation () {
      return new Promise((resolve, reject) => {
        if (!('geolocation' in navigator)) {
          this.errorMessage = 'Geolocation is not available.'
          reject(new Error('Geolocation is not available.'))
        }
        navigator.geolocation.getCurrentPosition((pos) => {
          this.userLat = pos.coords.latitude
          this.userLon = pos.coords.longitude
          this.getReverseLocation()
          resolve(pos)
        }, (err) => {
          this.errorMessage = err.message
          reject(err)
        })
      })
    },
    async locateMe () {
      this.gettingLocation = true
      await this.getLocation()
      this.gettingLocation = false
    }
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

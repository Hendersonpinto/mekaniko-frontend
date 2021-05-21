<template>
  <div class="container">
    <input v-model="searchQuery" placeholder="Search for a place">
    <p>Query is: {{ searchQuery }}</p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      searchQuery: '',
      searchResults: []
    }
  },
  mounted () {
    this.searchPlaces('amagerbrogade', 'geojson')
  },
  methods: {
    async searchPlaces (query:string, format?:string) {
      // search?q=amagerbrogade&format=geojson
      // query:string, format?:string, limit?:string
      // const response = await this.$api.nominatim.searchPlaces(query, format)
      // console.log(response)
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

<script>
import axios from 'axios'
import { store } from './store.js'
export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  methods: {
    callApi(url) {
      axios.get(url)
        .then(response => {
          console.log(response);
          this.store.movies = response.data.results
        })
        .catch(err => {
          console.error(err.message);
          this.store.error = err.message
        })
    }
  },
  mounted() {
    this.callApi(this.store.API_URL)
  }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>

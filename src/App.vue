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
  mounted() {
    const config = {
      method: 'get',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        api_key: 'ef7e66d24e6adde17d381d55ad3ecd29',
        query: 'Matrix'
      }
    };

    axios(config)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      })
  }
}
</script>

<template>

</template>

<style lang="scss" scoped>

</style>

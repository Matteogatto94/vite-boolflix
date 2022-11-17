<script>
import { store } from '../store.js'
export default {
    name: 'MoviesList',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="col" v-for="movie in store.movies">
        <p>{{ movie.title }}</p>
        <p v-if="movie.title != movie.original_title">{{ movie.original_title }}</p>
        <img :src="store.flagsCountry(movie.original_language)">
        <p>{{ movie.vote_average }}</p>
    </div>

    <div class="col" v-for="movie in store.tvSeries">
        <p>{{ movie.name }}</p>
        <p v-if="movie.name != movie.original_name">{{ movie.original_name }}</p>
        <img :src="store.flagsCountry(movie.original_language)">
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss">

</style>
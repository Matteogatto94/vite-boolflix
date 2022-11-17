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
        <div class="card">
            <div class="card-img text-center">
                <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path">
            </div>
            <div class="card-body">
                <p>Titolo: {{ movie.title }}</p>
                <p v-if="movie.title != movie.original_title">Titolo Originale: {{ movie.original_title }}</p>
                <img :src="store.flagsCountry(movie.original_language)">
                <p>Voto: {{ movie.vote_average }}</p>
            </div>
        </div>
    </div>

    <div class="col" v-for="movie in store.tvSeries">
        <div class="card">
            <div class="card-img">
                <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path">
            </div>
            <div class="card-body">
                <p>Titolo: {{ movie.name }}</p>
                <p v-if="movie.name != movie.original_name">Titolo Originale: {{ movie.original_name }}</p>
                <img :src="store.flagsCountry(movie.original_language)">
                <p>Voto: {{ movie.vote_average }}</p>
            </div>
        </div>
    </div>




</template>

<style lang="scss">
.card {
    padding: 2rem;
}
</style>
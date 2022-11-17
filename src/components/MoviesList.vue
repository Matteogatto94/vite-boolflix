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
        <div class="movie_card text-center">
            <div class="card-img">
                <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path">
            </div>
            <div class="card-body">
                <p>Titolo: {{ movie.title }}</p>
                <p v-if="movie.title != movie.original_title">Titolo Originale: {{ movie.original_title }}</p>
                <div class="rating">
                    <span>Voto:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'yellow' : 'black'" />
                </div>
                <img :src="store.flagsCountry(movie.original_language)">
                <p>{{ movie.overview }}</p>
            </div>
        </div>
    </div>

    <div class="col" v-for="movie in store.tvSeries">
        <div class="movie_card  text-center">
            <div class="card-img">
                <img :src="'https://image.tmdb.org/t/p/w185/' + movie.poster_path">
            </div>
            <div class="card-body">
                <p>Titolo: {{ movie.name }}</p>
                <p v-if="movie.name != movie.original_name">Titolo Originale: {{ movie.original_name }}</p>
                <div class="rating">
                    <span>Voto:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'yellow' : 'black'" />
                </div>
                <img :src="store.flagsCountry(movie.original_language)">
                <p></p>
            </div>
        </div>
    </div>




</template>

<style lang="scss">
.rating {
    .yellow {
        color: yellow;
    }

    .black {
        color: black;
    }

}
</style>
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
            <div class="card_body">
                <h5>Titolo: {{ movie.title }}</h5>
                <h6 v-if="movie.title != movie.original_title">Titolo Originale: {{ movie.original_title }}</h6>
                <div class="rating">
                    <span>Voto:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'yellow' : 'black'" />
                </div>
                <div class="lang">
                    <span>Language: <img :src="store.flagsCountry(movie.original_language)"></span>
                </div>
                <div class="description">
                    <p>{{ movie.overview }}</p>
                </div>
                <img class="card_img" :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path">
            </div>
        </div>
    </div>

    <div class="col" v-for="movie in store.tvSeries">
        <div class="movie_card text-center">
            <div class="card_body">
                <p>Titolo: {{ movie.name }}</p>
                <p v-if="movie.name != movie.original_name">Titolo Originale: {{ movie.original_name }}</p>
                <div class="rating">
                    <span>Voto:</span>
                    <font-awesome-icon icon="fa-solid fa-star" v-for="(i) in 5"
                        :class="Math.ceil(movie.vote_average / 2) > i ? 'yellow' : 'black'" />
                </div>
                <div class="lang">
                    <span>Language: <img :src="store.flagsCountry(movie.original_language)"> </span>
                </div>
                <div class="description">
                    <p>{{ movie.overview }}</p>
                    <img class="card_img" :src="'https://image.tmdb.org/t/p/w342/' + movie.poster_path">
                </div>
            </div>
        </div>
    </div>



</template>

<style lang="scss">
.col {
    color: white;

    .movie_card {
        height: 512px;
        width: 342px;
        position: relative;

        .card_body {
            height: 512px;
            width: 342px;
            font-size: x-small;
            background-color: black;
            padding: 2rem;
        }

        .card_img {
            position: absolute;
            left: 0;
            top: 0;

            &:hover {
                opacity: 0;
            }
        }
    }

    .rating {
        .yellow {
            color: yellow;
        }

        .black {
            color: black;
        }
    }
}
</style>
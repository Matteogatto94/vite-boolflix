import {
    reactive
} from 'vue'
import axios from 'axios'

export const store = reactive({
    movies: null,
    error: null,
    searchMovies: null,

    callApi(name) {
        const config = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/movie',
            params: {
                api_key: 'ef7e66d24e6adde17d381d55ad3ecd29',
                query: name,
            }
        };
        axios(config)
            .then(function (response) {
                store.movies = response.data.results
                console.log(store.movies);
            })
            .catch(function (error) {
                console.error(error);
            })
    }
})
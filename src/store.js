import {
    reactive
} from 'vue'

export const store = reactive({
    API_URL: 'https://api.themoviedb.org/3/search/movie?api_key=ef7e66d24e6adde17d381d55ad3ecd29&language=en-US&query=Matrix&page=1&include_adult=false',
    movies: null,
    error: null,
})
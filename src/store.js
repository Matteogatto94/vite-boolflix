import {
    reactive
} from 'vue'
import axios from 'axios'

export const store = reactive({
    movies: null,
    tvSeries: null,
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
            });

        const configg = {
            method: 'get',
            url: 'https://api.themoviedb.org/3/search/tv',
            params: {
                api_key: 'ef7e66d24e6adde17d381d55ad3ecd29',
                query: name,
            }
        };
        axios(configg)
            .then(function (response) {
                store.tvSeries = response.data.results
                console.log(store.tvSeries);
            })
            .catch(function (error) {
                console.error(error)
            })
    },
    flagsCountry(lang) {
        if (lang === 'en') {
            return 'https://flagcdn.com/16x12/gb-eng.png'
        } else if (lang === 'ja') {
            return 'https://flagcdn.com/16x12/jp.png'
        } else if (lang === 'da') {
            return 'https://flagcdn.com/16x12/dk.png'
        } else if (lang === 'ko') {
            return 'https://flagcdn.com/16x12/kr.png'
        } else if (lang === 'zh') {
            return 'https://flagcdn.com/16x12/cn.png'
        } else {
            return 'https://flagcdn.com/16x12/' + lang + '.png'
        }


    }
})
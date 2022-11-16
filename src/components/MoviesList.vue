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
        <p>{{ movie.original_title }}</p>
        <p>{{ movie.original_language }}</p>
        <p>{{ movie.vote_average }}</p>
    </div>
</template>

<style lang="scss">

</style>
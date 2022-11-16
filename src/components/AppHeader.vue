<script>
import { store } from '../store.js'
export default {
    name: 'AppHeader',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container justify-content-center">
        <div class="search d-flex gap-2 my-5">
            <input type="search" class="form-control w-50" v-model="store.searchMovies" placeholder="Search a Movie...">
            <button type="submit" class="btn btn-dark" @click="store.callApi(store.searchMovies)">Search</button>
        </div>
    </div>

</template>

<style lang="scss">

</style>
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
    <header>
        <section class="bg-dark mb-5">
            <div class="container d-flex justify-content-between">
                <div class="logo">
                    <h1>BOOLFIX</h1>
                </div>
                <div class="search d-flex gap-2 my-5">
                    <input type="search" class="form-control" v-model="store.searchMovies"
                        @keyup.enter="store.callApi(store.searchMovies)" placeholder="Search a Movie...">
                    <button type="submit" class="btn btn-danger"
                        @click="store.callApi(store.searchMovies)">Search</button>
                </div>
            </div>
        </section>

    </header>


</template>

<style lang="scss">
.logo {
    align-self: center;
    color: red;
}
</style>
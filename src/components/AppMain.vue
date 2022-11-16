<script>
import MoviesList from './MoviesList.vue'
import { store } from '../store.js'
export default {
    name: 'AppMain',
    components: {
        MoviesList
    },
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-sm-4 g-4">
            <MoviesList />
        </div>
    </div>
</template>

<style lang="scss">

</style>
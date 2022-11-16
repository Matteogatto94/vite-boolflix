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
    <div class="search d-flex gap-2 my-5 justify-content-center">
        <input type="search" class="form-control w-50">
        <button type="submit" class="btn btn-dark">Search</button>
    </div>
</template>

<style lang="scss">

</style>
<script>
export default {
    name: 'AppFooter'
}
</script>

<template>

    <footer>
        <section class="credits d-flex justify-content-around align-items-center py-4">
            <p>Created By Matteo Gatto</p>
            <p>Studente Classe 72</p>
        </section>
    </footer>
</template>

<style lang="scss">
.credits {
    background-color: black;
    margin-top: 2rem;

    p {
        margin: 0;
        text-align: center;
        color: white;
    }
}
</style>
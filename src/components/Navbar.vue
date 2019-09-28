<template>
    <div class="navbar">
        <router-link to="/"></router-link>
        <router-link to="/contact">
            <button class="button">Say Hello</button>
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles';

    .navbar {
        display: grid;
        grid-area: navbar;
        align-items: center;
        justify-items: end;

        .button {
            border-radius: 1rem;
            font-size: 1.5rem;
        }
    }
</style>
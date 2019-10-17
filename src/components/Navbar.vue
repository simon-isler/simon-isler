<template>
    <div class="navbar">
        <router-link to="/"></router-link>
        <router-link tag="button" class="button" to="/contact" v-if="!hideButton">
            Say Hello
        </router-link>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
        computed: {
            hideButton() {
                return this.$route.name === 'contact'
            }
        }
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
            font-size: 1.4rem;
            background-color: unset;
            padding: 0.5rem;

            &:hover {
                background-color: $github;
            }
        }
    }

    @media screen and (max-width: $mobile) {
        .navbar {
            .button {
                display: none;
            }
        }
    }
</style>
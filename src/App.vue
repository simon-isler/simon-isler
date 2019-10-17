<template>
    <div id="app" :class="[$route.name]">
        <Navbar></Navbar>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from "./components/Footer";
    import Navbar from "./components/Navbar";

    export default {
        name: 'App',
        components: {
            Navbar,
            Footer
        }
    }
</script>

<style lang="scss">
    @import './assets/styles.scss';

    html, body {
        height: 100vh;
        margin: 0;
        padding: 0;
    }

    #app {
        box-sizing: border-box;
        width: 100vw;
        height: 100vh;
        overflow: hidden;
        font-family: $font;
        display: grid;
        grid-template-rows: 10% 70% 20%;
        grid-template-columns: auto;
        grid-template-areas: "navbar" "main" "footer";
        padding: 0 10%;

        &.home {
            background-image: url("./assets/background.jpg");
            background-size: cover;

            a, button {
                color: $text-primary
            }
        }

        &.contact, &.pageNotFound {
            .link:hover, .button:hover {
                color: $text-primary;
            }
        }

        h2 {
            font-size: 3rem;
        }

        h3 {
            font-size: 2rem;
        }

        h4 {
            font-size: 1.5rem;
        }

        h5 {
            font-size: 1.2rem;
        }

        a {
            color: unset;
            transition: $transition;
        }

        button {
            outline: none;
            transition: $transition;
            border-radius: 1rem;
            border: 1.2px solid;
        }

        input {
            padding-left: 0.5rem;
            outline: none;
        }

        textarea {
            padding-left: 0.5rem;
            padding-top: 0.7rem;
            outline: none;
            resize: none;
        }
    }
</style>
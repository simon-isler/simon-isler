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

        button {
            outline: none;
        }

        &.home {
            background-image: url("./assets/background.jpg");
            background-size: cover;

            button {
                color: $text-primary
            }
        }
    }
</style>
<template>
    <div id="app" class="container">
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
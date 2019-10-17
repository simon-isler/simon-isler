<template>
    <div>
        <h1 class="title-xl">Oops!</h1>
        <h2 class="subtitle">We couldn't find this page.</h2>
    </div>
</template>

<script>
    export default {
        name: "PageNotFound"
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles.scss';

    div {
        display: grid;
        justify-items: center;

        .title-xl {
            align-self: end;
            font-size: 8rem;
            margin-bottom: 0;
        }

        .subtitle {
            align-self: start;
            color: $gray;
        }
    }
</style>
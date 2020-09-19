<template>
    <div class="home">
        <h1 class="title">{{ title }}</h1>
        <vue-typed-js :strings="welcome" :startDelay="1000" :typeSpeed="80" :showCursor="false" :loop="true"
                      class="welcome">
            <h5 class="typing"/>
        </vue-typed-js>
    </div>
</template>

<script>
    export default {
        name: 'home',
        data() {
            return {
                title: "Hi, I'm Simon",
                welcome: [
                    'This is my personal website',
                    'If you want to contact me, feel free to do so :)'
                ],
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import "../assets/styles.scss";

    .home {
        display: grid;
        color: $text-primary;
        justify-items: center;

        .title {
            align-self: end;
            font-size: 5.5rem;
            font-weight: 500;
            margin: 0;
        }

        .welcome {
            align-self: start;
            min-height: 89px;
        }
    }

    @media screen and (max-width: $mobile) {
        .home {
            .title {
                font-size: 2.4rem;
                font-weight: 900;
            }

            .typing {
                font-size: 2px;
            }
        }
    }
</style>

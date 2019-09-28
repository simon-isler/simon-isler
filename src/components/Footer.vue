<template>
    <div class="footer">
        <button class="button-link" v-for="link of links" :key="link.id" v-on:click="open_link(link.url)">
            <font-awesome-icon :icon="['fab', link.icon]" class="icon"/>
        </button>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data: function () {
            return {
                links: [
                    {
                        name: 'Github',
                        icon: 'github',
                        url: 'https://github.com/simon-isler',
                    },
                    {
                        name: 'LinkedIn',
                        icon: 'linkedin-in',
                        url: 'https://www.linkedin.com/in/simon-isler-940279166/',
                    },
                ]
            }
        },
        methods: {
            open_link: function (url) {
                window.open(url, '_blank');
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles';

    .footer {
        display: grid;
        grid-area: footer;
        grid-template-columns: 90px 90px;
        align-items: center;

        .button-link {
            width: 4rem;
            height: 4rem;
            border-radius: 50%;
            border: 2px solid;

            .icon {
                font-size: 1.5rem;
            }
        }
    }
</style>
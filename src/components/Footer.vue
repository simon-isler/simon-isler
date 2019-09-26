<template>
    <div class="footer">
        <button v-for="link of links" class="button-link">{{ link.link }}</button>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                links: [
                    {
                        link: 'GitHub',
                        icon: ''
                    },
                    {
                        link: 'LinkedIn',
                        icon: ''
                    },
                ]
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
            background-color: unset;
            color: $text-primary;
            border-radius: 50%;
            border: 2px solid;
        }
    }
</style>
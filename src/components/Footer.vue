<template>
    <div class="footer">
        <a v-for="link of links" :key="link.id" :href="link.url" target="_blank">
            <button class="button-link" :class="[link.name]">
                <font-awesome-icon :icon="['fab', link.icon]" class="icon"/>
            </button>
        </a>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                links: [
                    {
                        name: 'github',
                        icon: 'github',
                        url: 'https://github.com/simon-isler',
                    },
                    {
                        name: 'linkedin',
                        icon: 'linkedin-in',
                        url: 'https://www.linkedin.com/in/simon-isler-940279166/',
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
            border-radius: 50%;
            border: 2px solid;
            background-color: unset;
            transition: $button-transition;

            .icon {
                font-size: 1.5rem;
            }

            &.github:hover {
                background-color: $github;
            }

            &.linkedin:hover {
                background-color: $linkedin;
            }
        }
    }
</style>
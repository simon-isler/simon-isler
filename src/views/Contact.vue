<template>
    <div>
        <div class="main" v-if="!show">
            <h2>Let's talk.</h2>
            <p>Share your excitement with me.</p>
            <a href="mailto:mail@simonisler.ch" class="email">mail@simonisler.ch</a>

            <div class="options">
                <h4>Let's talk about</h4>
                <ul>
                    <li v-for="option in options" :key="option.id">
                        <input type="radio" name="radio" :id="option.id" :value="option.response"
                               v-model="selected_option">
                        <label :for="option.id">{{ option.name }}</label>
                    </li>
                </ul>
                <button v-on:click="show = true">Next</button>
            </div>
        </div>

        <transition name="fade">
            <div v-if="show">
                <h2> {{ selected_option }}</h2>
                <h5>Personal details</h5>
                <form class="contact-form" @submit.prevent="submit">
                    <input type="text" v-model="form.name" placeholder="Name" id="name" name="name" class="name"
                           required>
                    <label for="name"></label>

                    <input type="email" v-model="form.email" placeholder="Email" id="email" name="email" class="email"
                           required>
                    <label for="email"></label>

                    <textarea rows="5" v-model="form.description" placeholder="What do you want to talk about?"
                              id="description"
                              name="description" class="description" required></textarea>
                    <label for="description"></label>

                    <button type="submit" id="submit" class="button">Send</button>
                </form>
            </div>
        </transition>
    </div>
</template>

<script>
    import {API} from "../main";

    export default {
        name: "Contact",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    description: '',
                },
                show: false,
                selected_option: 'Tell me more about it! 😎',
                options: [
                    {
                        id: 0,
                        name: 'Your great project',
                        response: 'Tell me more about it! 😎',
                    },
                    {
                        id: 1,
                        name: 'Meeting for a coffee',
                        response: 'I like coffee too! ☕️',
                    },
                    {
                        id: 2,
                        name: 'Planes',
                        response: "What's on your mind? 🚀",
                    },
                ]
            }
        },
        methods: {
            submit() {
                const postData = {
                    name: this.form.name,
                    email: this.form.email,
                    description: this.form.description,
                };

                const axiosConfig = {
                    headers: {
                        'Content-Type': 'application/json;charset=UTF-8',
                        "Access-Control-Allow-Origin": "*",
                    }
                };


            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../assets/styles';

    .fade-enter-active, .fade-leave-active {
        transition: opacity 1.5s;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    a, li, p {
        font-size: 19px;
    }

    button {
        font-size: 16px;
        margin-top: 0.6rem;
        padding: 0.7rem 2rem;

        &:hover {
            color: $text-primary;
        }
    }

    .main {
        .email {
            text-decoration: none;
            border-bottom: 1px solid;
            padding-bottom: 2px;
        }

        .options {
            padding-top: 3rem;

            ul {
                list-style-type: none;
                padding-left: 0;

                input {
                    outline: none;
                    margin-right: 1.5rem;
                    margin-bottom: 0.5rem;
                    padding-left: 0;
                    -webkit-appearance: none;
                    -moz-appearance: none;
                    background: none;
                    border-radius: 50%;
                    width: 22px;
                    height: 22px;
                    border: 2.2px solid $black;
                    vertical-align: middle;

                    &:checked {
                        background: $green url('../assets/checkmark.svg') no-repeat 50%;
                    }
                }
            }

            button:hover {
                background-color: $green;
            }
        }
    }

    .contact-form {
        display: grid;
        grid-template-columns: 40% 40%;
        grid-column-gap: 50px;
        grid-row-gap: 20px;

        input, textarea {
            background-color: $lightgray;
            border: none;
            font-size: 0.9rem;

            &:hover {
                background-color: $lightgray-hover;
            }
        }

        .name {
            align-self: start;
            height: 2rem;
        }

        .email {
            grid-row: 2;
            height: 2rem;
            align-self: start;
        }

        .description {
            grid-column: 2;
            grid-row: 1 / 6;
            outline: none;
        }

        #submit {
            grid-column: 2;
            justify-self: end;

            &:hover {
                background-color: $green;
            }
        }
    }

    @media screen and (max-width: $mobile) {
        .contact-form {
            grid-template-columns: 100%;

            .description {
                grid-column: 1;
                grid-row: 3;
            }

            #submit {
                grid-column: 1;
                grid-row: 4;
            }
        }
    }
</style>
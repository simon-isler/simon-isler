<template>
    <div>
        <div class="main" v-if="!show">
            <div class="title">
                <h2>Let's talk.</h2>
                <a href="/" class="icon">
                    <font-awesome-icon :icon="['far', 'times-circle']"/>
                </a>
            </div>

            <p>Share your excitement with me.</p>
            <a href="mailto:mail@simonisler.ch" class="email">mail@simonisler.ch</a>

            <div class="options">
                <h4>Let's talk about</h4>
                <ul>
                    <li v-for="option in options" :key="option.id">
                        <input type="radio" name="radio" :id="option.id" :value="option.id"
                               v-model="form.option">
                        <label :for="option.id">{{ option.name }}</label>
                    </li>
                </ul>
                <button v-on:click="show = true">Next</button>
            </div>
        </div>

        <transition name="fade">
            <div v-if="show" class="contact">
                <div class="title">
                    <h2 class="message"> {{ options[form.option].response }}</h2>
                    <a href="/contact" class="icon">
                        <font-awesome-icon :icon="['far', 'times-circle']"/>
                    </a>
                </div>

                <div v-if="!email_sent">
                    <h5>Personal details</h5>
                    <form class="contact-form" @submit.prevent="sendEmail">
                        <input type="text" v-model="form.name" placeholder="Name" id="name" name="name" class="name"
                               required>
                        <label for="name"></label>

                        <input type="email" v-model="form.email" placeholder="Email" id="email" name="email"
                               class="email"
                               required>
                        <label for="email"/>

                        <textarea rows="5" v-model="form.description" placeholder="What do you want to talk about?"
                                  id="description" name="description" class="description" required/>
                        <label for="description"/>

                        <h5 v-if="showErrors" class="error-msg">
                          There was an error while submitting. Please make sure that you correctly filled out all fields.
                        </h5>
                        <button type="submit" id="submit" class="button">Send</button>
                    </form>
                </div>

                <transition name="fade">
                    <div v-if="email_sent">
                        <h4 class="text-muted">Thank you! Your email has been sent.</h4>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Contact",
        data() {
            return {
                form: {
                    name: '',
                    email: '',
                    description: '',
                    option: 0,
                },
                email_sent: false,
                showErrors: false,
                show: false,
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
          sendEmail() {
            this.$http.post('/send_email', this.form)
                .then(() => this.email_sent = true)
                .catch((errors) => {
                  this.showErrors = true;
                  console.error(errors);
                });
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

    .icon {
        place-self: center end;
        font-size: 2.5rem;

        :hover {
            transition: $transition;
            color: $text-muted;
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
                    margin-right: 1rem;
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

    .contact {
        .title {
            display: grid;
            grid-template-columns: 75% 5%;
            grid-column-gap: 50px;
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

          .error-msg {
            grid-column: span 2;
            margin: 0;
            color: $red;
          }
        }

        .text-muted {
            color: $text-muted;
        }
    }

    @media screen and (max-width: $tablet) {
        .contact .title .message {
            font-size: 2.4rem !important;
        }
    }

    @media screen and (max-width: $mobile) {
        button {
            font-size: 13px;
            margin-top: 0.2rem;
        }

        .main {
            .options {
                padding-top: 0.5rem;
            }
        }

        .contact {
            .title {
                .message {
                    font-size: 2rem !important;
                }
            }

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
    }
</style>

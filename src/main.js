import { createApp } from 'vue';
import App from './App.vue';
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faFighterJet } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

library.add(faFighterJet, faGithub, faLinkedinIn);

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
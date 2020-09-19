import Vue from 'vue'
import router from './router'
import App from './App'
import Axios from 'axios';
import VueTypedJs from 'vue-typed-js'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { API_URL } from './config'

require('dotenv').config();
library.add(faLinkedinIn, faGithub, faTimesCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueTypedJs);
Vue.config.productionTip = false;

export const http = Axios.create({ baseURL: API_URL });
Vue.prototype.$http = http;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

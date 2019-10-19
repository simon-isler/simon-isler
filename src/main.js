import Vue from 'vue'
import router from './router'
import App from './App'
import VueTypedJs from 'vue-typed-js'
import Axios from 'axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons'
import { faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const axios = Axios.create({
    baseURL: process.env.API_URL
});

library.add(faLinkedinIn, faGithub, faTimesCircle);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.use(VueTypedJs);
Vue.prototype.$http = axios;
Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');

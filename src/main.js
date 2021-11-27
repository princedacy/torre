import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faSearch, faRunning, faBiking } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'materialize-css'
import 'materialize-css/dist/css/materialize.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
library.add(faBars, faSearch, faRunning, faBiking)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

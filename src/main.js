import { createApp } from 'vue'
import './assets/scss/style.scss'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
import App from './App.vue'

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

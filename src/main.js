import { createApp } from 'vue'
import App from './App.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import CustomHeader from './components/styling/CustomHeader.vue'
import InputForm from './components/data/InputForm.vue'
import StandardButton from './components/styling/StandardButton.vue'
import CustomFooter from './components/styling/CustomFooter.vue'

const myApp = createApp(App)

myApp.component('standard-button', StandardButton)
myApp.component('custom-header', CustomHeader)
myApp.component('custom-footer', CustomFooter)
myApp.component('input-form', InputForm)
myApp.mount('#app')
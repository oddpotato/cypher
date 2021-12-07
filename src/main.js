import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { OktaAuth } from '@okta/okta-auth-js'
import OktaVue from '@okta/okta-vue'

import { issuer, clientID } from './otka.json'

const oktaAuth = new OktaAuth({
    issuer: issuer,
    clientId: clientID,
    redirectUri: window.location.origin + '/login/callback',
    scopes: ['openid', 'profile', 'email']
})

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"

import CustomHeader from './components/styling/CustomHeader.vue'
import InputForm from './components/data/InputForm.vue'
import StandardButton from './components/styling/StandardButton.vue'
import CustomFooter from './components/styling/CustomFooter.vue'
import LogInLogOut from './components/partials/LogInLogOut.vue'

const myApp = createApp(App).use(router)

myApp.useapp.use(OktaVue, {
    oktaAuth,
    onAuthRequired: (oktaAuth) => {
        router.push({ path: '/login' })
    }
})

myApp.component('standard-button', StandardButton)
myApp.component('custom-header', CustomHeader)
myApp.component('custom-footer', CustomFooter)
myApp.component('input-form', InputForm)
myApp.component('log-in-log-out', LogInLogOut)
myApp.mount('#app')
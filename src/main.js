import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueAuth0Plugin from 'vue-auth0-plugin';
import { domain, clientId } from '../auth_config.json';

import CustomHeader from './components/styling/CustomHeader.vue'
import InputForm from './components/data/InputForm.vue'
import StandardButton from './components/styling/StandardButton.vue'
import CustomFooter from './components/styling/CustomFooter.vue'

const myApp = createApp(App).use(router)

myApp.use(VueAuth0Plugin, {
    domain,
    clientId,
    onRedirectCallback: (appState) => {
        router.push(
            appState && appState.targetUrl ?
            appState.targetUrl :
            window.location.pathname,
        );
    },
});

myApp.component('standard-button', StandardButton)
myApp.component('custom-header', CustomHeader)
myApp.component('custom-footer', CustomFooter)
myApp.component('input-form', InputForm)
myApp.mount('#app')
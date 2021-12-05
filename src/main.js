import { createApp } from 'vue'
import App from './App.vue'

import CustomHeader from './components/styling/CustomHeader.vue'

const myApp = createApp(App)

myApp.component(CustomHeader)
myApp.mount('#app')
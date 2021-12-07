import { createWebHistory, createRouter } from "vue-router";

import { LoginCallback } from '@okta/okta-vue';
import { navigationGuard } from '@okta/okta-vue'

import About from "@/views/About.vue";
import Home from "@/views/Home.vue";

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: '/login/callback',
        component: LoginCallback
    },
    {
        path: '/protected',
        component: Protected,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/login',
        component: Login
    }

];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});
router.beforeEach(navigationGuard)

export default router;
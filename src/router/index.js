import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Homepage/Home.vue";
import Login from '../pages/Authentication/Login.vue';
import SignUp from '../pages/Authentication/SignUp.vue';
import About from '../pages/About/About.vue';
import Pricing from '../pages/Pricing/Pricing.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'SignUp',
        component: SignUp
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/pricing',
        name: 'Pricing',
        component: Pricing
    },
]

const router = createRouter({
    history: createWebHistory(''),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
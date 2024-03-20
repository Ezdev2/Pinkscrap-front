import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/Homepage/Home.vue";
import Login from '../pages/Authentication/Login.vue';
import SignUp from '../pages/Authentication/SignUp.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/connexion',
        name: 'Login',
        component: Login
    },
    {
        path: '/inscription',
        name: 'SignUp',
        component: SignUp
    }
]

const router = createRouter({
    history: createWebHistory(''),
    // history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
import Vue from 'vue';
import VueRouter from 'vue-router';
// import components pages
import firstPage from './components/pages/MyFirstVuePage';
import secondPage from './components/pages/MySecondVuePage';

// Project Routes
import homePage from './components/pages/HomePage';
import tags from './components/pages/Tags';

Vue.use(VueRouter);

// Routes will be object array
const routes = [
    // Project Routes
    {
        path: '/',
        component: homePage,
    },
    {
        path: '/tags',
        component: tags,
    },
    {
        path: '/categories',
        component: tags,
    },
    // Test Routes
    {
        path: '/my-new-route',
        component: firstPage,
    },
    {
        path: '/my-second-route',
        component: secondPage,
    },
]

export default new VueRouter({
    mode: 'history',
    routes: routes,
    linkActiveClass: 'c-active',
});
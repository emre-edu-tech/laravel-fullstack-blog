/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

// Vue router
import VueRouter from './router';

// Core UI import
import { Sidebar, Alert, Popover } from '@coreui/coreui';

// Vuetify
import Vuetify from './plugins/vuetify';

// Main Vue Components
Vue.component('index-component', require('./components/IndexComponent.vue').default);
Vue.component('sidebar-component', require('./components/SidebarComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app',
    router: VueRouter,
    vuetify: Vuetify,
});

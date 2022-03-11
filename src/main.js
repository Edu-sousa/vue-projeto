import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'; // modulo para integrar essa aplicação com a API
import VueRouter from 'vue-router'; // modulo responsavel para a criação de uma SPA 
import { routes } from './routes'; // necessario para as criações das rotas

Vue.use(VueResource);


Vue.use(VueRouter);

const router = new VueRouter({
    routes
});


new Vue({
    el: '#app',
    router,
    render: h => h(App)
})
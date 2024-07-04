import { createRouter, createWebHistory } from 'vue-router';
import TelaInicial from '../components/TelaInicial.vue';
import TelaLogin from '../components/TelaLogin.vue';
import TelaVisitantes from '../components/TelaVisitantes.vue';

const routes = [
  { path: '/login', component: TelaLogin },
  { path: '/', component: TelaInicial },
  { path: '/visitantes', component: TelaVisitantes },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

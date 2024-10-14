import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/view/index.vue'; 

const routes = [
  { path: '/', component: Index }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

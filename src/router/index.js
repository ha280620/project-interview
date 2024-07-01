import { createRouter, createWebHistory } from 'vue-router'
import home from './router.js'
const routes = [...home];
const router = createRouter({
    history: createWebHistory(),
    routes
});
export default router;
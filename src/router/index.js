import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/InicioSesion.vue'
import Contrato from '@/views/Contrato.vue'

const routes = [
    { path: '/', name: "Login", component: Login },
    { path: '/contrato', name: "Contrato", component: Contrato }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
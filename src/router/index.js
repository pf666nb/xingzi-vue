// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from "@/views/Login.vue";

const router = createRouter({
    history: createWebHashHistory(), // hash 模式
    routes: [
        {
            path: '/',
            component: Index
        },
        {
            path: '/login',
            component: Login
        }
    ]
})

export default router

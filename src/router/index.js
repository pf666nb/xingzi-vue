// router/index.js
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from "@/views/Login.vue";
import {localGet} from "../utils";

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
router.beforeEach((to, from,next) =>{
    console.log(localGet('user'))
    if ((to.path !== '/login' && to.path !== "/" ) && localGet('user')==null) next({path: '/login'})
    else next()
})
export default router

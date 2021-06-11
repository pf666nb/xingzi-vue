
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/views/Index.vue'
import Login from "@/views/Login.vue";
import Search from "@/views/Search.vue";
import User from "@/views/User.vue";
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
        },
        {
            path: '/search',
            component: Search
        },
        {
            path: '/user',
            component: User
        }
    ]
})
router.beforeEach((to, from,next) =>{
    console.log(localGet('user'))
    if ((to.path !== '/login' && to.path !== "/" ) && localGet('user')==null) next({path: '/login'})
    else next()
})
export default router

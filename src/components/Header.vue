<template>
    <div class="topbar">
        <div class="container">
            <div class="topbar-nav">
                <a href="">杏子商场<span>|</span></a>
                <a href="">MIUI<span>|</span></a>
                <a href="">云服务<span>|</span></a>
                <a href="">金融<span>|</span></a>
                <a href="">有品<span>|</span></a>
                <a href="">小爱开放平台</a>
            </div>

            <div class="topbar-cart"><a href="">购物车 <span>（0）</span></a></div>

            <div class="topbar-info">
                <div v-if="isLogin">
                    <el-avatar shape="square" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <a href="" class="sep">消息通知</a>
                </div>
                <div v-else>
                    <router-link to="login">登录<span>|</span></router-link>
                    <a href="">注册<span>|</span></a>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    import {ref} from 'vue'
    export default {
        name: "Header",
        setup(){
            const isLogin = ref(true)

            return{
                isLogin
            }
        }
    }
</script>

<style scoped>
    body {
        margin: 0;
        padding: 0;
        height: 2500px;
        font: 14px/1.5 Helvetica Neue, Helvetica, Arial, Microsoft Yahei, Hiragino Sans GB, Heiti SC, WenQuanYi Micro Hei, sans-serif
    }
    .topbar-info span[data-v-61dd7a3d] {
        width: 50px;
        height: 50px;
        line-height: 60px;
        font-size: 12px;
        color: #424242;
        font-family: sans-serif;
        margin: 0.5rem;
    }
    .topbar {
        background-color: #333;
        height: 60px;
    }


    .container {
        /*块级元素居中*/
        margin: 0 auto;
        width: 1226px;
    }

    .container::before .container::after {
        content: '';
        display: table;

    }

    .container::after {
        clear: both;
    }

    .topbar a {
        text-decoration: none;
        color: #b0b0b0;
        font-size: 10px;
    }

    .topbar a:hover {
        color: #ffffff;
    }

    .topbar-nav {
        float: left;
        line-height: 60px;
        height: 60px;
        font-size: 0;
    }

    .topbar-nav span {
        font-size: 12px;
        color: #424242;
        font-family: sans-serif;
        margin: 0.5rem;


    }

    .topbar-info, .topbar-cart {
        float: right;
    }


    .topbar-cart a {
        display: block;
        height: 60px;
        line-height: 60px;
        text-align: center;
        width: 120px;
        background-color: #424242;
    }

    .topbar-cart a:hover {
        background-color: #ffffff;
        color: #ff6700;

    }

    .topbar-cart span {
        margin-left: -4px;
        font-size: 12px;
    }

    .topbar-info{
        margin-right: 15px;
    }


    .topbar-info a {
        float: left;
        height: 60px;
        line-height: 60px;
        padding: 0 5px;
    }

    .topbar-info span {
        height: 60px;
        line-height: 60px;
        font-size: 12px;
        color: #424242;
        font-family: sans-serif;
        margin: 0.5rem;
    }

    .topbar-info .sep {
        padding: 0 10px;
    }



</style>

<template>
    <div class="main">
        <el-carousel :interval="4000" type="card" height="500px">
            <el-carousel-item v-for="item in backgroudimage" :key="item">
                <el-image :src="item"></el-image>
            </el-carousel-item>
        </el-carousel>

        <el-divider content-position="center">热销商品<i class="el-icon-s-goods"></i></el-divider>
        <div class="hotShop">
            <div v-for="item in hotGoodsList" :key="item.goodsId">
                 <ShopCard :hotGood="item"/>
            </div>
        </div>
        <el-divider content-position="center">新品推荐<i class="el-icon-s-goods"></i></el-divider>
<!--        <Footer/>-->

    </div>
</template>

<script>
    import ShopCard from "@/components/ShopCard.vue";
    import {localGet} from "../utils";
    import {ref} from 'vue'
    import Footer from "@/components/Footer.vue";
    import axios from '@/utils/axios'
    export default {
        name: 'Index',
        components: {Footer, ShopCard},
        data(){
            return{
                backgroudimage:[
                    "src\\assets\\bg1.jpeg",
                    "src\\assets\\bg2.jpeg",
                    "src\\assets\\bg3.jpeg",
                    "src\\assets\\bg4.jpeg"
                ]
            }
        },
        setup(){

            let hotGoodsList = ref([]);
            //热销商品的获取
            axios.get("/goods/type/1").then(
                (res) =>{
                    hotGoodsList.value =  res.data
                }
            )

            return{
                hotGoodsList
            }

        }
    }

</script>
<style scoped>
    .main{
        overflow:auto;
        height: 80rem;
    }


    #container{
        box-shadow: 0 15px 30px 1px rgba(128, 128, 128, 0.31);
        background: rgba(255, 255, 255, 0.90);
        text-align: center;
        border-radius: 5px;
        overflow: hidden;
        margin: 5em auto;
        height: 350px;
        width: 700px;

    }

    .hotShop{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    /* 	Product details  */
    .product-details {
        position: relative;
        text-align: left;
        overflow: hidden;
        padding: 30px;
        height: 100%;
        float: left;
        width: 40%;

    }

    /* 	Product Name */
    #container .product-details h1{
        font-family: 'Old Standard TT', serif;
        display: inline-block;
        position: relative;
        font-size: 34px;
        color: #344055;
        margin: 0;

    }

    #container .product-details h1:before{
        position: absolute;
        content: '';
        right: 0%;
        top: 0%;
        transform: translate(25px, -15px);
        font-family: 'Farsan', cursive;
        display: inline-block;
        background: #FFA69E;
        border-radius: 5px;
        font-size: 14px;
        padding: 5px;
        color: #FFF;
        margin: 0;
        animation: chan-sh 6s ease infinite;

    }


    @keyframes chan-sh {
        from  {content: 'free shipping';}
        to  {content: 'New';}

    }

    /*Product Rating  */
    .hint-star {
        display: inline-block;
        margin-left: 0.5em;
        color: gold;
        width: 50%;
    }


    /* The most important information about the product */
    #container .product-details > p {
        font-family: 'Farsan', cursive;
        text-align: center;
        font-size: 20px;
        color: #7d7d7d;

    }

    /* control */

    .control{
        position: absolute;
        bottom: 20%;
        left: 22.8%;

    }
    /* the Button */
    .btn {
        transform: translateY(0px);
        transition: 0.3s linear;
        background: #49C608;
        border-radius: 5px;
        position: relative;
        overflow: hidden;
        cursor: pointer;
        outline: none;
        border: none;
        color: #eee;
        padding: 0;
        margin: 0;

    }

    .btn:hover{transform: translateY(-4px);}

    .btn span {
        font-family: 'Farsan', cursive;
        transition: transform 0.3s;
        display: inline-block;
        padding: 10px 20px;
        font-size: 1.2em;
        margin:0;

    }
    /* shopping cart icon */
    .btn .price, .shopping-cart{
        background: #333;
        border: 0;
        margin: 0;
    }

    .btn .price {
        transform: translateX(-10%); padding-right: 15px;
    }

    /* the Icon */
    .btn .shopping-cart {
        transform: translateX(-100%);
        position: absolute;
        background: #333;
        z-index: 1;
        left: 0;
        top: 0;
    }

    /* buy */
    .btn .buy {z-index: 3; font-weight: bolder;}

    .btn:hover .price {transform: translateX(-110%);}

    .btn:hover .shopping-cart {transform: translateX(0%);}



    /* product image  */
    .product-image {
        transition: all 0.3s ease-out;
        display: inline-block;
        position: relative;
        overflow: hidden;
        height: 100%;
        float: right;
        width: 50%;
        display: inline-block;
    }

    #container img {width: 100%;height: 100%;}

    .info {
        background: rgba(27, 26, 26, 0.9);
        font-family: 'Farsan', cursive;
        transition: all 0.3s ease-out;
        transform: translateX(-100%);
        position: absolute;
        line-height: 1.9;
        text-align: left;
        font-size: 120%;
        cursor: no-drop;
        color: #FFF;
        height: 100%;
        width: 100%;
        left: 0;
        top: 0;
    }

    .info h2 {text-align: center}
    .product-image:hover .info{transform: translateX(0);}

    .info ul li{transition: 0.3s ease;}
    .info ul li:hover{transform: translateX(50px) scale(1.3);}

    .product-image:hover img {transition: all 0.3s ease-out;}
    .product-image:hover img {transform: scale(1.2, 1.2);}
</style>

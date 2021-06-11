<template>
    <div class="search">
        <el-divider content-position="left">搜索结果</el-divider>
        <el-empty v-if="GoodsDetail.length<1" description="暂无对应商品哦！"/>
        <div v-else class="SearchRes">
            <div v-for="item in GoodsDetail" :key="item.goodsId">
                <ShopCard :hotGood="item"/>
            </div>
        </div>
        <div class="page">
        <el-pagination
                background
                layout="prev, pager, next"
                :total="0">
        </el-pagination>
        </div>
    </div>
</template>

<script>
    import bus from "../bus";
    import axios from '@/utils/axios'
    import {ref,computed} from 'vue'
    import ShopCard from "@/components/ShopCard.vue";
    export default {
        name: "Search",

        components: {
            ShopCard
        },
        setup(){

            let GoodsDetail = ref([]);
            let isEmpty = computed(()=>{
                return GoodsDetail.value;
            })

            bus.$on('Search',data=>{
                axios.get('goods/search?searchKey='+data).then(
                    res=>{
                        console.log(res.data)
                        GoodsDetail.value = res.data
                    }
                )
            })

            return{
                GoodsDetail,
                isEmpty
            }
        }
    }
</script>

<style scoped>
    .SearchRes{
        display: flex;
        justify-content: space-between;
    }
    .search{
        display: flex;
        justify-content: center;
        flex-direction: column;
        margin-top: 80px;

        align-items: center;
    }
    .el-image{
        width: 900px;
        height: 400px;

    }
    .page{
        margin-top: 150px;
        margin-bottom: 100px;
    }
</style>

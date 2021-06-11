<template>
  <el-container>
    <el-header v-if="showHeader"> <Header/> </el-header>
    <el-main><router-view></router-view></el-main>


<!--    <el-footer v-if="showHeader"> <Footer/> </el-footer>-->

  </el-container>

</template>

<script>
  import {toRefs,reactive} from 'vue'
  import {useRouter} from 'vue-router'
  import Header from "@/components/Header.vue";
  import Footer from "@/components/Footer.vue";

  export default {
    name: 'App',
    components: {Footer, Header},
    setup(){
      const noHeader = ['/login']
      const router = useRouter()
      const state = reactive({
        showHeader: true,
      })
      router.beforeEach(to => {
        state.showHeader = !noHeader.includes(to.path)
      })
      return {
        ...toRefs(state)
      }
    }
  }
</script>
<style scoped>

  .el-main{
    padding: 0;
  }
  .el-footer{
    margin: 0;
    padding: 0;
  }
  .el-header{
    padding: 0;
  }
  html{
    width: 100%;
    height: 100%;
  }
</style>

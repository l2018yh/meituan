<template>
  <el-container class="layout-default">

    <el-header height="197px"><top-index/></el-header>

    <el-main >
        <Nuxt />
    </el-main>
    
    <el-footer height="100%"><bottom-footer></bottom-footer></el-footer>

  </el-container>
</template>

<script>

  import TopIndex from '@/components/public/header/index.vue'
  import BottomFooter from "@/components/public/footer/index.vue"
  export default {
    components:{
        TopIndex,
        BottomFooter
    }
}
</script>
<style>
  
</style>
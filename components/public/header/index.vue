<template>
<!-- topbar和searchBar -->
  <div class="m-header">
      <el-row>
          <el-col>
              <top-bar/>
          </el-col>
      </el-row>
      <el-row>
          <el-col>
              <search-bar/>
          </el-col>
      </el-row>
  </div>
</template>

<script>
import topBar from './topBar.vue'
import SearchBar from './searchBar.vue'
export default {
    components:{
        topBar,
        SearchBar
    }
}
</script>

<style lang="scss">
    @import '@/assets/css/public/header/index.scss'
</style>
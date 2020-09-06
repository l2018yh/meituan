<template>
  <div class="m-life">
    <el-row>
        <el-col :span="14"><mslide/></el-col>
        <el-col :span="4">
            <nuxt-link to="/xiuXian">
                <div class="m-life-pic"></div>
            </nuxt-link>
        </el-col>
        <el-col :span="6" class="m-life-login">
            <p>
                <img src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg" alt="">
            </p>
            <p class="m-life-login-name">hi!&nbsp;&nbsp;你好</p>
            <p>
                <nuxt-link to="/register">
                    <el-button round>注册</el-button>
                </nuxt-link>
            </p>
             <p>
                <nuxt-link to="/login">
                    <el-button round>立即登录</el-button>
                </nuxt-link>
            </p>
        </el-col>
    </el-row>
    <el-row>
        <el-col :span="7">
            <nuxt-link to="/#23">
                <div class="m-life-hotel"></div>
            </nuxt-link>
        </el-col>
        <el-col :span="7">
            <nuxt-link to="/#23">
                <div class="m-life-music"></div>
            </nuxt-link>
        </el-col>
        <el-col :span="4">
            <nuxt-link to="/#23">
                <div class="m-life-coop"></div>
            </nuxt-link>
        </el-col>
        <el-col :span="6" class="m-life-downapp">
            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
            <p>美团APP手机版</p>
            <h4><span>1元起</span><em>吃喝玩乐</em></h4>
        </el-col>
    </el-row>
  </div>
</template>

<script>
import Mslide from "./slide.vue"
export default {
    components:{
        Mslide
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/index/life.scss"
</style>
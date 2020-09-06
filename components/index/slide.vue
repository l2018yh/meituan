<template>
    <el-carousel class="slide" height="240px" :interval="5000" arrow="hover">
        <el-carousel-item v-for="(item,idx) in slideList" :key="idx">
            <nuxt-link :to="item.url">
                <img :src="item.img" alt="">
            </nuxt-link>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    data(){
        return {
            slideList:[
                {
                    url:'/#asd',
                    img:'http://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png'
                },{
                    url:'/#ash',
                    img:'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg'
                },{
                    url:'/#cds',
                    img:'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg'
                }
            ]
        }
    }
}
</script>

<style scoped>
    .el-carousel__arrow{
        background: rgba(31,45,61,.5);
    }
    .el-carousel__button{
        width: 10px;
    }
</style>
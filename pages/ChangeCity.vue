<template>
    <div class="page-changeCity">
        <el-row>
            <el-col>
                <iselect/>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <hot/>
            </el-col>
        </el-row>
        <el-row>
            <el-col>
                <categroy/>
            </el-col>
        </el-row>
    </div>
</template>

<script>
import iSelect from "@/components/changeCity/iselect.vue"
import Hot from "@/components/changeCity/hot.vue"
import Categroy from "@/components/changeCity/categroy.vue"
export default {
    components:{iSelect,Hot,Categroy},
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style lang="scss">
    @import "@/assets/css/changecity/iselect.scss";
</style>

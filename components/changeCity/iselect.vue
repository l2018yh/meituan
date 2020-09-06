<template>
    <div class="m-iselect">
        <span class="label">按省份选择：</span>
        <el-select 
            class="province" 
            v-model="pvalue" 
            placeholder="省份">
            <el-option 
            class="input"
            v-for="item in province"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
        </el-select>
        <el-select 
            class="city" 
            v-model="cvalue" 
            :disabled="!city.length"
            placeholder="城市">
            <el-option
                class="input"
                v-for="item in city"
                :key="item.value"
                :label="item.label"
                :cvalue="item.value">
            </el-option>
        </el-select>
        <span class="label">直接搜索：</span>
        <el-autocomplete
            v-model="input"
            :fetch-suggestions="querySearchAsync"
            placeholder="请输入城市中文或拼音"
            @select="handleSelect">
        </el-autocomplete>
    </div>
</template>

<script>
export default {
    data() {
        return {
            province:[],
            pvalue:[],
            city:[],
            cvalue:[],
            input:''
        };
    },
    watch:{
        pvalue:async function(newPvalue){
            // let self = this
            // let {status,data:{city}}=await self.$axios.get(`/geo/province/${newPvalue}`)
            // if(status===200){
            //     self.city=city.map(item=>{
            //         return {
            //             value:item.id,
            //             label:item.name
            //         }
            //     })
            //     self.cvalue=''
            // }
        }
    },
    mounted:async function(){
        let self = this
        // let {status,data:{province}}=await self.$axios.get('/geo/province')
        // if(status === 200){
        //     self.province=province.map(item=>{
        //         return{
        //             value:item.id,
        //             label:item,name
        //         }
        //     })
        // }
    },
    methods: {
        querySearchAsync:function(){

        },
        handleSelect:function(){
            
        }
    }
};
</script>

<style lang="scss">
    @import "@/assets/css/changecity/iselect.scss";
</style>

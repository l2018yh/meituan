<template>
    <div class="m-hcity">
        <dl>
            <dt>热门城市：</dt>
            <dd
                v-for="item in list"
                :key="item.id"
                 >
                {{item.name==='市辖区'?item.province:item.name}}
            </dd>
        </dl>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:[
                {
                    id:1,
                    province:'市辖区',
                    name:'北京'
                },
                {
                    id:2,
                    province:'市辖区',
                    name:'上海'
                },
                {
                    id:3,
                    province:'',
                    name:'成都'
                },
                {
                    id:4,
                    province:'',
                    name:'西安'
                }
            ]
        };
    },
    created() {

    },
    // async mounted() {
    //     let {status,data:{hots}} = await this.$axios.get('/geo/hotCiTY')
    //     if(status == 200){
    //         this.list = hots
    //     }
    // },
    methods: {

    }
};
</script>

<style lang='scss'>
    @import '@/assets/css/changecity/hot.scss';
</style>

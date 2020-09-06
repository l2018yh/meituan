<template>
    <div class="m-categroy">
        <dl class="m-categroy-pinyin">
            <dt>按拼音首字母选择：</dt>
            <dd>
                <a
                    v-for="item in pinyin" 
                    :key="item" :href="'#city-'+item">{{item}}</a>
            </dd>
        </dl>
        <dl 
            class="m-categroy-section"
            v-for="item in block" 
            :key="item.title">
            <dt :id="'city-'+item">{{item.title}}</dt>
            <dd>
                <span 
                    v-for="cityItem in item.city" 
                    :key="cityItem">
                    {{cityItem}}
                </span>
            </dd>
        </dl>
    </div>
</template>

<script>
import pyjs from 'js-pinyin'
// import func from '../../vue-temp/vue-editor-bridge';
export default {
    data() {
        return {
            pinyin:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
            block:[],
            citys:[
                {
                    province:'直辖市',
                    id:20493,
                    name:'北京市'
                },{
                    province:'吉林省',
                    id:20433,
                    name:'安庆'
                },{
                    province:'内蒙古',
                    id:24493,
                    name:'包头'
                },{
                    province:'直辖市',
                    id:20693,
                    name:'重庆'
                },{
                    province:'吉林省',
                    id:26493,
                    name:'大连'
                },{
                    province:'内蒙古',
                    id:29493,
                    name:'鄂尔多斯'
                },{
                    province:'广东省',
                    id:23493,
                    name:'广州'
                }
            ]
        };
    },
    mounted() {
        let self = this 
        // let cityArr = []
        // for(let i = 0; i<self.citys.length; i++){
        //     let cityName = self.citys[i].name
        //     //取全部城市的首字母
        //     let fristName = pyjs.getCamelChars(cityName).substring(0, 1);    //这里截取首字母的第一位
        //     self.citys[i].frist = fristName
        //     cityArr.push(self.citys[i])
        // }
        // let cityJson = {}
        // for(var i = 0; i<self.pinyin.length; i++){
        //     cityJson[self.pinyin[i]] = cityArr.filter(function (value) {
        //         return value.first === self.pinyin[i]
        //     })
        // }
        // self.block = cityJson
        // console.log(cityJson)

        let blocks = []
        let p, c
        let d = {}
        self.citys.forEach(item => {
            let cityName = item.name
            p = pyjs.getCamelChars(cityName).substring(0, 1);
            console.log(p)
            c = p.charCodeAt(0)
            if(c>96&&c<123){
                if(!d[p]){
                    d[p] = []
                }else{
                    d[p].push(item.name)
                }
            }
        }) 
        console.log("d",d)
        for(let [k,v] in Object.entries(d)){
            blocks.push({
                title:k.toUpperCase(),
                city:v
            })
        }
        console.log(blocks)
        blocks.sort((a,b)=>a.title.charCodeAt(0)-b.title.charCodeAt(0))
        self.block = blocks
    },
    // async mounted() {
    //     let self = this
    //     let blocks = []
    //     let {status,data:{city}} = await self.$axios.get('/geo/city');
    //     if(status === 200){
    //         let p 
    //         let c
    //         let d = {}
    //         city.forEach(item => {
    //             p = pyjs.getFullChars(item.name).tolocaleLowerCase().slice(0,1)
    //             c = p.charCodeAt(0)
    //             if(c>96&&c<123){
    //                 if(!d[p]){
    //                     d[p] = []
    //                 }
    //                 d[p].push[item.name]
    //             }
    //         });
    //         for(let [k,v] in Object.entries(d)){
    //             blocks.push({
    //                 title:k.toUpperCase(),
    //                 city:v
    //             })
    //         }
    //         blocks.sort((a,b) => a.title.charCodeAt(0) - b.title.charCodeAt(0))
    //         self.block = blocks
    //     } 
    // },
    methods: {

    }
};
</script>

<style lang='scss'>
    @import '@/assets/css/changecity/categroy.scss'
</style>

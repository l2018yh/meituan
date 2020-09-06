<template>
    <div>
        <section class="m-istyle" >
        <dl>
            <dt>有格调</dt>
            <dd     
                v-for="(item,idx) in artisClass" 
                :key="idx" 
                @mouseenter="enter($event,item.type)" 
                @mouseleave="leave($event)">{{item.title}}</dd>
        </dl>
        <ul class="ibody">
            <li v-for="(item,idx) in cur" :key="idx">
                <el-card :body-style="{ padding: '0px' }" shadow="hover">
                    <img :src="item.img" class="image">
                     <ul class="cbody">
                        <li class="title">{{item.info}}</li>
                        <li class="pos"><span >{{item.pos.length == 0?'暂无':item.pos}}</span></li>
                        <li class="price">￥<em>{{item.price}}</em><span>/起</span></li>
                    </ul>
                </el-card>
            </li>
        </ul>
    </section>
    </div>
    
</template>

<script>
export default {
    data(){
        return{
            current:'all',
            kind:'all',
            artisClass: [{
                type:'all',
                title:"推荐民宿",
                detail:[{
                        img:"https://img.meituan.net/phoenix/14bc46b5740b7714df2dc3fbf27b542d1459696.jpg@740w_416h_1e_1c",
                        info:'长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租',
                        pos:"整套1居住·可住2人",
                        price:138
                    },{
                        img:'https://img.meituan.net/phoenix/837f659cc9516c0352a33aea816aab6c105955.jpg@740w_416h_1e_1c',
                        info:'长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租',
                        pos:"整套1居住·可住2人",
                        price:138
                    },{
                        img:'https://img.meituan.net/phoenix/08b15c5cceb43be412c4abb4b6db9459487840.jpg@740w_416h_1e_1c',
                        info:'长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租长租',
                        pos:"",
                        price:138
                    }]
                },{
                type:'movie',
                title:"猫眼电影",
                detail:[{
                        img:"https://p1.meituan.net/bbia/3e36af692ce40ea56575b7c19dc3581c464792.png@321w_180h_1e_1c",
                        info:'吉野家（龙湖大兴天街店）',
                        pos:'黄村',
                        price:3.5
                    }]
                }
            ]
        }
    },
    computed:{
        cur:function(){
            return this.artisClass.filter(item => {
                return item.type === this.kind
            })[0].detail
        }
    },
    methods:{
        enter:function($event,type){
            console.log($event.target.className);
            let self = this
            self._timer=setTimeout(function(){
                self.kind = type
                $event.target.className = "active"
                self.current = type
            },150)
        },
        leave:function($event){
            // self.current = type
            $event.currentTarget.className = ""
        },
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/index/artistic.scss"
</style>
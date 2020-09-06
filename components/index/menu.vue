<template>
    <div class="m-menu">
        <dl class="nav" @mouseleave="mouseleave">
            <dt>全部分类</dt>
            <dd 
                v-for="(item,idx) in menu" 
                :key="idx" 
                @mouseenter="mouseenter">
                <i :class="item.type"/>{{item.name}}<span class="arrow"/>
            </dd>
        </dl>
        <div class="detail" 
            v-if = "kind" 
            @mouseenter="sover" 
            @mouseleave="sout">
            <template 
                v-for="item in curdetail.child" >
                <h4 :key="item.title">{{item.title}} 
                    <nuxt-link class="detail-more" to="/toMore">查看更多<i class="el-icon-arrow-right
"/></nuxt-link>
                </h4>
                <span v-for="(v,idxs) in item.child" :key="idxs">{{v}}</span>
            </template>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            kind:'',
            menu:[
                {
                    type:'food',
                    name:'美食',
                    child:[
                        {
                            id:0,
                            title:'美食标题1',
                            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
                        },{
                            id:1,
                            title:'美食标题2',
                            child:['代金券','甜点饮品','火锅','自助餐','小吃快餐']
                        }
                    ]
                },
                {
                    type:'takeout',
                    name:'外卖',
                    child:[
                        {
                            id:0,
                            title:'外卖标题',
                            child:['美团外卖']
                        }
                    ]
                },
                {
                    type:'hotel',
                    name:'酒店',
                    child:[
                        {
                            id:0,
                            title:'酒店星际',
                            child:['经济型','舒适','三星','高档四星','五星']
                        }
                    ]
                },
                {
                    type:'homestay',
                    name:'美食',
                    child:[
                        {
                            id:0,
                            title:'酒店星际',
                            child:['经济型','舒适','三星','高档四星','五星']
                        }
                    ]
                },
                {
                    type:'movie',
                    name:'电影',
                    child:[
                        {
                            id:0,
                            title:'电影',
                            child:['经济型','舒适','三星','高档四星','五星']
                        }
                    ]
                },
                {
                    type:'airport',
                    name:'机票',
                    child:[
                        {
                            id:0,
                            title:'机票',
                            child:['经济型','舒适','三星','高档四星','五星']
                        }
                    ]
                },
                {
                    type:'ktv',
                    name:'KTV',
                    child:[
                        {
                            id:0,
                            title:'KTV',
                            child:['经济型','舒适','三星','高档四星','五星']
                        }
                    ]
                }
            ]
        };
    },
    computed:{
        curdetail:function(){
            return this.menu.filter((item) => item.type === this.kind)[0]
        }
    },
    methods:{
        mouseleave:function(){
            let self = this;
            self._timer = setTimeout(function(){
                self.kind = ''
            },150)
        },
        mouseenter:function(e){
            this.kind = e.target.querySelector("i").className
            // console.log(this.curdetail.child[0])
        },
        sover:function(){
            clearTimeout(this._timer)
        },
        sout:function(){
            this.kind = ''
        }
    }
};
</script>

<style lang="scss">

</style>

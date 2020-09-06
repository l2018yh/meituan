<template>
    <div class="page-login">
        <div class="login-header">
            <a href="http://www.meituan.com" class="logo"></a>
        </div>
        <section class="login-panel">
            <div class="banner">
                <img src="//s0.meituan.net/bs/file/?f=fe-sso-fs:build/page/static/banner/www.jpg" alt="">
            </div>
            <div class="form">
                <p class="tips">
                    账号登录
                    <em>手机动态码登录<i class="el-icon-mobile-phone"></i></em>
                </p>
                <el-from ref="form" :rules="rules" :model="form" label-width="100px">
                    <el-from-item>
                        <el-input placeholder="手机号" v-model="from.number" prop="number">
                            <template slot="prepend">+86></template>
                        </el-input>
                    </el-from-item>
                    <el-from-item>
                        <el-input placeholder="密码"  prefix-icon="el-icon-unlock" v-model="from.paw" prop="paw">
                            
                        </el-input>
                    </el-from-item>
                    <el-from-item>
                        <el-button class="btn-login" type="primary" @click="submitForm(ruleForm)">登录</el-button>
                    </el-from-item>
                    
                </el-from>
            </div>
        </section>
        
        <footer>
            <p>
                <a href="/">&copy;meituan.com</a>
                <span>京ICP证070791号</span>
                <span>京公网安备11010502025545号</span>
            </p>
        </footer>
    </div>
    
</template>

<script>
export default {
    layout:"blank",
    data(){
        var validatePass = (rule, value, callback) => {
            if (value == '') {
                return callback(new Error('手机号码不能为空'));
            } else if (value !== this.from.number){
                callback("请输入正确的手机号码！")
            } else {
                callback()
            }
        };
        
        var validatePass1 = (rule, value, callback) => {
            if (value == '') {
                return callback(new Error('请输入密码'));
            }
        };
        return {
            from:{
                number:'',
                paw:''
            },
            rules:{
                number:[
                    {validator: validatePass, trigger: 'blur'}
                ],
                paw:[
                    {validator: validatePass1, trigger: 'blur'}
                ]
            }
        }
    },
    methods: {
        submitForm(form) {
           this.$refs[form].validate((valid) => {
               if (valid){
                   alert("submit!");
               } else {
                   console.log('err submit!')
                   return false
               }
           })
      },
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/login/index.scss"
</style>
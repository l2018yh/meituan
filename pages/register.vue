<template>
    <div class="page-register">
        <article class="header">
            <header>
                <a href="javascript:;" class="site-logo"></a>
                <span class="login">
                    <em class="bold">已有美团账号？</em>
                    <a href="javascript:;">
                        <el-button type="primary" size="small" class="btn-login">登录</el-button>
                    </a>
                </span>
            </header>
        </article>
        <section>
            <el-form ref="ruleForm" status-icon :rules="rules"  :model="ruleForm" label-width="100px">
                <el-form-item label="用户名" prop="name">
                    <el-input type="text" v-model="ruleForm.name"></el-input>
                </el-form-item>
                <el-form-item label="邮箱验证码" prop="code">
                    <el-col :span="15"><el-input v-model="ruleForm.code"></el-input></el-col>
                    <el-col :span="9"><el-button type="email" round size="mini" @click="sendMessage">发送短信验证码</el-button></el-col>
                </el-form-item>
                <el-form-item label="创建密码" prop="pass" autocomplete="off">
                    <el-input type="password" v-model="ruleForm.pass"></el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass" autocomplete="off">
                    <el-input type="password" v-model="ruleForm.checkPass"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button class="agree" type="primary" @click="submitForm(ruleForm)">同意以下协议并注册</el-button>
                </el-form-item>
                <div class="xy-wrap">
                    <a class="xy" href="javascript:;">《美团点评用户服务协议》</a>
                    <a class="xy" href="javascript:;">《美团点评隐私政策》</a>
                </div>
            </el-form>
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
        var checkCode = (rule, value, callback) => {
            if (value == '') {
            return callback(new Error('验证码不能为空'));
            }
        };
        var validatePass = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请输入密码'));
            } else {
            if (this.ruleForm.checkPass !== '') {
                this.$refs.ruleForm.validateField('checkPass');
            }
                callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
                callback(new Error('两次输入密码不一致!'));
            } else {
                callback();
            }
        };
        var validatePass3 = (rule, value, callback) => {
            if (value === '') {
                callback(new Error('用户名不能为空'));
            } 
        };
        return {
           ruleForm: {
                name: '',
                code:'',
                pass: '',
                checkPass:''
            },
            rules: {
                name: [
                    { validator: validatePass3, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                checkPass: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                code: [
                    { validator: checkCode, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
       submitForm(formName) {
           const self = this;
           let namePass
           let emailPass
           if(self.timeid){
               return false
           }
           this.$refs[formName].validateField('name',(valid)=>{
               namePass = valid
           })
           self.statusMsg = ''
           if(namePass){
               return false
           }
           this.$refs[formName].validateField('email',(valid)=>{
               emailPass = valid
           })
        //   
        //    this.$refs[formName].validate((valid) => {
        //        if (valid){
        //            alert("submit!");
        //        } else {
        //            console.log('err submit!')
        //            return false
        //        }
        //    })
      },

      sendMessage(){
          alert("发送短信验证码")
      }
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/register/index.scss";
     // 处理input type = number的上下箭头
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    }
    input[type="number"]{
    -moz-appearance: textfield;
    }
</style>
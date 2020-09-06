export default{
    dbs:'mongodb://127.0.0.1:27017/student',//mongodb配置
    redis:{
        get host(){
            return '127.0.0.1'
        },
        get port(){
            return 6379
        }
    },
    smtp:{
        get host(){
            return 'smtp.qq.com'  //腾讯qq邮箱
        },
        get user(){
            return '1959849818@qq.com'
        },
        get pass(){ //生成的授权码
            return 'cmrffggwlwypdgeg'
        }
    },
    get code(){ //生成验证码
        return ()=> {
            return Math.random().toString(16).slice(2,6).toUpperCase()
        }
    },
    get expire(){
        return ()=>{
            return new Date().getTime()+60*60*1000
        }
    }
}
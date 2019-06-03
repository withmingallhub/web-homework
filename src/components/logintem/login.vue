<!--  -->
<template>
  <div class="note" id="particles-js">
    <div class="loginBlock" v-if="manauser">
      <div class="loginHead">
      </div>
      <div class="namePass">
        <strong style="font-weight:blod">登录到狗豪影院</strong>
        <div class="loginPassworld">
          <p>通过狗豪影院购票方便又快捷</p>
          <router-link to="/register">
            <a href="">没有账号？注册一个</a>
          </router-link>
          <span>丨</span><br><br>
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名或学号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <!-- 验证码 -->
            <FormItem>
              <div  @click="identifyCode"  style="height:30px;width:25%;float:left;margin-right:5%;">
                <img src="" id="_img" width="64px" height="28px">
              </div>
              <Input style="width:70%;" v-model="identify"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit(formInline,identify)">登录</Button>
                <a href="">忘记密码？</a>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>

    <div class="loginBlock" v-if="!manauser">
      <div class="loginHead">   
      </div>
      <div class="namePass">
        <strong style="font-weight:blod">登录到狗豪影院</strong>
        <div class="loginPassworld">
          <p>使用您的工作人员账号登录以使用相应的权限</p>
          <router-link to="/register">
            <a href="">没有账号？注册一个</a>
          </router-link>
          <span>丨</span><br><br>
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
            <FormItem prop="user">
                <Input type="text" v-model="formInline.user" placeholder="用户名或学号">
                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <FormItem prop="password">
                <Input type="password" v-model="formInline.password" placeholder="密码">
                    <Icon type="ios-lock-outline" slot="prepend"></Icon>
                </Input>
            </FormItem>
            <!-- 验证码 -->
            <FormItem>
              <div  @click="identifyCode"  style="height:30px;width:25%;float:left;margin-right:5%;">
                <img src="" id="_img" width="64px" height="28px">
              </div>
              <Input style="width:70%;" v-model="identify"></Input>
            </FormItem>
            <FormItem>
                <Button type="primary" @click="handleSubmit(formInline,identify)">登录</Button>
                <a href="">忘记密码？</a>
            </FormItem>
          </Form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Axios from './../../libs/axios.js' 
import api from './../../libs/request.js'
import particlesJs from "particles.js";
import particlesConfig from "@/assets/particles.json";

export default {
  data () {
    return {
      manauser:true,
       formInline: {
            user: '',
            password: ''
        },
        ruleInline: {
            user: [
                { required: true, message: 'Please fill in the user name', trigger: 'blur' }
            ],
            password: [
                { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                { type: 'string', min: 3, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
            ]
        },
        identify:''
    };
  },

  created: function(){},

  components: {},

  computed: {},
  methods: {
    init() {
        particlesJS("particles-js", particlesConfig);
        // document.body.style.overflow = "hidden";
      },
    handleSubmit(land,identify) {
        // this.$refs[name].validate((valid) => {
        //     if (valid) {
        //         this.$Message.success('Success!');
        //     } else {
        //         this.$Message.error('Fail!');
        //     }
        // })
        var code = identify;
        var Code = {
          code:code
        }
        var data = {
          username:land.user,
          password:land.password
        }
        // console.log(data)
//  --------验证验证码是否正确
  axios.post('http://taskerd.xupt.org/control/verify_Captcha',Code).then((res)=>{
    // console.log(res);
    if(res.data.status == 200){
        axios.post('http://47.94.92.88:8080/TTMS/login',data).then((res)=>{
          if(res.data.status == 200){
            localStorage.setItem('username',data.username);
            console.log(localStorage.getItem('username'))
            this.$router.push({path:'/'})
            location.reload()
          }else{
            this.$Message.error('用户名或密码错误！')
          }
        })
    }
    else{
      this.$Message.error('验证码错误！')
    }
  })
    },
    identifyCode(){
      var _img = document.getElementById('_img');
      console.log('000');
      var xhr = new XMLHttpRequest();
      xhr.onreadystatechange = function(){
     // xhr 对象改变的时候，执行该函数（回调）
      if(xhr.readyState == 4){// 服务端响应结束
          if(xhr.status == 200){// 200表示服务器正常响应结束
             // 接收返回来的响应文本
             var s = xhr.responseText;
             var obj = JSON.parse(s);
             _img.src = obj.data;
             console.log(obj.data,'111');
          }else{
             //弹出错误代码
             //  alert(xhr.status);
          }
     }
 }
  xhr.open("GET", "http://taskerd.xupt.org/control/getCaptcha", true);
  xhr.send(null);
    },
    
  },
   mounted: function(){
    this.init();
    this.identifyCode()
  },
}

</script>
<style scoped>
.note{
  height: 1000px;
}
.loginBlock{
  height: 380px;
  width: 340px;
  border: 1px solid #999999;
  background: rgba(255, 255, 255, 0.4);
  position: fixed;
  left: 10%;
  top: 180px;
}
.loginHead{
  height: 15%;
  width: 96%;
  position: relative;
  left: 2%;
}
.namePass{
  height: 85%;
  width: 90%;
  padding-left: 10px;
  position: relative;
  left: 5%;
  border-right:1px solid #999999;
  border-top: 5px solid rgb(24,56,103)
}
.loginPassworld{
  height: 100%;
  width: 90%;
  margin-top: 10px;
  position: relative;
  left: 5%;
}
#particles-js{
  width: 100%;
  height: 100%;
  background-color: rgb(27,51,89);
  background-image:url('../../assets/background.jpg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
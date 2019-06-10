<!--  -->
<template>
    <div id="particles-js">
    <div style="position:absolute;top:100px;left:50%;margin-left:-250px;background:rgba(255,255,255,0.3);">
      <div style="width:100%;border-bottom:4px solid black;height:50px;">
        <h1>注册账号</h1>
      </div>
      <div style="width:500px;">
        <div style="width:80%;position:relative;left:10%;">
          <Form ref="formInline" :model="formInline" :rules="ruleInline">
          <FormItem prop="user">
              请输入用户名<Input type="text" v-model="formInline.user" @on-blur="checkoutname">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              输入密码<Input type="password" v-model="formInline.password">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password">
              确认密码<Input type="password" v-model="formInline.ispassword">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem style="width:75%;float:left;" prop="secretkey">
              输入email<Input type="text" v-model="formInline.email">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
              <Button type="success" style="float:left;position:relative;top:33px;margin-left:20px;padding:5px;" @click="getCode">获取验证码</Button>
          <FormItem style="width:70%;clear:both;" prop="secretkey">
              输入验证码<Input type="password" v-model="formInline.code">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')">Signin</Button>
          </FormItem>
      </Form>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
// import { register } from '@/api/user'
import axios from 'axios'
import particlesJs from "particles.js";
import particlesConfig from "@/assets/particlesre.json";

export default {
  data () {
    return {
      formInline: {
          usertype:'',
          user: '',
          password: '',
          ispassword:'',
          secretkey:'',
          email:'',
          code:''
      },
      ruleInline: {
          user: [
              { required: true, message: 'Please fill in the user name', trigger: 'blur' }
          ],
          password: [
              { required: true, message: 'Please fill in the password.', trigger: 'blur' },
              { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
          ],
          email:[
            { required: true,message: 'please fill in the email',trigger: 'blur'},
            { type:'email'}
          ]
      }
    };
  },

  created: function(){},

  components: {},

  computed: {},

  mounted: function(){
    this.init();
  },

  methods: {
    checkoutname(){
      let username = this.formInline.user
      if(username != ''){
        axios.post('http://192.168.43.133:8080/TTMS/checkName',{username:username}).then((res)=>{
          if(res.data.status == 500){
            this.$Message.error('该用户名已被注册！')
          }
          else this.formInline.usertype = 'ok'
        })
      }
    },
    init() {
        particlesJS("particles-js", particlesConfig);
        // document.body.style.overflow = "hidden";
    },
    getCode(){
      if(this.formInline.usertype == 'ok'){
        if(this.formInline.ispassword == this.formInline.password){
          let email = this.formInline.email
          let username = this.formInline.user
          let password = this.formInline.password
          axios.defaults.withCredentials = true
          axios.post('http://192.168.43.133:8080/TTMS/checkMail',{
            username:username,
            password:password,
            mailbox:email,
          }).then((res)=>{
            if(res.data.status == 500){
              this.$Message.error('获取失败！')
            }
            else if(res.data.status == 200){
              let code = res.data.code
              localStorage.setItem('Code',code)
              this.$Message.success('发送成功！')
            }
          })
        }else{
          this.$Message.error('两次密码不相等！')
        }
      }else{
        this.$Message.error('用户名重复，请更换用户名！')
      }
    },
    handleSubmit(name) {
        this.$refs[name].validate((valid) => {
            if (this.formInline.password != this.formInline.ispassword) {
                this.$Message.error('两次密码不相等');
            }
            else{
              let Code = localStorage.getItem('Code')
              if(Code == '验证码：' + this.formInline.code){
                axios.post('http://192.168.43.133:8080/TTMS/register', {
                  username:this.formInline.user,
                  password:this.formInline.password,
                  mailbox:this.formInline.email
                })
                .then(function (response) {
                  console.log(response);
                })
              }else this.$Message.error('验证码错误！')
            }
        })
    }
  }
}

</script>
<style scoped>
#particles-js{
  width: 100%;
  height: 1000px;
  background-color: rgb(27,51,89);
  background-image:url('../../assets/background.jpg');
  background-attachment: fixed;
  background-repeat:no-repeat ;
  background-size:100% 100%;
}
</style>
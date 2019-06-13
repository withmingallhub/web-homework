<template>
    <div>
        <h3 style="margin-bottom:40px;">创建管理账号</h3>
        请输入用户名：<Input class="create" type="text" v-model="info.username"></Input>
        请输入密码：<Input class="create" type="password" v-model="info.password"></Input>
        <Button type="info" @click="sendNewUser">创建账号</Button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            info:{
                username:'',
                password:''
            }
        }
    },
    methods:{
        sendNewUser(){
            axios.post('http://192.168.43.133:8080/TTMS/addAdmin',this.info).then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang="">
.create{
    width:200px;
}
</style>
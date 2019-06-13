<template>
    <div style="text-align:left;">
        <div style="width:100px;height:100px;">
            <div v-if="!info.imgurl" style="height:100px;width:100px;border:1px solid rgb(200,200,200);border-radius:50%;">
                未添加头像
            </div>
            <div v-if="info.imgurl" style="width:100px;height:100px;border-radius:50%;">
                <img src="@/assets/my.jpg" alt="" width="100px" height="100px" style="border-radius:50%;">
            </div>
        </div>
        <div style="margin-top:30px;">
            用户名: <span style="font-size:1.2em;">{{ info.username }}</span>
            <br><br>
            <h3>我的余额:￥{{ info.money }}</h3>
            <br>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            info:{
                money:'',
                username:'',
                imgurl:'http://img2.imgtn.bdimg.com/it/u=1718395925,3485808025&fm=26&gp=0.jpg',
            },
            type_sign:true,
        }
    },
    methods:{
        signSubmit(){
            console.log('a')
        },
        cancleSubmit(){
            console.log('a')
            this.type_sign = true
        },
        getInfo(){
            let username = localStorage.getItem('username')
            this.info.username = username
            axios.post('http://192.168.43.133:8080/TTMS/getUser',{
                username:username
            }).then((res)=>{
                this.info.money = res.data.money
            })
        }
    },
    mounted(){
        this.getInfo()
    }
}
</script>

<style lang="">
    
</style>
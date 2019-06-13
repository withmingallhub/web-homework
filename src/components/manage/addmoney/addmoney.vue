<template>
    <div>
        <h3>用户金额充值</h3>
        <div style="text-align:center;margin-top:50px;">
            请输入用户名:<br>
            <Input class="input" type="text" v-model="addmoney.username"></Input>
            <br>        
            请输入充值金额:<br>
            <Input class="input" type="text" v-model="addmoney.money"></Input>
            <br>
            <Button type="info" @click="sendmoney">充值</Button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            addmoney:{
                money:0,
                username:'',
            }
        }
    },
    methods:{
        sendmoney(){
            axios.post('http://192.168.43.133:8080/TTMS/addMoney',{
                name:this.addmoney.username,
                num:this.addmoney.money
            }).then((res)=>{
                console.log(res)
            })
        }
    }
}
</script>

<style lang="">
.input{
    width:200px;
    margin-bottom: 30px;
}
</style>
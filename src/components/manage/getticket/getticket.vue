<template>
    <div>
        <h3>用户取票</h3>
        <div style="text-align:center;margin-top:50px;">
            请输入用户名:<br>
            <Input class="input" type="text" v-model="getticket.username"></Input>
            <br>        
            请输入演出厅名称:<br>
            <Input class="input" type="text" v-model="getticket.hallname"></Input>
            <br>
            请输入演出时间:<br>
            <Input class="input" type="text" v-model="getticket.playDate"></Input>
            <br>
            请输入座位行数:<br>
            <Input class="input" type="text" v-model="getticket.seatRow"></Input>
            <br>
            请输入演出厅列数:<br>
            <Input class="input" type="text" v-model="getticket.seatColumn"></Input>
            <br>
            <Button type="info" @click="sendticket">取票</Button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            getticket:{
                username:'',
                hallname:'',
                playDate:'',
                seatRow:'',
                seatColumn:''
            }
        }
    },
    methods:{
        sendticket(){
            axios.post('http://192.168.43.133:8080/TTMS/takeTicket',this.getticket).then((res)=>{
                if(res.data.status == 200){
                    this.$Message.success('取票成功！')
                    // location.reload()
                }
            })
        }
    }
}
</script>

<style lang="">
.input{
    width:200px;
    margin-bottom:30px;
}
</style>
<template>
    <div>
        <h3 style="margin-bottom:50px;">售票信息</h3>
        <div style="height:50px;width:400px;margin:10px 20px;padding-top:10px;border-top:1px solid rgb(200,200,200)">
            <div style="height:100%;width:50%;float:left">
                <p style="font-size:1.2em;color:rgb(200,100,100)">电影名称</p>
            </div>
            <div style="height:100%;width:50%;float:left;">
                <p style="font-size:1.2em;color:rgb(200,100,100)">卖票数量</p>
            </div>
        </div>
        <div style="height:50px;width:400px;margin:10px 20px;padding-top:10px;border-top:1px solid rgb(200,200,200)" v-for="(sell,index) in sells" :key="index">
            <div style="height:100%;width:50%;float:left">
                <p style="font-size:1.2em;">{{ sell.name }}</p>
            </div>
            <div style="height:100%;width:50%;float:left;">
                <p style="font-size:1.2em;">{{ sell.num }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            sells:[
                
            ]
        }
    },
    methods:{
        getMoviesTicket(){
            axios.get('http://192.168.43.133:8080/TTMS/getMovieSell').then((res)=>{
                this.sells = res.data
            })
        }
    },
    mounted(){
        this.getMoviesTicket()
    }
}
</script>
<template>
    <div>
        <div>
            <h3>删除电影</h3>
        </div>
        <div style="margin-top:30px;">
            <div class="none">
                输入删除电影名称：
                <br>
                <Input style="width:200px;margin-top:20px;" type="text" v-model="deletnone"></Input>
                <br>
                <Button type="info" style="margin-top:10px;" @click="deletmovies">删除</Button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            deletnone:'',
        }
    },
    methods:{
        deletmovies(){
            axios.post('http://192.168.43.133:8080/TTMS/delMovie',{
                moviename:this.deletnone
            }).then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
    }
}
</script>

<style lang="">
.none{
    margin-bottom: 20px;
}
</style>
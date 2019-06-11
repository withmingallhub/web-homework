<template>
    <div>
        <h2>上线仓库电影</h2>
        <div>
            <div>
                <Select v-model="online" style="width:200px" class="selectMovie">
                    <Option v-for="movie in movies" :value="movie" :key="movie">{{ movie }}</Option>
                </Select>
            </div>
            <Button type="info" style="margin-top:20px;" @click="onlineIt">上线该电影</Button>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            online:'',
            movies:[
            ],
        }
    },
    methods:{
        getmovie(){
            axios.get('http://192.168.43.133:8080/TTMS/getMovieNameListNotShow').then((res)=>{
                this.movies = res.data
                console.log(this.movies)
            })
        },
        onlineIt(){
            let data = this.online
            axios.post('',data).then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
        this.getmovie()
    }
}
</script>

<style lang="">
.selectMovie{
    margin-top: 50px;
}
</style>
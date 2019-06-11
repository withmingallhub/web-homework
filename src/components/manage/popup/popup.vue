<template>
    <div>
        <div class="header">
            <h2 style="text-align:center;">修改电影信息</h2>
            <h3 style="color:red;text-align:center;">{{ movie.movieName }}</h3>
        </div>
        <div>
            电影类型：<Input v-model="movie.movieInfo.movieType"></Input>
            <Row style="margin-top:20px;">
                <Col span="12">
                    <DatePicker class="movieInfo" placement='bottom' type="date" placeholder="选择电影上映时间" style="width: 200px" v-model="movie.movieInfo.onlineTime"  format="yyyy-MM-dd" @on-change='movie.movieInfo.onlineTime=$event' :options="options3"></DatePicker>
                </Col>
            </Row>
            电影时长：<Input v-model="movie.movieInfo.movieLong"></Input>
            导演：<Input v-model="movie.movieInfo.movieDirector"></Input>
            主演：<Input v-model="movie.movieInfo.movieProtag" type="textarea"></Input>
            介绍：<Input v-model="movie.movieInfo.introduct" type="textarea"></Input>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            movie:{
                movieName:'',
                movieInfo:{
                    moviename:'',
                    movieType:'',
                    onlineTime:'',
                    movieLong:'',
                    movieDirector:'',
                    movieProtag:'',
                    introduct:'',
                }

            },
            options3:{
                disabledDate (date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            }
        }
    },
    methods:{
        getMovieName(){
            let movieName = localStorage.getItem('noneImg')
            this.movie.movieName = movieName
            let data = {
                moviename:this.movie.movieName
            }
            axios.post('http://192.168.43.133:8080/TTMS/getMovieByName',data).then((res)=>{
                this.movie.movieInfo.movieType = res.data.type
                this.movie.movieInfo.movieLong = res.data.duration
                this.movie.movieInfo.movieDirector = res.data.author
                this.movie.movieInfo.movieProtag = res.data.production
                this.movie.movieInfo.introduct = res.data.introduction
                var date = new Date(res.data.releaseDate);
                var y = date.getFullYear();
                var m = date.getMonth() + 1;
                m = m < 10 ? ('0' + m) : m;
                var d = date.getDate();
                d = d < 10 ? ('0' + d) : d;
                this.movie.movieInfo.onlineTime = y + '-' + m + '-' + d
            })



            
            console.log(this.movie.movieInfo)
        },
        movieChange:function() {
            this.movie.movieInfo.moviename = this.movie.movieName 
            this.$emit('changeMovieInfo', this.movie.movieInfo)
        },
    },
    mounted() {
        this.getMovieName()
    },
    // 在该组件被销毁前向父组件传值
    beforeUpdate:function(){
        this.movieChange();
    }
}
</script>

<style lang="">
    
</style>
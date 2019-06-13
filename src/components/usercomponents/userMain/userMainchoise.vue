<style lang="">
li{
    list-style: none;
}
.changeImg {
    width:100%;
    height: 500px;
    min-width: 800px;
    padding-right: 2.5%;
    padding-left:2.5%;
}
.changeImg::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:500px;
    background:transparent url("http://attachments.gfan.net.cn/forum/201703/09/003029ccu4wuooyi0o0y9z.jpg") center center no-repeat;
    filter:blur(3px);
    z-index:-1;
    background-size:cover;
}
.swiper-container {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
}
.swiper-slide {
    width: 260px;
    height: 412px;
}
.swiper-slide:hover {
    cursor: pointer;
}
.swiper-cent {
    background-position: center;
    background-size: cover;
}
.hotAndPre{
    height:300px;
    width:100%;
    margin-top:20px;
}
.hotPreTop{
    width:90px;
    height:13%;
    font-size: 1.2em;
    color:rgb(6,193,174);
    float:left;
    padding: 10px;
    text-align: center;
    list-style:none;
    border-top:4px;
}
.hotPreTop:hover{
    cursor: pointer;
    border-top:4px solid rgba(6,193,174,0.5)
}
.hotPreTopClick{
    width:90px;
    height:13%;
    font-size: 1.2em;
    color:rgb(6,193,174);
    float:left;
    padding: 10px;
    text-align: center;
    list-style:none;
    border-top:4px;
    border-top:4px solid rgb(6,193,174);
}
.hotPreMain{
    height: 80%;
    width: 100%;
    margin-top: 20px;
    white-space: nowrap;
    overflow: hidden;
}
.everyHotPre{
    height:100%;
    width:200px;
    float:left;
}
.movieClickName{
    font-size:1.2em;
    margin-top:10px;
    padding: 0px 20px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
}
.movieClickName:hover{
    cursor: pointer;
}
.movieClickImg:hover{
    cursor: pointer;
}
.ranking {
    margin-top: 30px;
    border-top: 1px solid rgb(200,200,200);
    height: 300px;
    min-width: 800px;
}
.heighGrade {
    float: left;
    margin-left: 20px;
}
.newMovie {
    float: left;
    margin-right:20px;   
}
.rankingName {
    height: 60px;
    width: 80%;
    font-size: 2em;
    color: orange;
}
.rankingMovie {
    height: 40px;
    width: 80%;
    padding: 0px 30px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    line-height: 40px;
    font-size: 1.3em;
}
.rankingMovie:hover{
    cursor: pointer;
    border-left:3px solid rgba(6,193,174,0.5);
}
.aaa{
    color:orange;
    position: relative;
    bottom:50px;
}
.aaa:hover{
    cursor: pointer;
}
</style>
<template>
    <div>
        <div class="changeImg"> <!-- 轮播图组件 -->
            <div class="swiper-container">
            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
            <div class="swiper-wrapper">
                    <div class="swiper-slide" @click="getMovieDetail(swip[0].name)">    
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[0].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[0].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
                    <div class="swiper-slide"  @click="getMovieDetail(swip[1].name)">
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[1].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[1].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
                    <div class="swiper-slide"  @click="getMovieDetail(swip[2].name)">
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[2].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[2].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
                    <div class="swiper-slide"  @click="getMovieDetail(swip[3].name)">
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[3].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[3].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
                    <div class="swiper-slide"  @click="getMovieDetail(swip[4].name)">
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[4].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[4].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
                    <div class="swiper-slide"  @click="getMovieDetail(swip[5].name)">
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[5].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[5].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
                    <div class="swiper-slide"  @click="getMovieDetail(swip[6].name)">
                        <div class="swiper-cent" :style="{height:'87%',width:'100%',backgroundImage:'url('+ swip[6].url +')'}">
                            <div class="swiper-back" style="padding:10px;position:relative;top:85%;font-size:1.3em;height:15%;width:100%;color:rgb(255,246,213);background: -webkit-linea-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: -o-linear-gadient(rgba(0,0,0,0), rgba(0,0,0,0.8)); background: -moz-liear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8));background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8)); ">
                                <p>{{ swip[6].name }}</p>
                            </div>
                        </div>
                        <div style="height:13%;width:100%;background:rgb(237,72,40);font-size:2em;padding:10px;">
                            <p style="margin:auto;color:rgb(255,246,213)">立即购票</p>
                        </div>
                    </div>
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
        </div>
        </div>
        <!-- 渲染热播榜，和即将上线相互切换的组件 -->
        <div class="hotAndPre">
            <ul style="overflow:hidden;border-bottom:1px solid rgb(200,200,200)">
                <li @click="hotPreClick(index)" :class="hotPreChange.type == index? 'hotPreTopClick' : 'hotPreTop'" v-for="(change,index) in hotPreChange.chang" :key="index">{{ change }}</li>
                <li style="float:right;margin-top:15px;margin-right:60px;"><a href="" @click="moreMovies(hotPreChange.sendMovie,hotPreChange.chang,hotPreChange.type)" style="color:orange;">查看更多</a></li>
            </ul>
            <div class="hotPreMain" v-if="hotPreChange.type == 0">
                <div class="everyHotPre" v-for="(movie,index) in hotPreChange.hotMovie" :key="index">
                    <img class="movieClickImg" @click="getMovieDetail(movie.name)" :src="movie.url" alt="" height="80%" width="80%">
                    <p class="movieClickName" @click="getMovieDetail(movie.name)">{{ movie.name }}</p>
                </div>
            </div>
            <div class="hotPreMain" v-if="hotPreChange.type == 1">
                <div class="everyHotPre" v-for="(movie,index) in hotPreChange.preMovie" :key="index">
                    <img class="movieClickImg" @click="getMovieDetail(movie.name)" :src="movie.url" alt="" height="80%" width="80%">
                    <p class="movieClickName" @click="getMovieDetail(movie.name)">{{ movie.name }}</p>
                </div>
            </div>
        </div>
        <!-- 渲染新上线，高分的电影 -->
        <div class="ranking">
            <!-- 高分电影榜 -->
            <div class="heighGrade">
                <ul style="width:300px;">
                    <li class="rankingName" style="text-align:center;">高分榜</li><p class="aaa" @click="hightmore" style="float:right;font-size:0.7em;">查看更多</p>
                    <li class="rankingMovie" v-for="(one,index) in heighGrade.slice(0,5)" :key="index"  @click="getMovieDetail(one.name)">{{ one.name }}</li>
                </ul>
            </div>
            <!-- 新上线电影榜 -->
            <div class="newMovie">
                <ul style="width:300px;">
                    <li class="rankingName" style="text-align:center;">新上线</li><p class="aaa" @click="newmore" style="float:right;font-size:0.7em;">查看更多</p>
                    <li class="rankingMovie" v-for="(one,index) in newMovie.slice(0,5)" :key="index"  @click="getMovieDetail(one.name)">{{ one.name }}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';
import axios from 'axios'

export default {
    data() {
        return {
            // 存储轮播图电影信息的对象数组
            swip:[
                {
                    url:'',
                    name:''
                },
                {
                    url:'',
                    name:''
                },
                {
                    url:'',
                    name:''
                },
                {
                    url:'',
                    name:''
                },
                {
                    url:'',
                    name:''
                },
                {
                    url:'',
                    name:''
                },
                {
                    url:'',
                    name:''
                },
            ],
            // 高分榜
            heighGrade:[
                
            ],
            // 新上线
            newMovie:[
                
            ],
            // 热播榜 
            // chang 用循环渲染顶部切换按钮
            // type 根据0 或1动态改变电影数组信息
            // sendMovie 向子组件，查看更多发送电影数组信息
            // hotMovie PreMoview 动态打印电影数组信息
            hotPreChange:{
                chang:['热播榜','即将上线'],
                type:0,
                sendMovie:[],
                hotMovie:[
                    
                ],
                preMovie:[
                    
                ]
            },
            

        }
    },
    mounted:function(){
        this.getnewmovies()
        this.getpremovies()
        this.gethighmovies()
        this.gethotmovies()
        this.hotPreChange.sendMovie = this.hotPreChange.hotMovie
        // 钩子函数执行轮播图的js代码
        var swiper = new Swiper('.swiper-container', {
            effect: 'coverflow',
            autoplay:{
                delay:4000,
                disableOnInteraction: false,
            },
            centeredSlides: true,
            slidesPerView: 'auto',
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows : true,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation:{
                nextEl: '.swiper-button-next', //前进按钮的css选择器或HTML元素。
                prevEl: '.swiper-button-prev',
            },
        });
    },
    methods: {
        // 点击轮播图的任意一张电影，将该电影的name名称存入localstorage之中，防止刷新选座路由没有数据，并且跳转选座路由
        getMovieDetail(name) {
                localStorage.setItem('name',name)
                this.$router.push({
                path: '/buytickets',
            })
        },
        // 点击热播榜或即将上线的切换按钮，触发
        hotPreClick(index){
            this.hotPreChange.type = index
            if(index == 0){
                this.hotPreChange.sendMovie = this.hotPreChange.hotMovie
            }
            else if(index == 1){
                this.hotPreChange.sendMovie = this.hotPreChange.preMovie
            }
        },
        moreMovies(arr,chang,type){
            localStorage.setItem('moreMovies',JSON.stringify(arr));
            if(chang == this.hotPreChange.chang){
                if(type == 0)
                    localStorage.setItem('moreMoviesName','热播榜');
                else if(type == 1)
                    localStorage.setItem('moreMoviesName','即将上线');
            }
            this.$router.push({path:'/moreMovies'})
        },
        getnewmovies(){
            axios.get('http://192.168.43.133:8080/TTMS/getNewMovie').then((res)=>{
                this.newMovie = res.data
                for(let i = 0;i < res.data.length;i ++){
                    this.newMovie[i].name = res.data[i].moviename
                    this.newMovie[i].url = res.data[i].photo
                }
            })
        }, 
        getpremovies(){
            axios.get('http://192.168.43.133:8080/TTMS/getMovieList/Future').then((res)=>{
                this.hotPreChange.preMovie = res.data
            })
        },
        gethighmovies(){
            axios.get('http://192.168.43.133:8080/TTMS/getMovieList/High').then((res)=>{
                this.heighGrade = res.data
                let arry = []
                for(let i = 0;i < 7;i ++){
                    arry[i] = res.data[i]
                }
                this.swip = arry
            })
        },
        gethotmovies(){
            axios.get('http://192.168.43.133:8080/TTMS/getMovieList/Hot').then((res)=>{
                this.hotPreChange.hotMovie = res.data
                this.hotPreChange.sendMovie = res.data
            })
        },
        hightmore(){
            localStorage.setItem('moreMoviesName','高分榜')
            localStorage.setItem('moreMovies',JSON.stringify(this.heighGrade));
            this.$router.push({path:'/moreMovies'})
        },
        newmore(){
            localStorage.setItem('moreMoviesName','新上线')
            localStorage.setItem('moreMovies',JSON.stringify(this.newMovie));
            this.$router.push({path:'/moreMovies'})
        }
    }
}
</script>
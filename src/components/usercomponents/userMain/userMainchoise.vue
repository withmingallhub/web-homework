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
    background-image: url('http://img4.imgtn.bdimg.com/it/u=2803748476,3995849302&fm=26&gp=0.jpg');
    background-repeat:no-repeat;
    background-size: 100% 100%;
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
.ranking {
    margin-top: 30px;
    border: 1px solid black;
    height: 300px;
    min-width: 800px;
}
.rankingGrade {
    float: left;
    margin-left: 20px;
}
.rankingNew {
    float:left;
    position: relative;
    left: 50%;
    margin-left:-470px;
}
.rankingHeigh {
    float: right;
    margin-right:20px;   
}
.rankingName {
    height: 60px;
    font-size: 2em;
    color: red;
}
.rankingMovie {
    height: 60px;
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
        <!-- 渲染热门，新上线，高分的电影 -->
        <div class="ranking">
            <div class="rankingHeigh">
                <ul style="width:300px;">
                    <li class="rankingName" style="text-align:center;">热播榜</li>
                    <li class="rankingMovie">1</li>
                    <li class="rankingMovie">2</li>
                    <li class="rankingMovie">3</li>
                    <li class="rankingMovie">4</li>
                </ul>
            </div>
            <div class="rankingGrade">
                <ul style="width:300px;">
                    <li class="rankingName" style="text-align:center;">高分榜</li>
                    <li class="rankingMovie">1</li>
                    <li class="rankingMovie">2</li>
                    <li class="rankingMovie">3</li>
                    <li class="rankingMovie">4</li>
                </ul>
            </div>
            <div class="rankingNew">
                <ul style="width:300px;">
                    <li class="rankingName" style="text-align:center;">新上线</li>
                    <li class="rankingMovie">1</li>
                    <li class="rankingMovie">2</li>
                    <li class="rankingMovie">3</li>
                    <li class="rankingMovie">4</li>
                </ul>
            </div>
        </div>
        <div>
            <Row>
        <Col span="12">
            <DatePicker placement='bottom' type="date" placeholder="Select date" style="width: 200px"></DatePicker>
        </Col>
    </Row>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'; 
import 'swiper/dist/css/swiper.min.css';

export default {
    data() {
        return {
            // 存储轮播图电影信息的对象数组
            swip:[
                {
                    url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3895436776,1493313546&fm=58&s=C115C730589647FF5E89F0C5030070A1',
                    name:'流浪地球'
                },
                {
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    name:'复仇者联盟4'
                },
                {
                    url:'https://ss1.baidu.com/6ONXsjip0QIZ8tyhnq/it/u=3895436776,1493313546&fm=58&s=C115C730589647FF5E89F0C5030070A1',
                    name:'流浪地球'
                },
                {
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=385795278,2261803346&fm=58&s=CBA5870A4C9401EBF92A454F030070FA',
                    name:'调音师'
                },
                {
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3774822990,1063619265&fm=58&s=590208D646628EF044051C3403005019',
                    name:'老师.好'
                },
                {
                    url:'https://ss2.baidu.com/6ONYsjip0QIZ8tyhnq/it/u=1792542740,2813351586&fm=58&s=9AB0008A5427E2FB50380DC00300D0A1',
                    name:'何以为家'
                },
                {
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=385795278,2261803346&fm=58&s=CBA5870A4C9401EBF92A454F030070FA',
                    name:'调音师'
                },
            ],
            // 高分榜
            heighGrade:[

            ],
            // 新上线
            newMovie:[

            ],
            // 热播榜
            

        }
    },
    mounted:function(){
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
        }
    }
}
</script>
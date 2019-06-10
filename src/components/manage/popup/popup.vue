<template>
    <div>
        <div class="header">
            <h2 style="text-align:center;">修改电影信息</h2>
            <h3 style="color:red;text-align:center;">{{ movie.movieName }}</h3>
        </div>
        <div>
            电影类型：<Input :value="movie.movieInfo.movieType"></Input>
            <Row style="margin-top:20px;">
                <Col span="12">
                    <DatePicker class="movieInfo" placement='bottom' type="date" placeholder="选择电影上映时间" style="width: 200px" v-model="movie.movieInfo.onlineTime"  format="yyyy-MM-dd" @on-change='movie.movieInfo.onlineTime=$event' :options="options3"></DatePicker>
                </Col>
            </Row>
            电影时长：<Input :value="movie.movieInfo.movieLong"></Input>
            导演：<Input :value="movie.movieInfo.movieDirector"></Input>
            主演：<Input :value="movie.movieInfo.movieProtag"></Input>
            介绍：<Input :value="movie.movieInfo.introduct"></Input>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movie:{
                movieName:'',
                movieInfo:{
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
            this.movie.movieInfo = {
                movieType:'动作、科幻',
                onlineTime:'2019-06-07',
                movieLong:'181',
                movieDirector:'安东尼·罗素、乔·罗素',
                movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
            }
            console.log(this.movie.movieInfo)
        }
    },
    mounted() {
        this.getMovieName()
    },
}
</script>

<style lang="">
    
</style>
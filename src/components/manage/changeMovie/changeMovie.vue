<template>
    <div style="margin-left:50px;border:1px solid black;overflow:hidden;width:90%;">
        <h2>修改电影信息</h2>
        <div class="unmovies" v-for="(movie,index) in movies" :key="index">
            <h3 style="text-align:center;">{{ movie.movieName }}</h3>
            <div style="width:100%;height:250px;border:1px solid black;background:rgb(177,177,177)">
                <h3 v-if="!movie.movieUrl" style="text-align:center;">未添加电影封面</h3>
                <img v-if="movie.movieUrl" :src="movie.movieUrl" alt="" width="100%" height="100%">
            </div>
            <div style="text-align:center;" v-if="!movie.change">
                <Button type="info" style="width:100%;border-radius:0px;" @click="alert(movie.movieName)">修改该电影相关信息</Button>
            </div>
            <div style="overflow:hidden;" v-if="movie.change">
                <Button type="warning" style="width:50%;float:left;border-radius:0px">修改图像</Button>
                <Button type="success" style="width:50%;float:right;border-radius:0px;">修改信息</Button>
            </div>
            <div style="text-align:center;" v-if="movie.change">
                <Button type="error" style="width:100%;border-radius:0px;" @click="movie.change = false">取消修改</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            movies:[
                {
                    change:false,
                    movieUrl:'',
                    movieName:'复仇者联盟4',
                    movieType:'动作、科幻',
                    onlineTime:'2019-06-07',
                    movieLong:'181',
                    movieDirector:'安东尼·罗素、乔·罗素',
                    movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                    introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
                },
                {
                    change:false,
                    movieUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    movieName:'复仇者联盟3',
                    movieType:'动作、科幻',
                    onlineTime:'2022-06-07',
                    movieLong:'181',
                    movieDirector:'安东尼·罗素、乔·罗素',
                    movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                    introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
                },
                {
                    change:false,
                    movieUrl:'',
                    movieName:'复仇者联盟10',
                    movieType:'动作、科幻',
                    onlineTime:'2020-06-07',
                    movieLong:'181',
                    movieDirector:'安东尼·罗素、乔·罗素',
                    movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                    introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
                }
            ],
        }
    },
    methods:{
        offChange(name){
            for(let i = 0;i < this.movies.length;i ++){
                if(movies[i].movieName == name){
                    movies[i].change = true
                }
                else mocies[i].change = false
            }
        }
    }
}
</script>

<style lang="">
.unmovies{
    width: 170px;
    height: 350px;
    margin-top: 40px;
    float: left;
    margin-right: 40px;
    border:1px solid black;
}
</style>
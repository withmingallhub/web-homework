<template>
    <div style="margin-left:50px;overflow:hidden;width:90%;">
        <h2>修改电影信息</h2>
        <div class="unmovies" v-for="(movie,index) in movies" :key="index">
            <h3 style="text-align:center;background:rgb(87,197,247);">{{ movie.movieName }}</h3>
            <div style="width:100%;height:250px;background:rgb(177,177,177)">
                <h3 v-if="!movie.movieUrl" style="text-align:center;">未添加电影封面</h3>
                <img v-if="movie.movieUrl" :src="movie.movieUrl" alt="" width="100%" height="100%">
            </div>
            <div style="text-align:center;" v-if="!movie.change">
                <Button type="info" style="width:100%;border-radius:0px;" @click="offChange(movie.movieName)">修改该电影相关信息</Button>
            </div>
            <div style="overflow:hidden;" v-if="movie.change">
                <Upload 
                    ref="upload"
                    :show-upload-list="false"
                    :format="['jpg','jpeg','png']"
                    :on-success="handleSuccess"
                    action="http://192.168.43.133:8080/TTMS/addMovieOnlyPhoto"
                    :data="noneImg1" 
                    style="width:50%;float:left;border-radius:0px;padding:0px;border:0px;margin:0px">
                    <Button type="warning" style="height:100%;width:100%;border-radius:0px;">修改图像</Button>
                </Upload>
                <Button @click="handleRender" type="success" style="width:50%;float:right;border-radius:0px;">修改信息</Button>   
            </div>
            <div style="text-align:center;" v-if="movie.change">
                <Button type="error" style="width:100%;border-radius:0px;" @click="movie.change = false">取消修改</Button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import popup from '@/components/manage/popup/popup'
export default {
    data(){
        return{
            noneImg1:{

            },
            movies:[
                // {
                //     change:false,
                //     movieUrl:'',
                //     movieName:'复仇者联盟4',
                //     movieType:'动作、科幻',
                //     onlineTime:'2019-06-07',
                //     movieLong:'181',
                //     movieDirector:'安东尼·罗素、乔·罗素',
                //     movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                //     introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
                // },
                // {
                //     change:false,
                //     movieUrl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                //     movieName:'复仇者联盟3',
                //     movieType:'动作、科幻',
                //     onlineTime:'2022-06-07',
                //     movieLong:'181',
                //     movieDirector:'安东尼·罗素、乔·罗素',
                //     movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                //     introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
                // },
                // {
                //     change:false,
                //     movieUrl:'',
                //     movieName:'复仇者联盟10',
                //     movieType:'动作、科幻',
                //     onlineTime:'2020-06-07',
                //     movieLong:'181',
                //     movieDirector:'安东尼·罗素、乔·罗素',
                //     movieProtag:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                //     introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。'
                // }
            ],
            changeMovieInfo:{

            }
        }
    },
    methods:{
        offChange(name){
            for(let i = 0;i < this.movies.length;i ++){
                if(this.movies[i].movieName == name){
                    this.movies[i].change = true
                    localStorage.setItem('noneImg',this.movies[i].movieName)
                    this.noneImg1 = {
                        noneImg:this.movies[i].movieName
                    }
                }
                else this.movies[i].change = false
            }
            console.log(this.movies)
        },
        handleRender () {
        this.$Modal.confirm({
          render: (h) => {
            return h(popup, {
                on: {
                    changeMovieInfo: (changeMovieInfo) => {
                        this.changeMovieInfo = changeMovieInfo
                    },
                }
            })
          },
          onOk: () => {
                let data = {
                    type:this.changeMovieInfo.movieType,
                    duration:this.changeMovieInfo.movieLong,
                    author:this.changeMovieInfo.movieDirector,
                    production:this.changeMovieInfo.movieProtag,
                    introduction:this.changeMovieInfo.introduct,
                    releaseDate:this.changeMovieInfo.onlineTime,
                    moviename:this.changeMovieInfo.moviename
                }
                console.log(data)
                axios.post('http://192.168.43.133:8080/TTMS/alterMovie',data).then((res)=>{
                    console.log(res)
                })
                // const msg = this.$Message.loading({
                //     content: '正在保存..',
                //     duration: 1,
                // })
          }, 
        })    
      },
      getMovies(){
          axios.get('http://192.168.43.133:8080/TTMS/getMovieList').then((res)=>{
              console.log(res.data[0].photo)
              for(let i = 0;i < res.data.length;i ++){
                  this.movies.push({
                        change:false,
                        movieUrl : res.data[i].photo,
                        movieName : res.data[i].moviename,
                        movieType : res.data[i].type,
                        onlineTime : res.data[i].releaseDate,
                        movieLong : res.data[i].duration,
                        movieDirector : res.data[i].author,
                        movieProtag : res.data[i].production,
                        introduct : res.data[i].introduction
                  })
              }
              console.log(this.movies)
          })
      },
      handleSuccess(){
          this.$Message.success('上传成功')
          location.reload()
      }
    },
    mounted(){
        this.getMovies()
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
}
.ivu-upload{
    height:100%;
    width:100%;
}
.ivu-upload-list{
    margin:0px;
}
</style>
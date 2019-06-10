<template>
    <div>
        <div style="width:100%;height:350px;">
            <div style="width:1100px;height:350px;position:relative;left:50%;margin-left:-550px;">
                <div>
                    <span style="font-weight:1000;font-size:2em;">{{ name }}</span>
                </div>
                <div style="height:289px;width:200px;float:left;">
                    <img :src="introduce.url" width="200px" height="289px" style="float:left;">
                </div>
                <div style="float:left;height:289px;width:600px;margin-left:20px;text-align:left;">
                    <h1 style="color:red;margin-bottom:20px;">{{ introduce.grade }}</h1>
                    <p class="movieIfo">导演：{{ introduce.director }}</p>
                    <p class="movieIfo">主演：{{ introduce.act }}</p>
                    <p class="movieIfo">电影类型：{{ introduce.type }}</p>
                    <p class="movieIfo">电影时长：{{ introduce.timelong }}</p>
                    <p class="movieIfo"> 剧情介绍：{{ introduce.introduct }}</p>
                </div>
                <div style="width:200px;height:289px;float:left;text-align:left;margin-left:80px;padding-top:30px;">
                    <p style="margin-bottom:30px;">上映时间：{{ introduce.timewatch }}</p>
                    <p>其他推荐：</p>
                    <a class="another" href="">查看热播电影</a>
                    <a class="another" href="">查看高分电影榜</a>
                    <a class="another" href="">查看最新电影</a>
                    <a class="another" href="">查看即将上线电影</a>
                </div>
            </div>
        </div>
        <div style="width:1100px;min-height:400px;margin-bottom:50px;position:relative;left:50%;margin-left:-550px;">
            <ul style="overflow:hidden;">
                <li @click="changetop(index)" :class = "num == index ? 'istime' : 'checktime' " v-for="(session,index) in introduce.sessions.slice(0,5)" :key="session.time" >
                    {{ session.time }}
                </li>
            </ul>
            <ul style="margin-top:20px;">
                <li class="timgLine" v-for="(everyshow,index) in introduce.show" :key="index">
                    <div style="height:100%;width:15%;float:left;">
                        <p style="font-size:1.7em;margin-top:5px;">{{ everyshow.startTime }}</p>
                        <p style="font-size:0.8em;">{{ everyshow.overTime }} 散场</p>
                    </div>
                    <div style="height:100%;width:15%;float:left;margin-left:20px;">
                        <p style="margin-top:13px;">{{ everyshow.tingtype }}</p>
                        <p style="font-size:0.6em;">{{ everyshow.whereting }}</p>
                    </div>
                    <div style="height:100%;width:15%;float:right;">
                        <Button type="warning" style="padding:3px 13px;margin-top:14px;">购票</Button>
                    </div>
                    <div style="height:100%;width:15%;float:right;margin-right:20px;">
                        <p style="font-size:1.5em;color:rgb(6,193,174);margin-top:15px;">{{ everyshow.money }}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return{
            name:'',
            introduce:{
                sessions:[
                    {time:'2019-05-20'},
                    {time:'2019-05-21'},
                    {time:'2019-05-22'},
                ],
                show:[
                    {
                        startTime:'17:45',
                        overTime:'19:53',
                        tingtype:'英语3D',
                        whereting:'7号厅',
                        money:'￥36'
                    },
                    {
                        startTime:'20:10',
                        overTime:'22:18',
                        tingtype:'英语3D',
                        whereting:'7号厅',
                        money:'￥39'
                    }
                ],
                grade:`8.9`,
                timewatch:'2019-05-20',
                director:'安东尼·罗素、乔·罗素',
                act:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                type:'动作、科幻',
                timelong:'181分钟',
                url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
            },
            num:0
        }
    },
    mounted:function (){
        this.findIfo()
        this.$router.afterEach((to, from, next) => {
            window.scrollTo(0, 0)
        })
    },
    methods:{
        findIfo(){ //从localstorage中获取电影的name名称
            let name = localStorage.getItem('name');
            this.name = name
        },
        changetop(index){
            this.num = index
            let arr1 = [
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'英语3D',
                    whereting:'7号厅',
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'英语3D',
                    whereting:'7号厅',
                    money:'￥39'
                }
            ]
            let arr2 = [
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                }
            ]
            let arr3 = [
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                },
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                },
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    money:'￥39'
                }
            ]
            if(index == 0)
                this.introduce.show = arr1
            else if(index == 1)
                this.introduce.show = arr2
            else   this.introduce.show = arr3
            console.log(this.introduce.show)
        }
    }
}
</script>
<style lang="">
.movieIfo{
    margin-bottom:10px;
}
.another{
    text-decoration: none;
    color:rgb(255,190,20);
    display: block;
    margin-top:15px;
}
.checktime{
    height:40px;
    width:100px;
    list-style: none;
    float:left;
    padding:10px;
    font-size:1.2em;
    color:rgb(6,193,174);
}
.checktime:hover{
    cursor:pointer;
}
.istime{
    height:40px;
    width:100px;
    list-style: none;
    float:left;
    padding:10px;
    font-size:1.2em;
    color:rgb(6,193,174);
    border-top:2px solid rgb(6,193,174);
}
.timgLine{
    height:60px;
    width:50%;
    list-style: none;
    border-top:1px solid rgb(216,216,216); 
    border-bottom:1px solid rgb(216,216,216); 
}
</style>
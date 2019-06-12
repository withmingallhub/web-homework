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
        <div style="width:1100px;min-height:100px;margin-bottom:50px;position:relative;left:50%;margin-left:-550px;">
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
                        <Button type="warning" style="padding:3px 13px;margin-top:14px;" @click="choisetheChar(everyshow)">购票</Button>
                    </div>
                    <div style="height:100%;width:15%;float:right;margin-right:20px;">
                        <p style="font-size:1.5em;color:rgb(6,193,174);margin-top:15px;">{{ everyshow.money }}</p>
                    </div>
                </li>
            </ul>
            <div class="choiseChar" v-if="bytickets">
                <div style="border-bottom:1px solid rgb(200,200,200);overflow:hidden;margin-bottom:20px;">
                    <h2>{{ name }}</h2>
                    <div style="height:60px;width:15%;float:left;">
                        <p style="font-size:1.7em;margin-top:5px;">{{ choiseChar.startTime }}</p>
                        <p style="font-size:0.8em;">{{ choiseChar.overTime }} 散场</p>
                    </div>
                    <div style="height:60px;width:15%;float:left;margin-left:20px;">
                        <p style="margin-top:13px;">{{ choiseChar.tingtype }}</p>
                        <p style="font-size:0.6em;">{{ choiseChar.whereting }}</p>
                    </div>
                    <div style="height:60px;width:15%;float:left;margin-right:20px;">
                        <p style="line-height:60px;font-size:1.2em;color:rgb(6,193,174);">{{ choiseChar.money }}</p>
                    </div>
                    <div style="height:60px;float:left;margin-right:20px;">
                        <span style="line-height:60px;font-size:1.2em;color:rgb(6,193,174);margin-top:15px;">演出日期：{{ introduce.sessions[num].time }}</span>
                    </div>
                </div>
                <div style="width:100%;margin-top:50px;">
                    <!-- 使用二重循环二维数组，渲染座位信息 -->
                    <ul v-for="(row,index1) in char" :key="index1" style="overflow:hidden;width:80%;margin-top:20px;text-align:center;">
                        <li v-for="(col,index2) in row" :key="index2" style="height:40px;width:40px;float:left;margin-right:20px;list-style:none;">
                            <Icon type="md-bulb" style="height:40px;width:40px;color:red;float:left;font-size:3em;" v-if="col == 1" @click="$Message.error('这个座位被别人选了哦！')"/>
                            <Icon class="canChoise" type="ios-bulb-outline" style="height:40px;width:40px;float:left;font-size:3em;" v-if="col == 0" @click="clickChar(index1,index2,col)"/>
                            <Icon class="canChoise" type="ios-bulb" style="height:40px;width:40px;float:left;font-size:3em;color:green;" v-if="col == 2" @click="clickChar(index1,index2,col)"/>
                        </li>
                    </ul>
                </div>
                <div style="height:50px;margin-top:50px;text-align:left;">
                    <Button type="info" @click="shopping">提交订单</Button>
                    <span style="float:right;line-height:40px;margin-right:20px;">不可选的座位</span>
                    <Icon type="md-bulb" style="height:40px;width:40px;color:red;float:right;font-size:3em;"/>
                    <span style="float:right;line-height:40px;margin-right:20px;">可选择的座位</span>
                    <Icon class="canChoise" type="ios-bulb-outline" style="height:40px;width:40px;float:right;font-size:3em;"/>
                    <span style="float:right;line-height:40px;margin-right:20px;">您选中的座位</span>
                    <Icon class="canChoise" type="ios-bulb" style="height:40px;width:40px;float:right;font-size:3em;color:green;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return{
            // localstorage中电影的名称
            name:'',
            introduce:{
                // 电影演出计划的日期
                sessions:[
                    {time:'2019-05-20'},
                    {time:'2019-05-21'},
                    {time:'2019-05-22'},
                ],
                // 当天的具体演出计划
                show:[
                    {
                        startTime:'17:45',
                        overTime:'19:53',
                        tingtype:'英语3D',
                        whereting:'7号厅',
                        tingId:7,
                        money:'￥36'
                    },
                    {
                        startTime:'20:10',
                        overTime:'22:18',
                        tingtype:'英语3D',
                        whereting:'7号厅',
                        tingId:7,
                        money:'￥39'
                    }
                ],
                // 在localstorage中的电影的详细信息
                grade:`8.9`,
                timewatch:'2019-05-20',
                director:'安东尼·罗素、乔·罗素',
                act:'小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
                type:'动作、科幻',
                timelong:'181分钟',
                url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                introduct:'《复仇者联盟4：终局之战》（Avengers: Endgame）是安东尼·罗素和乔·罗素执导的美国科幻电影，改编自美国漫威漫画，漫威电影宇宙（Marvel Cinematic Universe，缩写为MCU）第22部影片，由小罗伯特·唐尼、克里斯·埃文斯、克里斯·海姆斯沃斯、马克·鲁法洛、斯嘉丽·约翰逊、杰瑞米·雷纳、保罗·路德、布丽·拉尔森、唐·钱德尔、凯伦·吉兰、乔什·布洛林等主演。',
            },
            num:0,
            // 购票组件是否显示
            bytickets:false,
            // 购票的演出计划信息
            choiseChar:{
                
            },
            // 渲染座位页面
            char:[
                ['1','1','0','0','0','0','0','0'],
                ['0','0','0','0','0','1','1','0'],
                ['0','0','0','0','1','0','0','0']
            ],
            // 选座的数量
            sum:0,
            // 向后端发送的选座信息
            sendChar:[

            ],
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
            this.bytickets = false
            this.num = index
            let arr1 = [
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'英语3D',
                    whereting:'7号厅',
                    tingId:7,
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'英语3D',
                    whereting:'7号厅',
                    tingId:7,
                    money:'￥39'
                }
            ]
            let arr2 = [
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                }
            ]
            let arr3 = [
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                },
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                },
                {
                    startTime:'17:45',
                    overTime:'19:53',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥36'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                },
                {
                    startTime:'20:10',
                    overTime:'22:18',
                    tingtype:'中文3D',
                    whereting:'8号厅',
                    tingId:8,
                    money:'￥39'
                }
            ]
            if(index == 0)
                this.introduce.show = arr1
            else if(index == 1)
                this.introduce.show = arr2
            else   this.introduce.show = arr3
            console.log(this.introduce.show)
        },
        choisetheChar(show){
            let username = localStorage.getItem('username')
            if(!username) this.$router.push({path:'/login'})
            this.choiseChar = show
            this.choiseChar.moviename = this.name
            this.choiseChar.time = this.introduce.sessions[this.num].time
            this.bytickets = true
        },
        clickChar(index1,index2,col){
            if(col == 0){
                if(this.sum > 2){
                    this.$Message.error('不要太贪心，单个用户最多选三个座位呦！')
                }
                else{
                    this.char[index1].splice(index2,1,'2')
                    this.sum ++
                    this.sendChar.push({
                        row:index1,
                        col:index2
                    })
                }
            }
            if(col == 2){
                this.char[index1].splice(index2,1,'0')
                this.sum --
                for(let i = 0;i < this.sendChar.length;i ++){
                    if(this.sendChar[i].row == index1 && this.sendChar[i].col == index2){
                        this.sendChar.splice(i,1)
                    }
                }
            }
        },
        shopping(){
            for(let i = 0;i < this.sendChar.length;i ++){
                this.sendChar[i].time = this.introduce.sessions[this.num].time + ' ' + this.choiseChar.startTime + ':00'
                this.sendChar[i].tingId = this.choiseChar.tingId
                this.sendChar[i].username = localStorage.getItem('username')
            }

            console.log(this.sendChar)
            // axios.post('',this.sendChar).then((res)=>{
                // if(res.status == 200){
                    // this.$router.push({path:'/shopcar'})
                // }
            // })
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
.choiseChar{
    min-height:200px;
    width:1100px;
    margin: 50px 0px;
    border-top: 1px solid rgb(200,200,200);
    padding-top:10px;
}
.canChoise:hover{
    cursor: pointer;
}
</style>
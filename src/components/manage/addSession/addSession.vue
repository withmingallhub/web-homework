<template>
    <div>
        <h2>添加/删除演出计划</h2>
        <div style="text-align:left;">
            <div style="margin-left:50px;">
                <Select v-model="addPlanInfo.addPlan" style="width:200px" class="selectMovie">
                    <Option v-for="movie in movies" :value="movie" :key="movie">{{ movie }}</Option>
                </Select>
            </div>
            <Button type="info" style="margin:20px 50px;" @click="getInfo">添加/删除该电影演出计划</Button>
            <div v-if="introduce.sessions" style="width:1100px;min-height:400px;margin:0px 0px 50px 50px;">
                <ul style="overflow:hidden;">
                    <li @click="changetop(index)" :class = "num == index ? 'istime' : 'checktime' " v-for="(session,index) in introduce.sessions.slice(0,5)" :key="session.time" >
                        {{ session.time }}
                    </li>
                </ul>
                <ul style="margin-top:20px;">
                    <li class="timgLine" v-for="(everyshow,index) in introduce.show" :key="index">
                        <div style="height:100%;width:15%;float:left;">
                            <p style="font-size:1.7em;margin-top:5px;">{{ everyshow.playDate }}</p>
                            <p style="font-size:0.8em;">{{ everyshow.endDate }} 散场</p>
                        </div>
                        <div style="height:100%;width:15%;float:left;margin-left:20px;">
                            <p style="margin-top:13px;">{{ everyshow.hallID }}</p>
                            <p style="font-size:0.6em;">{{ everyshow.hallID }}</p>
                        </div>
                        <div style="height:100%;width:15%;float:right;">
                            <Button type="warning" style="padding:3px 13px;margin-top:14px;">删除</Button>
                        </div>
                        <div style="height:100%;width:15%;float:right;margin-right:20px;">
                            <p style="font-size:1.5em;color:rgb(6,193,174);margin-top:15px;">￥{{ everyshow.ticketPrice }}</p>
                        </div>
                    </li>
                </ul>
                <div style="margin-top:20px;">
                    <h3>添加演出计划信息</h3>
                    <div>
                        <Select v-model="addPlanInfo.yanting" style="width:200px" class="selectMovie">
                            <Option v-for="(ting,index) in yanchuting" :value="ting.hallID" :key="index">{{ ting.hallname }}</Option>
                        </Select>
                    </div>
                    <div style="margin-top:20px;">
                        <Input style="width:200px;" placeholder="开始时间" v-model="addPlanInfo.startTime"></Input>
                    </div>
                    <div style="margin-top:20px;">
                        <Input style="width:200px;" placeholder="票价" v-model="addPlanInfo.money"></Input><span style="line-height:20px;font-size:1.2em;">(单位:元)</span>
                    </div>
                    <div style="margin-top:20px;">
                        <Row>
                            <Col span="12">
                                <DatePicker class="movieInfo" placement='bottom' type="date" placeholder="选择日期：" style="width: 200px" v-model="addPlanInfo.day"  format="yyyy-MM-dd" @on-change='addPlanInfo.day=$event' :options="options3"></DatePicker>
                            </Col>
                        </Row>
                    </div>
                    <Button type="info" style="margin-top:20px;" @click="submit">提交</Button>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import axios from 'axios'

export default {
    data(){
        return{
            addPlanInfo:{
                addPlan:'',
                startTime:'',
                money:'',
                day:'',
                yanting:0
            },
            yanchuting:[
                {
                    hallname:'',
                    hallID:''
                }
            ],
            options3:{
                disabledDate (date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            },
            movies:[
            ],
            introduce:{
                sessions:[

                ],
                show:[
                    
                ],
            },
            num:0
        }
    },
    methods:{
        getmovie(){
            axios.get('http://192.168.43.133:8080/TTMS/getMovieNameListHadShow').then((res)=>{
                for(let i = 0;i < res.data.length;i ++){
                    this.movies.push(res.data[i])
                }
            })
        },
        getting(){
            axios.get('http://192.168.43.133:8080/TTMS/getHallList').then((res)=>{
                this.yanchuting = res.data
            })
        },
        changetop(index){
            this.num = index
            // let arr1 = [
            //     {
            //         startTime:'17:45',
            //         overTime:'19:53',
            //         tingtype:'英语3D',
            //         whereting:'7号厅',
            //         money:'￥36'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'英语3D',
            //         whereting:'7号厅',
            //         money:'￥39'
            //     }
            // ]
            // let arr2 = [
            //     {
            //         startTime:'17:45',
            //         overTime:'19:53',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥36'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     }
            // ]
            // let arr3 = [
            //     {
            //         startTime:'17:45',
            //         overTime:'19:53',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥36'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     },
            //     {
            //         startTime:'17:45',
            //         overTime:'19:53',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥36'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     },
            //     {
            //         startTime:'17:45',
            //         overTime:'19:53',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥36'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'中文3D',
            //         whereting:'8号厅',
            //         money:'￥39'
            //     }
            // ]
            // if(index == 0)
            //     this.introduce.show = arr1
            // else if(index == 1)
            //     this.introduce.show = arr2
            // else   this.introduce.show = arr3
            // console.log(this.introduce.show)
            axios.post('http://192.168.43.133:8080/TTMS/getMoviePlanByDate',{
                    name:this.addPlanInfo.addPlan,
                    showDate:arry[this.index].time
                }).then((res1)=>{
                    this.introduce.show = res1.data
                    for(let i = 0;i < res1.data.length;i ++){
                        let date1 = new Date(res1.data[i].endDate);
                        let hour = date1.getHours();
                        hour = hour < 10 ? ('0' + hour) : hour
                        let minute = date1.getMinutes();
                        minute = minute < 10 ? ('0' +minute) : minute
                        this.introduce.show[i].endDate = hour + ':' + minute
                        this.introduce.show[i].playDate = this.introduce.show[i].playDate.slice(11,16)
                    }
                    console.log(this.introduce.show)
                })
        },
        getInfo(){
            // this.introduce.sessions = [
            //     {time:'2019-05-20'},
            //     {time:'2019-05-21'},
            //     {time:'2019-05-22'},
            // ],
            axios.post('http://192.168.43.133:8080/TTMS/getDateByName',{
                moviename:this.addPlanInfo.addPlan
            }).then((res)=>{
                console.log(res)
                for(let i = 0;i < res.data.length;i ++){ 
                    let date = new Date(res.data[i]);
                    let y = date.getFullYear();
                    let m = date.getMonth() + 1;
                    m = m < 10 ? ('0' + m) : m;
                    let d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    res.data[i] = y + '-' + m + '-' + d
                }
                let arry = []
                for(let i = 0;i < res.data.length;i ++){
                    arry.push({
                        time:res.data[i]
                    })
                }   
                this.introduce.sessions = arry
                axios.post('http://192.168.43.133:8080/TTMS/getMoviePlanByDate',{
                    name:this.addPlanInfo.addPlan,
                    showDate:arry[0].time
                }).then((res1)=>{
                    this.introduce.show = res1.data
                    for(let i = 0;i < res1.data.length;i ++){
                        let date1 = new Date(res1.data[i].endDate);
                        let hour = date1.getHours();
                        hour = hour < 10 ? ('0' + hour) : hour
                        let minute = date1.getMinutes();
                        minute = minute < 10 ? ('0' +minute) : minute
                        this.introduce.show[i].endDate = hour + ':' + minute
                        this.introduce.show[i].playDate = this.introduce.show[i].playDate.slice(11,16)
                    }
                    console.log(this.introduce.show)
                })
            })
            // this.introduce.show = [
            //     {
            //         startTime:'17:45',
            //         overTime:'19:53',
            //         tingtype:'英语3D',
            //         whereting:'7号厅',
            //         money:'￥36'
            //     },
            //     {
            //         startTime:'20:10',
            //         overTime:'22:18',
            //         tingtype:'英语3D',
            //         whereting:'7号厅',
            //         money:'￥39'
            //     }
            // ]
        },
        submit(){
            let data = {
                moviename:this.addPlanInfo.addPlan,
                hallID:this.addPlanInfo.yanting,
                playDate:this.addPlanInfo.day + ' ' + this.addPlanInfo.startTime + ':00',
                ticketPrice:this.addPlanInfo.money
            }
            axios.post('http://192.168.43.133:8080/TTMS/addPlan',data).then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
        this.getmovie()
        this.getting()
    }
}
</script>

<style lang="">
.selectMovie{
    margin-top: 50px;
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
.checktime{
    height:40px;
    width:100px;
    list-style: none;
    float:left;
    padding:10px;
    font-size:1.2em;
    color:rgb(6,193,174);
}
.timgLine{
    height:60px;
    width:50%;
    list-style: none;
    border-top:1px solid rgb(216,216,216); 
    border-bottom:1px solid rgb(216,216,216); 
}
.selectMovie{
    margin-top:20px;
}
.movieInfo{
    margin:0px;
}
</style>
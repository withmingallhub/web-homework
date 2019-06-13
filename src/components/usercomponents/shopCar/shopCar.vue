<template>
    <div>
        <div style="width:80%;position:relative;left:10%;padding:50px 0px;">
            <ul style="overflow:hidden;width:100%;">
                <h2>已提交订单(已付款)</h2>
                <li style="width:100%;height:200px;border-top:1px solid rgb(200,200,200);overflow:hidden;list-style:none;" v-for="(boughtmovie,index) in bymovie" :key="index">
                    <div style="height:80%;width:120px;margin-left:20px;position:relative;top:10%;float:left;">
                        <img :src="boughtmovie.movieurl" alt="" width="100%" height="100%">
                    </div>
                    <div style="height:80%;width:500px;border-top:1px solid rgb(200,200,200);float:left;position:relative;top:10%;margin-left:20px;">
                        <div class="themoviename">
                            <h3>{{ boughtmovie.moviename }}</h3>
                            <p>{{ boughtmovie.movietime }}</p>
                            <p>演出厅:{{ boughtmovie.tingname }}</p>
                            <p>演出厅类型:{{ boughtmovie.tingtype }}</p>
                            <p>第{{ boughtmovie.tingrow }}排,第{{ boughtmovie.tingcol }}列</p>
                            <p>会员名:{{ boughtmovie.username }}</p>
                            <h4>豪豪影院期待您的到来</h4>

                        </div>
                        <div class="themoviebutton">
                            <Button type="error" @click="nothisticket(boughtmovie)">退票</Button>
                            <h4 style="margin-top:40px;">{{ boughtmovie.movietime }}不见不散</h4>
                        </div>
                    </div>
                </li>
            </ul>

            <ul style="width:100%;">
                <h2>历史订单</h2>
                <li style="width:100%;height:200px;border-top:1px solid rgb(200,200,200);list-style:none;" v-for="(boughtmovie,index) in premovie" :key="index">
                    <div style="height:80%;width:120px;margin-left:20px;position:relative;top:10%;float:left;">
                        <img :src="boughtmovie.movieurl" alt="" width="100%" height="100%">
                    </div>
                    <div style="height:80%;width:500px;border-top:1px solid rgb(200,200,200);float:left;position:relative;top:10%;margin-left:20px;">
                        <div class="themoviename">
                            <h3>{{ boughtmovie.moviename }}</h3>
                            <p>{{ boughtmovie.movietime }}</p>
                            <p>演出厅:{{ boughtmovie.tingname }}</p>
                            <p>演出厅类型:{{ boughtmovie.tingtype }}</p>
                            <p>第{{ boughtmovie.tingrow }}排,第{{ boughtmovie.tingcol }}列</p>
                            <p>会员名:{{ boughtmovie.username }}</p>
                            <h4>豪豪影院期待您的到来</h4>
                        </div>
                        <div class="themoviebutton" v-if="!boughtmovie.grade">
                            <Select  v-model="grade" style="width:100px" class="selectMovie">
                                <Option style="position:relative;z-index:10;" v-for="movie in choiseGrade" :value="movie" :key="movie">{{ movie }}</Option>
                            </Select>
                            <Button type="info" @click="sendgrade(boughtmovie)">打分</Button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    data(){
        return{
            bymovie:[],
            premovie:[],
            grade:'',
            choiseGrade:['1','2','3','4','5']
        }
    },
    methods:{
        shopCar(){
            let username = localStorage.getItem('username')
            if(!username) this.$router.push({path:'/login'})
            axios.post('http://192.168.43.133:8080/TTMS/getTicketList',{
                username:username 
            }).then((res)=>{
                console.log(res)
                for(let i = 0;i <res.data.length;i ++){
                    let date = new Date(res.data[i].playDate);
                    let y = date.getFullYear();
                    let m = date.getMonth() + 1;
                    m = m < 10 ? ('0' + m) : m;
                    let d = date.getDate();
                    d = d < 10 ? ('0' + d) : d;
                    let hour = date.getHours();
                    hour = hour < 10 ? ('0' + hour) : hour;
                    let minute = date.getMinutes();
                    minute = minute < 10 ? ('0' + minute) : minute;
                    let timewatch = y + '-' + m + '-' + d + ' ' + hour +　':'　+　minute　+　':00'　
                    if(res.data[i].isTake == 0)
                    this.bymovie.push({
                        moviename:res.data[i].moviename,
                        movietime:timewatch,
                        tingname:res.data[i].hallname,
                        tingtype:res.data[i].hallType,
                        tingrow:res.data[i].seatRow,
                        tingcol:res.data[i].seatColumn,
                        username:res.data[i].username,
                        grade:res.data[i].isMark,
                        movieurl:res.data[i].photo,
                        ticketPrice:res.data[i].ticketPrice
                    })
                    else if(res.data[i].isTake == 1)
                    this.premovie.push({
                        moviename:res.data[i].moviename,
                        movietime:timewatch,
                        tingname:res.data[i].hallname,
                        tingtype:res.data[i].hallType,
                        tingrow:res.data[i].seatRow,
                        tingcol:res.data[i].seatColumn,
                        username:res.data[i].username,
                        grade:res.data[i].isMark,
                        movieurl:res.data[i].photo
                    })
                }
            })
        },
        sendgrade(movie){
            axios.post('http://192.168.43.133:8080/TTMS/markTicket',{
                username:movie.username,
                hallname:movie.tingname,
                playDate:movie.movietime,
                seatRow:movie.tingrow,
                seatColumn:movie.tingcol,
                moviename:movie.moviename,
            }).then((res)=>{
                console.log(res)
                if(res.data.status == 200){
                    this.$Message.success('评分成功！')
                    location.reload()
                }
            })
        },
        nothisticket(movie){
            axios.post('http://192.168.43.133:8080/TTMS/reTicket',{
                isMark:this.grade,
                username:movie.username,
                hallname:movie.tingname,
                playDate:movie.movietime,
                seatRow:movie.tingrow,
                seatColumn:movie.tingcol,
                moviename:movie.moviename,
                ticketPrice:movie.ticketPrice
            }).then((res)=>{
                console.log(res)
            })
        }
    },
    mounted(){
        this.shopCar()
    }
}
</script>

<style lang="">
.themoviename{
    height:100%;
    width:50%;
    float:left;
    text-align: left;
    overflow:hidden;
    white-space: nowrap;
}
.themoviename h3{
    color: red;
    font-size: 1.5em;
}
.themoviename p{
    font-size: 1.2em;
}
.themoviebutton{
    height:100%;
    width:50%;
    margin-top:60px;
    float:right;
}
</style>

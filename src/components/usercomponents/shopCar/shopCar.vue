<template>
    <div>
        <div style="width:80%;position:relative;left:10%;padding:50px 0px;">
            <ul style="overflow:hidden;width:100%;">
                <h2>已提交订单(未付款)</h2>
                <li style="width:100%;height:200px;border-top:1px solid rgb(200,200,200);overflow:hidden;list-style:none;" v-for="(boughtmovie,index) in nobymovie" :key="index">
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
                            <Button type="error">退票</Button>
                            <Button type="info">付款</Button>
                            <h4 style="margin-top:40px;">{{ boughtmovie.movietime }}不见不散</h4>
                        </div>
                    </div>
                </li>
            </ul>

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
                            <Button type="error">退票</Button>
                            <Button type="info">付款</Button>
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
                            <Button type="info">打分</Button>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            nobymovie:[],
            bymovie:[],
            premovie:[],
            grade:'',
            choiseGrade:['1','2','3','4','5']
        }
    },
    methods:{
        shopCar(){
            this.nobymovie = [
                {
                    // 电影名称
                    moviename:'英雄联盟',
                    // 电影url
                    movieurl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    // 电影时间
                    movietime:'2019-06-15 18:00',
                    // 电影厅名字
                    tingname:'一号厅',
                    // 电影厅类型
                    tingtype:'中文3D',
                    // 行数
                    tingrow:'6',
                    // 列数
                    tingcol:'10',
                    // 用户名
                    username:'ghhh',
                    // 是否打过分？
                    grade:false
                },
                {
                    // 电影名称
                    moviename:'英雄联盟',
                    // 电影url
                    movieurl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    // 电影时间
                    movietime:'2019-06-15 18:00',
                    // 电影厅名字
                    tingname:'一号厅',
                    // 电影厅类型
                    tingtype:'中文3D',
                    // 行数
                    tingrow:'6',
                    // 列数
                    tingcol:'10',
                    // 用户名
                    username:'ghhh',
                    // 是否打过分？
                    grade:false
                },
            ]
            this.bymovie = [
                {
                    // 电影名称
                    moviename:'英雄联盟',
                    // 电影url
                    movieurl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    // 电影时间
                    movietime:'2019-06-15 18:00',
                    // 电影厅名字
                    tingname:'一号厅',
                    // 电影厅类型
                    tingtype:'中文3D',
                    // 行数
                    tingrow:'6',
                    // 列数
                    tingcol:'10',
                    // 用户名
                    username:'ghhh',
                    // 是否打过分？
                    grade:false
                },
                {
                    // 电影名称
                    moviename:'英雄联盟',
                    // 电影url
                    movieurl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    // 电影时间
                    movietime:'2019-06-15 18:00',
                    // 电影厅名字
                    tingname:'一号厅',
                    // 电影厅类型
                    tingtype:'中文3D',
                    // 行数
                    tingrow:'6',
                    // 列数
                    tingcol:'10',
                    // 用户名
                    username:'ghhh',
                    // 是否打过分？
                    grade:false
                },
            ]
            this.premovie = [
                {
                    // 电影名称
                    moviename:'英雄联盟',
                    // 电影url
                    movieurl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    // 电影时间
                    movietime:'2019-06-15 18:00',
                    // 电影厅名字
                    tingname:'一号厅',
                    // 电影厅类型
                    tingtype:'中文3D',
                    // 行数
                    tingrow:'6',
                    // 列数
                    tingcol:'10',
                    // 用户名
                    username:'ghhh',
                    // 是否打过分？
                    grade:false
                },
                {
                    // 电影名称
                    moviename:'英雄联盟',
                    // 电影url
                    movieurl:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    // 电影时间
                    movietime:'2019-06-15 18:00',
                    // 电影厅名字
                    tingname:'一号厅',
                    // 电影厅类型
                    tingtype:'中文3D',
                    // 行数
                    tingrow:'6',
                    // 列数
                    tingcol:'10',
                    // 用户名
                    username:'ghhh',
                    // 是否打过分？
                    grade:true
                },
            ]
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

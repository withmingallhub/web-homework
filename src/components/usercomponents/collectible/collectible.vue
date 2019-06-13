<template>
    <div style="width:80%;position:relative;left:10%;">
        <ul style="width:100%;">
            <h2>我的收藏</h2>
            <li style="width:100%;height:200px;border-top:1px solid rgb(200,200,200);list-style:none;" v-for="(boughtmovie,index) in collect" :key="index">
                <div style="height:80%;width:120px;margin-left:20px;position:relative;top:10%;float:left;">
                    <img :src="boughtmovie.url" alt="" width="100%" height="100%">
                </div>
                <div style="height:80%;width:500px;border-top:1px solid rgb(200,200,200);float:left;position:relative;top:10%;margin-left:20px;">
                    <div class="themoviename">
                        <h2 style="color:red;">{{ boughtmovie.grade }}</h2>
                        <h3>{{ boughtmovie.moviename }}</h3>
                        <p>{{ boughtmovie.timewatch }}</p>
                        <p>电影类型:{{ boughtmovie.type }}</p>
                        <p>电影时长:{{ boughtmovie.timelong }}</p>
                        <p>电影导演{{ boughtmovie.director }}</p>
                        <h4>豪豪影院期待您的到来</h4>

                    </div>
                    <div class="themoviebutton">
                        <Button type="error">删除</Button>
                        <Button type="info">详情</Button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            collect:[
                {
                    moviename:'复仇者联盟4',
                    grade:`8.9`,
                    timewatch:'2019-05-20',
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    type:'动作、科幻',
                    timelong:'181分钟',
                    director:'安东尼·罗素、乔·罗素',
                },
                {
                    moviename:'复仇者联盟4',
                    grade:`8.9`,
                    timewatch:'2019-05-20',
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    type:'动作、科幻',
                    timelong:'181分钟',
                    director:'安东尼·罗素、乔·罗素',
                },
                {
                    moviename:'复仇者联盟4',
                    grade:`8.9`,
                    timewatch:'2019-05-20',
                    url:'https://ss0.baidu.com/6ONWsjip0QIZ8tyhnq/it/u=3527165871,1016449403&fm=58&s=787B20C402B38BC456651C8D0300E088',
                    type:'动作、科幻',
                    timelong:'181分钟',
                    director:'安东尼·罗素、乔·罗素',
                }
            ]
        }
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
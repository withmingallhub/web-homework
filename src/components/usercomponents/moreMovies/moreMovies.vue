<template>
    <div style="margin-bottom:20px;">
        <div class="top">
            <h1>{{ moreMoviesName }}</h1>
        </div>
        <div class="MhotPreMain">
                <div class="MeveryHotPre" v-for="(movie,index) in moreMovies" :key="index">
                    <img class="MmovieClickImg" @click="getMovieDetail(movie.name)" :src="movie.url" alt="" height="220px" width="160px">
                    <p class="MmovieClickName" @click="getMovieDetail(movie.name)">{{ movie.name }}</p>
                </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            moreMovies:Array,
            moreMoviesName:String,
        }
    },
    mounted:function() { 
        this.getItems()
    },
    methods:{
        getItems(){
            this.moreMovies = JSON.parse(localStorage.getItem('moreMovies'));
            this.moreMoviesName = localStorage.getItem('moreMoviesName')
        },
        getMovieDetail(name) {
            localStorage.setItem('name',name)
            this.$router.push({
                path: '/buytickets',
            })
        },
    }
}
</script>

<style lang="">
.top{
    height:50px;
    width: 100%;
}
.MhotPreMain{
    overflow: hidden;
    width:100%;
}
.MeveryHotPre{
    height: 290px;
    width:200px;
    float: left;
}
.MmovieClickName{
    font-size:1.2em;
    margin-top:7px;
    padding-bottom: 10px;
    border-bottom:1px solid rgb(200,200,200);
}
.MmovieClickName:hover{
    cursor: pointer;
    color: orange;
}
.MmovieClickImg:hover{
    cursor: pointer;
}
</style>
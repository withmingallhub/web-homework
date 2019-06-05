<template>
    <div style="margin-bottom:20px;">
        <div class="top">
            <h1>{{ moreMoviesName }}</h1>
        </div>
        <div class="MhotPreMain">
                <div class="MeveryHotPre" v-for="(movie,index) in moreMovies" :key="index">
                    <img class="MmovieClickImg" @click="getMovieDetail(movie.name)" :src="movie.url" alt="" height="80%" width="80%">
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
            console.log(this.moreMovies)
            console.log(this.moreMoviesName)
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
    border: 1px solid black;
}
.MhotPreMain{
    overflow: hidden;
    width:100%;
    border: 1px solid black;
}
.MeveryHotPre{
    height: 50%;
    width:200px;
    float: left;
}
.MmovieClickName{
    font-size:1.2em;
    margin-top:10px;
}
.MmovieClickName:hover{
    cursor: pointer;
    color: orange;
}
.MmovieClickImg:hover{
    cursor: pointer;
}
</style>
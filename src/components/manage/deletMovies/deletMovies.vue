<template>
    <div>
        <div>
            <h3>删除电影</h3>
        </div>
        <div style="margin-top:30px;">
            <h4>删除未上线电影</h4>
            <div v-if="noneMovie" class="none">
                <Select v-model="deletnone" style="width:200px" class="selectMovie">
                    <Option v-for="movie in noneMovie" :value="movie" :key="movie.moivename">{{ movie.moviename }}</Option>
                </Select>
                <br>
                <Button type="info" style="margin-top:10px;">删除</Button>
            </div>
            <h4>删除已上线电影</h4>
            <div v-if="onlineMovie">
                <Select v-model="deletonline" style="width:200px" class="selectMovie">
                    <Option v-for="movie in onlineMovie" :value="movie" :key="movie.moviename">{{ movie.moviename }}</Option>
                </Select>
                <br>
                <Button type="info" style="margin-top:10px;">删除</Button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            deletnone:'',
            noneMovie:[

            ],
            deletonline:'',
            onlineMovie:[

            ],
        }
    },
    methods:{
        getmovies(){
            this.noneMovie = [
                {
                    moviename:'严欣豪'
                },{
                    moviename:'田成浩'
                },{
                    moviename:'王皓'
                }
            ]
            this.onlineMovie = [
                {
                    moviename:'张衍航'
                },{
                    moviename:'罗茗奕'
                }
            ]
        }
    },
    mounted(){
        this.getmovies()
    }
}
</script>

<style lang="">
.none{
    margin-bottom: 20px;
}
</style>
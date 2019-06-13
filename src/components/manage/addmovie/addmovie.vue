<template>
    <div>
        <h3>添加新电影</h3>
        <div style="margin-left:100px;padding:20px 10px;overflow:hidden;">
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影名称" v-model="movieInfo.movieName"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影类型" v-model="movieInfo.movieType"></Input>
            </div>
            <Row style="margin-top:20px;">
                <Col span="12">
                    <DatePicker class="movieInfo" placement='bottom' type="date" placeholder="选择电影上映时间" style="width: 200px" v-model="movieInfo.onlineTime"  format="yyyy-MM-dd" @on-change='movieInfo.onlineTime=$event' :options="options3"></DatePicker>
                </Col>
            </Row>
            <div style="clear:both;margin-top:20px;overflow:hidden;width:70%;">
                <Input type="text" class="movieInfo" placeholder="填写电影时长" v-model="movieInfo.movieLong"></Input><span style="float:left;line-height:30px;font-size:1.2em;margin-left:10px;">(单位:分钟)</span>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影导演" v-model="movieInfo.movieDirector"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <p style="text-align:left;margin-left:10px;margin-bottom:6px;">输入电影的主演：</p>
                <Input type="textarea" style="width:70%;float:left;margin-left:10px;" placeholder="主演" :autosize="{maxRows: 5,minRows: 5}" v-model="movieInfo.movieProtag"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <p style="text-align:left;margin-left:10px;margin-bottom:6px;">输入电影简介：</p>
                <Input type="textarea" style="width:70%;float:left;margin-left:10px;" placeholder="电影简介" :autosize="{maxRows: 7,minRows: 7}" v-model="movieInfo.introduct"></Input>
            </div>
            <Button class="create" type="info" @click="createMovie">创建电影</Button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            file:'',
            movieUrl:'',
            movieInfo:{
                movieName:'',
                movieType:'',
                onlineTime:'',
                movieLong:'',
                movieDirector:'',
                movieProtag:'',
                introduct:''
            },
            options3:{
                disabledDate (date) {
                    return date && date.valueOf() < Date.now() - 86400000;
                }
            }
        }
    },
    methods:{
        createMovie(){
            let data = {
                moviename:this.movieInfo.movieName,
                type:this.movieInfo.movieType,
                duration:this.movieInfo.movieLong,
                introduction:this.movieInfo.introduct,
                releaseDate:this.movieInfo.onlineTime,
                author:this.movieInfo.movieDirector,
                production:this.movieInfo.movieProtag
            }
            axios.post('http://192.168.43.133:8080/TTMS/addMovieExceptPhoto',data).then((res)=>{
                if(res.data.status == 200){
                    this.$Message.success('添加成功')
                    location.reload()
                }
            })
        }

    }
}
</script>
<style lang="">
.movieImage{
    height: 234px;
    width: 170px;
    margin-bottom: 30px;
}
.fileFather{
    display: block;
    height:40px;
    width:100px;
    position: relative;
    left: 35px;
}
.movieInfo{
    float:left;
    width:40%;
    margin-left:10px;
}
.create{
    margin:10px 0px 0px 10px;
    float:left;
}
</style>

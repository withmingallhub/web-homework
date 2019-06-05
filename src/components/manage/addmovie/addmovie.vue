<template>
    <div>
        <div style="margin-left:140px;">
            <div class="movieImage">
                <img v-if="!movieUrl" src="@/assets/addMovie.jpg" alt="" height="100%" width="100%">
                <img v-if="movieUrl" :src="movieUrl" alt="" height="100%" width="100%">
            </div>
            <Upload
                :before-upload="handleUpload"
                action=""
                class="fileFather">
                <Button icon="ios-cloud-upload-outline">选择电影封面</Button>
            </Upload>
        </div>
        <div style="margin-left:100px;padding:20px 10px;overflow:hidden;">
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影名称"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影类型"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo"  placeholder="填写电影上映时间，例：2016-05-20"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影时长，例：xxx分钟"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <Input type="text" class="movieInfo" placeholder="填写电影导演"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <p style="text-align:left;margin-left:10px;margin-bottom:6px;">输入电影的主演：</p>
                <Input type="textarea" style="width:70%;float:left;margin-left:10px;" placeholder="主演" :autosize="{maxRows: 5,minRows: 5}"></Input>
            </div>
            <div style="clear:both;margin-top:20px;overflow:hidden;">
                <p style="text-align:left;margin-left:10px;margin-bottom:6px;">输入电影简介：</p>
                <Input type="textarea" style="width:70%;float:left;margin-left:10px;" placeholder="电影简介" :autosize="{maxRows: 7,minRows: 7}"></Input>
            </div>
            <Button class="create" type="info" @click="upload">创建电影</Button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            file:'',
            movieUrl:''
        }
    },
    methods:{
        handleUpload (file) {
            this.file = file;
            this.movieUrl = window.webkitURL.createObjectURL(file);
            return false;  
        },
        upload () {
            if(this.file){
                this.$refs.upload.post(this.file);
            }else{
                alert('未选择图片')
            }
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

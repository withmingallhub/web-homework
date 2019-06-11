<template>
    <div>
        <div>
            <h3>添加演出厅</h3>
        </div>
        <div style="margin-top:50px;">
            <Input class="one" v-model="addting.hallname" placeholder="演出厅名称" style="width:200px;"></Input>
            <br>
            <Input class="one" v-model="addting.type" placeholder="演出厅类型" style="width:200px;"></Input>
            <br>
            <Input class="one" v-model="addting.hallColumn" placeholder="演出厅列数" style="width:200px;"></Input>
            <br>
            <Input class="one" v-model="addting.hallRow" placeholder="演出厅行数" style="width:200px;"></Input>
            <br>
            <Button class="one" type="info" @click="addtings">添加</Button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return{
            addting:{
                hallname:'',
                type:'',
                hallColumn:'',
                hallRow:''
            }
        }
    },
    methods:{
        addtings(){
            axios.post('http://192.168.43.133:8080/TTMS/addHall',this.addting).then((res)=>{
                console.log(res) 
                
            })
        }
    }
}
</script>
<style lang="">
.one{
    margin-bottom: 20px;
}    
</style>
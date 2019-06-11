<template>
    <div>
        <div>
            <h3>添加演出厅</h3>
        </div>
        <div style="margin-top:50px;">
            <Input class="one" v-model="addting.tingname" placeholder="演出厅名称" style="width:200px;"></Input>
            <br>
            <Input class="one" v-model="addting.tingtype" placeholder="演出厅类型" style="width:200px;"></Input>
            <br>
            <Button class="one" type="info">添加</Button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            addting:{
                tingname:'',
                tingtype:''
            }
        }
    }
}
</script>
<style lang="">
.one{
    margin-bottom: 20px;
}    
</style>
<template>
    <div>
        <div class="topNavigit">
            <ul class="topFirst" v-if="!disname">
                <li @click="pushLogin">登录</li>
                <li @click="pushRegister"><Icon type="ios-brush-outline" style="color:red;" />免费注册</li>
            </ul>
            <ul class="topFirst" v-if="disname">
                <li @click="pushInfo"><Icon type="ios-contact" style="color:red;" />个人中心</li>
                <p style="float:left;line-height:40px;display:inline-block;margin-left:20px;">{{ disname }}</p>
            </ul>
            <router-link
                to="/"
                style="float:left;margin-left:20px;"
            >
                <p style="line-height:40px;color:red;">影院首页</p>
            </router-link>
            <ul class="topLast">
                <li @click="pushShopCar"><Icon style="color:red;" type="ios-cart" />我的购物</li>
                <li @click="pushCollect"><Icon style="color:red" type="ios-basket" />我的收藏</li>
                <li @click="pushConnectService"><Icon style="color:red;" type="ios-call" />联系客服</li>
                <li @click="pushMyFoot"><Icon type="ios-stopwatch-outline" style="color:red;" />我的足迹</li>
                <li @click="hislogin"><Icon type="ios-backspace-outline" style="color:red;" />退出登录</li>
            </ul>
        </div>
    </div>
</template>

<script>

export default {
    data(){
        return {
            disname:'',

        }
    },
    mounted: function () {
        let username = localStorage.getItem('username')
        if(username){
            this.disname = username
        }
    },
    methods:{
        pushLogin(){
            this.$router.push({path:'/login'})
        },
        pushRegister(){
            this.$router.push({path:'/register'})
        },
        pushInfo(){
            this.$router.push({path:'/Info'})
        },
        pushShopCar(){
            let username = localStorage.getItem('username')
            if(!username) this.$router.push({path:'/login'})
            else this.$router.push({path:'/shopcar'})
        },
        pushCollect(){
            let username = localStorage.getItem('username')
            if(!username) this.$router.push({path:'/login'})
            else this.$router.push({path:'/collectible'})
        },
        pushConnectService(){
            this.$router.push({path:'/connectService'})
        },
        pushMyFoot(){
            let username = localStorage.getItem('username')
            if(!username) this.$router.push({path:'/login'})
            else this.$router.push({path:'/myfoot'})
        },
        hislogin(){
            localStorage.removeItem('username')
            location.reload()
        }
    }
}
</script>

<style lang="">
.topNavigit{
    height:40px;
    width: 100%;
    min-width: 800px;
    font-size: 1.2em;
    background: rgb(245,245,245);
    border-bottom: 1px solid rgb(238,238,238);
}
.topFirst {
    height: 100%;
    float: left;
}
.topFirst li{
    height: 100%;
    width: 80px;
    line-height: 40px;
    list-style: none;
    float: left;
    border-radius: 5px;
    margin-left: 20px;
}
.topFirst li:hover {
    background: rgb(93,172,255);
    color: white;
    cursor: pointer;    
}
.topLast {
    height: 100%;
    float: right;
    margin-right:40px;
}
.topLast li{
    height: 100%;
    width: 80px;
    line-height: 40px;
    list-style: none;
    float: left;
    border-radius: 5px;
    margin-left: 20px;
}
.topLast li:hover {
    background: rgb(93,172,255);
    color: white;
    cursor: pointer;
}
.ivu-dropdown-item{
    padding: 5px 0px;
    margin-left:0px;
}
</style>

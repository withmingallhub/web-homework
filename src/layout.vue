<template>
    <div class="layout">
        <Layout>
            <Header style="background:rgb(92,173,255)">
                <Menu mode="horizontal" theme="dark" active-name="1" style="background:rgb(92,173,255)">
                    
                    <div>
                        <div style="height:60px;width:60px;border-radius:50%;background:green;float:right;">
                            
                        </div>
                        <div style="height:60px;float:right;margin-right:30px;position:relative;bottom:10px;color:white;">
                            <div style="height:50%;text-align:right;">
                                <span>职务：</span>
                                <span>{{ disname }}</span>
                            </div>
                            <div style="height:50%;text-align:right;">
                                <p>{{ sign }}</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        
                    </div>
                </Menu>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <Menu active-name="1" theme="light">
                        <MenuGroup title="电影管理">
                            <MenuItem name="1" to="/manage/addmovie">
                                <Icon type="md-add" />
                                添加新电影
                            </MenuItem>
                            <MenuItem name="2" to="/manage/changeMovie">
                                <Icon type="ios-build-outline" />
                                修改仓库电影信息
                            </MenuItem>
                            <MenuItem name="3" to="/manage/onlineMovie">
                                <Icon type="ios-bulb-outline" />
                                上线仓库电影
                            </MenuItem>
                            <MenuItem name="4" to="/manage/addSession">
                                <Icon type="ios-add-circle-outline" />
                                添加电影场次
                            </MenuItem>
                            <MenuItem name="5" to="/manage/deletMovies">
                                <Icon type="md-close" />
                                删除电影/场次
                            </MenuItem>
                        </MenuGroup>
                        <MenuGroup title="影票管理">
                            <MenuItem name="5" to="/manage/ticketsFind">
                                <Icon type="md-search" />
                                影票搜索
                            </MenuItem>
                            <MenuItem name="6" to="/manage/selltickets">
                                <Icon type="ios-paper-outline" />
                                售票信息
                            </MenuItem>
                        </MenuGroup>
                    </Menu>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Content :style="{padding: '24px', minHeight: '500px', background: '#fff'}">
                        <router-view/>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>

<script>
import login from '@/components/logintem/login'
import routes from '@/router/router'

export default {
    data(){
        return {
            disname:'运营经理',//用户的管理层级
            sign:'我是一个孤独的管理经理',//用户的个性签名
            img:'', //用户的头像图片
        }
    },

    created:function(){

    },

    components: { },

    mounted:function(){
        this.checklogin()
    },

    methods:{
        checklogin(){
            // let name = localStorage.getItem('name')
            // let password = localStorage.getItem('password')
            // if(name && password){
                
            // }else{
            //     this.$router.push({path:'/login'})
            // }
        }
    },
}
</script>

<style lang="">
.layout-nav{
    font-size: 2em;
    color:white;
}
a{
    display: inline-block;
    width: 100%;
    height:100%;
    padding: 12px;
    margin:auto;
    border-radius: 5px;
}
</style>
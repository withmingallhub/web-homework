<template>
    <div>
        <div style="height:60px;width:100%;">
            <usertop />
        </div>
        <div style="width:84%;position:relative;left:8%;min-height:800px;">
            <router-view />
        </div>
        <div class="bottomFoot">
            <div>                                                                                                                                                                                                                                                                                                                                   
                <ul>
                    <li>如果您是消费者</li>
                    <li>请拨打：18710617324(严欣豪严管理员)</li>
                    <li>如果您是小姐姐</li>
                    <li>请拨打：18109204213</li>
                </ul>
            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
    </div>
</template>

<script>

import usertop from '@/components/usercomponents/userTop/userTop'

export default {
    data() {
        return {

        }
    },
    components:{
        usertop
    },
    methods:{
        
    }
}
</script>
<style lang="">
.bottomFoot{
    height: 150px;
    width: 100%;
    padding-top:30px;
    background: rgb(43,43,43);
    color: #9a9a9a;
}
.bottomFoot div{
    width:20%;
}
</style>

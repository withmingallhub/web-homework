/* eslint-disable */
import layout from '@/layout'
import login from '@/components/logintem/login'
import register from '@/components/register/register'
import lookfornum from '@/components/manage/lookfornum/lookfornum'
import main from '@/components/manage/main/main'
import addmovie from '@/components/manage/addmovie/addmovie'
import manageIfo from '@/components/manage/mangeIfo/manageIfo'
import selltickets from '@/components/manage/selltickets/selltickets'
import user from '@/user'
import mainchoise from '@/components/usercomponents/userMain/userMainchoise'
import userInfo from '@/components/usercomponents/userInfo/userInfo'
import shopcar from '@/components/usercomponents/shopCar/shopCar'
import collectible from '@/components/usercomponents/collectible/collectible'
import connectService from '@/components/usercomponents/connectService/connectService'
import myFoot from '@/components/usercomponents/myFoot/myFoot'
import moreMovies from '@/components/usercomponents/moreMovies/moreMovies'
import set from '@/components/usercomponents/set/set'
import grade from '@/components/usercomponents/grade/grade'
import buytickets from '@/components/usercomponents/buytickets/buytickets'


export default[
    {
        path:'/manage',
        component:layout,
        children: [
            {
                path:'/manage',
                component:main,
                meta:{
                    name:'1-0-0',
                    icon:'ios-keypad',
                    label:'homeage'
                }
            },
            {
                path:'/manage/lookfornum',
                component:lookfornum,
                meta:{
                    name:'1-0-1',
                }
            },
            {
                path:'/manage/addmovie',
                component:addmovie,
                meta:{
                    name:'1-0-2',   
                }
            },
            {
                path:'/manage/manageIfo',
                component:manageIfo,
                meta:{
                    name:'1-0-3'
                }
            },
            // 
            {
                path:'/manage/selltickets',
                component:selltickets,
                meta:{
                    name:'1-0-4'
                }
            },
        ]
    },
    {
        path:'/login',
        component:login
    },
    {
        path:'/register',
        component:register
    },
    {
        path:'/',
        component:user,
        children:[
            {
                path:'/',
                component:mainchoise
            },
            {
                path:'/Info',
                component:userInfo
            },
            {
                path:'/shopcar',
                component:shopcar
            },
            {
                path:'/collectible',
                component:collectible
            },
            {
                path:'/connectService',
                component:connectService
            },
            {
                path:'/myfoot',
                component:myFoot
            },
            {
                path:'/set',
                component:set
            },
            {
                path:'/grade',
                component:grade
            },
            {
                path:'/buytickets',
                component:buytickets
            },
            {
                path:'/moreMovies',
                component:moreMovies,
                name:'moreMovies'
            }
        ]
    }
]
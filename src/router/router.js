/* eslint-disable */
import layout from '@/layout'
import login from '@/components/logintem/login'
import register from '@/components/register/register'
import addSession from '@/components/manage/addSession/addSession'
import main from '@/components/manage/main/main'
import addmovie from '@/components/manage/addmovie/addmovie'
import changeMovie from '@/components/manage/changeMovie/changeMovie'
import onlineMovie from '@/components/manage/onlineMovie/onlineMovie'
import deletMovies from '@/components/manage/deletMovies/deletMovies'
import selltickets from '@/components/manage/selltickets/selltickets'
import addting from '@/components/manage/addting/addting'
import ticketsFind from '@/components/manage/ticketsFind/ticketsFind'
import user from '@/user'
import mainchoise from '@/components/usercomponents/userMain/userMainchoise'
import userInfo from '@/components/usercomponents/userInfo/userInfo'
import shopcar from '@/components/usercomponents/shopCar/shopCar'
import collectible from '@/components/usercomponents/collectible/collectible'
import connectService from '@/components/usercomponents/connectService/connectService'
import myFoot from '@/components/usercomponents/myFoot/myFoot'
import moreMovies from '@/components/usercomponents/moreMovies/moreMovies'
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
                path:'/manage/addSession',
                component:addSession,
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
                path:'/manage/changeMovie',
                component:changeMovie,
                meta:{
                    name:'1-0-3',   
                }
            },
            {
                path:'/manage/onlineMovie',
                component:onlineMovie,
                meta:{
                    name:'1-0-4',   
                }
            },
            {
                path:'/manage/deletMovies',
                component:deletMovies,
                meta:{
                    name:'1-0-5'
                }
            },
            {
                path:'/manage/ticketsFind',
                component:ticketsFind,
                meta:{
                    name:'1-0-6'
                }
            },
            // 
            {
                path:'/manage/selltickets',
                component:selltickets,
                meta:{
                    name:'1-0-7'
                }
            },
            {
                path:'/manage/addting',
                component:addting,
                meta:{
                    name:'1-0-8'
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
                path:'/buytickets',
                component:buytickets
            },
            {
                path:'/moreMovies',
                component:moreMovies,
                name:'moreMovies'
            },
        ]
    }
]
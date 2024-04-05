import {createRouter,createWebHashHistory} from "vue-router";
import helloWorld from "@/components/HelloWorld";
import FatherComponent from "@/components/father_son/FatherComponent";
import SonComponent from "@/components/father_son/SonComponent";
// import GoodCar from "@/components/GoodCar";
const GoodCar = () => import("@/components/GoodCar")
const HomeMessage = () => import("@/components/HomeMessage")
const HomeNews = () => import("@/components/HomeNews")

const routes = [
    {path: '/',redirect: '/helloWorld'},
    {
        path: '/helloWorld',
        name: 'helloWorld',
        component: helloWorld,
        meta: {
            title: 'helloWorld'
        },
        children: [
            {
                path: 'message',
                component: HomeMessage
            },
            {
                path: 'news',
                component: HomeNews
            }
        ]
    },
    {
        path: '/goodCar',
        name: 'goodCar',
        component: GoodCar
    },
    {
        path: "/father",
        name: "father",
        component: FatherComponent
    },
    {
        path: "/son",
        name: "son",
        component: SonComponent
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    // linkActiveClass: ''
});
router.beforeEach((to,from,next) =>{
    // document.title = to.meta.title
    document.title = to.name
    next()
})
export default router;
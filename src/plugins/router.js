import { createRouter, createWebHistory } from "vue-router";

const routes = [
    //view
    {path: '', name: 'home', component:() => import('@/views/Home.vue')},
    {path: '/about', name: 'about', component:() => import('@/views/About.vue')},
    {path: '/weather', name: 'weather', component:() => import('@/views/Weather.vue')}

    //weather app
    
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

export default router
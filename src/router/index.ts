import AboutPageVue from '@/shared/pages/AboutPage.vue';
import HomePageVue from '@/shared/pages/HomePage.vue';
import {createRouter, createWebHistory} from 'vue-router';

const router=createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {path: '/', name: 'home', component: HomePageVue},
        {path: '/about', name: 'about', component: AboutPageVue},
        {
            path: '/characters',
            name: 'characters',
            component: ()=>import('@/characters/layout/CharacterLayout.vue')
        },
        {path: '/:pathMatch(.*)*', redirect: ()=>({name: 'home'})}
    ]
});

export default router;
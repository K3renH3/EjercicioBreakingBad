<script setup lang="ts">

import {RouterView} from 'vue-router'
import NavBar from '@/shared/components/NavBar.vue';
import type { routeLinks, RouterLink } from '@/router/link-routes';
import { characterRoute } from '../router/index';

const routeLinks: RouterLink[]=characterRoute.children!
    .filter(route=>(route.props as {title: string, visible: boolean}).visible)
    .map(route=>{
        return {
            name: route.name as string,
            path: route.path as string,
            title: (route.props as {title: string, visible: boolean}).title
        }
    })

</script>

<template>

    <h1>Personajes</h1>
    <NavBar :show-icon="false" :links="routeLinks" />
    <RouterView />

</template>

<style scoped>

</style>
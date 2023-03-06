
<script setup lang="ts">
import type { RouterLink } from '@/router/link-routes';


interface Props {
    title: string;
    links: RouterLink[];
}
const props=defineProps<Props>();

</script>

<template>
    <nav>
        <img src="@/assets/logo.svg" alt="Vue logo" height="25" width="25">
        <span>{{ props.title || 'no title' }}</span>
        <RouterLink
          v-for="link of links"
          :key="link.path"
          :to="link.path">
            {{ link.title }}
        </RouterLink>
        
    </nav>
</template>



<style scoped>
nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 10px;
    display: flex;
    align-items: flex-start;
}

img {
    margin-right: 5px;
}

span {
    margin-right: 5px;
}

a {
    margin-right: 5px;
}
</style>
import type { RouteRecordRaw } from "vue-router";
import CharacterLayoutVue from "@/characters/layout/CharacterLayout.vue";
import CharacterIdVue from "@/characters/pages/CharacterId.vue";
import CharacterListVue from "@/characters/pages/CharacterList.vue";
import CharacterSearchVue from "@/characters/pages/CharacterSearch.vue";

const ROUTE_NAME='characters'
export const characterRoute: RouteRecordRaw={

    path: `/${ROUTE_NAME}`,
    redirect: 'characters/list',
    component: CharacterLayoutVue,
    children: [
        {
            path: 'by/:id', 
            name: 'character-id',
            props: {title: 'Por Id', visible: false}, 
            component: CharacterIdVue
        },
        {
            path: `/${ROUTE_NAME}/list`, 
            name: 'character-list',
            props: {title: 'Lista', visible: true}, 
            component: CharacterListVue
        },
        {
            path: `/${ROUTE_NAME}/search`, 
            name: 'character-search',
            props: {title: 'Búsqueda', visible: true}, 
            component: CharacterSearchVue
        },
    ]
}
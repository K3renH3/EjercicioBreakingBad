<script setup lang="ts">
// import rickAndMortyApi from '@/api/rickAndMortyApi';
// import type {Characters, Result} from '@/characters/interfaces/characters';
// import { ref } from 'vue';
// import { useCharacters } from '@/characters/composable/useCharacters';
import { useQuery } from '@tanstack/vue-query';
import type { Characters, Result } from '@/characters/interfaces/characters';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import CharacterCard from '@/characters/components/CharacterCard.vue'

// const {isLoading, characters, hasError, errorMessage}=useCharacters();
const getCharactersSlow=async():Promise<Result[]>=>{
    return new Promise(resolve=>{
        setTimeout(async()=>{
            const {data}=await rickAndMortyApi.get<Characters>('/character');
            resolve (data.results);
        }, 1)
    })
    // const {data}=await rickAndMortyApi.get<Characters>('/character');
    // return data.results;
}
const {isLoading, isError, data: characters, error}=useQuery(
    ['characters'],
    getCharactersSlow,
    {
        cacheTime: 1000*60,
        refetchOnReconnect: 'always',
    }
);

</script>

<template>
    <h1 v-if="isLoading">Loading...</h1>
    
    <div class="card-list">
        <!-- <li
          v-for="{name, id} of characters"
          :key="id">
            {{ name }}
        </li> -->
        <CharacterCard
          v-for="character of characters"
          :key="character.id" 
          :character="character"/>
    </div>
</template>


<style scoped>

.card-list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

</style>
<script setup lang="ts">
import CharacterCard from '@/characters/components/CharacterCard.vue'
import type {Result} from '@/characters/interfaces/characters';

interface Props {
    characters: Result[];
}

const props=defineProps<Props>();

// const {isLoading, characters, hasError, errorMessage}=useCharacters();
// const getCharactersSlow=async():Promise<Result[]>=>{
//     return new Promise(resolve=>{
//         setTimeout(async()=>{
//             const {data}=await rickAndMortyApi.get<Characters>('/character');
//             resolve (data.results);
//         }, 1)
//     })

// }
// const {isLoading, data: characters}=useQuery(
//     ['characters'],
//     getCharactersSlow,
//     {
//         cacheTime: 1000*60,
//         refetchOnReconnect: 'always',
//     }
// );

</script>

<template>
    <!-- <h1 v-if="isLoading">Loading...</h1> -->
    
    <div class="card-list">
        <!-- <li
          v-for="{name, id} of characters"
          :key="id">
            {{ name }}
        </li> -->
        <CharacterCard
          v-for="character of props.characters"
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
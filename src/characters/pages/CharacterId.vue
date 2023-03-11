<script setup lang="ts">
import { useRoute } from 'vue-router';
import type {Result} from '@/characters/interfaces/characters';
import rickAndMortyApi from '@/api/rickAndMortyApi';
import { useQuery } from '@tanstack/vue-query';
import charactersStore from '@/store/characters.store';

const route=useRoute();
const {id}=route.params as {id: string};
// const getCharacter=async(characterId: string): Promise<Result>=>{
//     const {data}=await rickAndMortyApi.get<Result>(`/character/${characterId}`);
//     return data;
// }
// const {data: character}=useQuery(
//     ['characters', id],
//     ()=>getCharacter(id)
// )
const character=charactersStore.characters.list[0]
console.log(character);

</script>

<template>

    <h1 v-if="!character">Loading...</h1>

    <div v-else>
        <h1>Character: {{ character.name }}</h1>
        <div class="character-container">
            <img :src="character.image" :alt="character.name">
            <ul>
                <li>Estado: {{ character.status }}</li>
                <li>Especie: {{ character.species }}</li>
                <li>Tipo: {{ character.type }}</li>
                <li>Lugar: {{ character.location.name }}</li>
                <li>Género: {{ character.gender }}</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.character-container {
    display: flex;
    flex-direction: row;
    margin: 20px 10px;
}

img {
    width: 300px;
    border-radius: 5px;
}

ul {
    font-size: 20px;
}

</style>
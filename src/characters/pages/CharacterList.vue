<script setup lang="ts">
import CardList from '@/characters/components/CardList.vue'
import useCharacters from '@/characters/composables/useCharacters';




const {
    isLoading,
    hasError,
    errorMessage,
    characters,
    count
}=useCharacters();

const props=defineProps<{title:string, visible: true}>();

// const getCharactersCacheFirst=async(): Promise<Result[]>=>{

//     if(charactersStore.characters.count>0) {
//         return charactersStore.characters.list;
//     }

//     const {data}=await rickAndMortyApi.get<Characters>('/character');
//     return data.results;
// }

// useQuery(
//     ['characters'],
//     getCharactersCacheFirst,
//     {
//         onSuccess(data) {
//             charactersStore.loadedCharacters(data);
//         }
//     }
// );

</script>

<template>

    <h1 v-if="isLoading">Loading...</h1>

    <div v-else-if="hasError">
        <h1>Error al cargar</h1>
        <p>{{ errorMessage }}</p>
    </div>

    <template v-else>

        <h2>{{ props.title }}-{{ count }}</h2>
        <CardList :characters="characters" />

    </template>
</template>

<style scoped>

</style>
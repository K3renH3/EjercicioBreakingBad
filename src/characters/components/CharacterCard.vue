<script setup lang="ts">
import type {Result} from '@/characters/interfaces/characters';
import { toRef } from 'vue';

const props=defineProps<{character: Result}>();
const character=toRef(props, 'character');

</script>

<template>

    <div class="character-card">
        <img :src="props.character.image" :alt="props.character.name">
        <h3>{{ character.name }}</h3>
    </div>

</template>


<style scoped>

.character-card {
    margin-right: 5px;
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10px;
}

img {
    width: 180px;
    border-radius: 5px 5px 0 0;
    box-shadow: 0px 2px 10px rgba(255, 255, 255, 0.1);
}

</style>
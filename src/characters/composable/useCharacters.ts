import type {Characters, Result} from "@/characters/interfaces/characters";
import rickAndMortyApi from '@/api/rickAndMortyApi';
import { onMounted, ref } from 'vue';
import axios from 'axios';

const characters=ref<Result[]>([]);
const isLoading=ref<boolean>(true);
const hasError=ref<boolean>(false);
const errorMessage=ref<string>();

export const useCharacters=()=>{

    onMounted(async() => {
        await loadCharacters();
    })

    
    const loadCharacters=async()=>{
        // rickAndMortyApi.get<Characters>('/character')
        //     .then(resp=>{
        //     characters.value=resp.data.results;
        //     // const name=resp.data.results[0].name
        //     // console.log({name});
        //     isLoading.value=false;
        //     });
        if(characters.value?.length>0) return;
        isLoading.value=true;
        
        try {
            const {data}=await rickAndMortyApi.get<Characters>('/character');
            characters.value=data.results;
            isLoading.value=false;
        }
        catch (error) {
            hasError.value=true;
            isLoading.value=false;
            if (axios.isAxiosError(error)) {
                errorMessage.value=error.message;
                return;
           }
           errorMessage.value=JSON.stringify(error)
        }
    }
    return {
        characters,
        isLoading,
        hasError,
        errorMessage
    }
}
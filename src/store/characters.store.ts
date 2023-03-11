import rickAndMortyApi from "@/api/rickAndMortyApi";
import type { Characters, Result } from "@/characters/interfaces/characters";
import { reactive } from "vue";

interface Store {
    characters:{
        list: Result[];
        count: number;
        isLoading: boolean;
        hasError: boolean;
        errorMessage: string | null;
    },
    startloadingCharacters: ()=>void;
    loadedCharacters: (data: Result[])=>void;
    loadCharactersFailed: (error:string)=>void;
}

const characterStore=reactive<Store>({
    characters: {
        list: [],
        count: 0,
        isLoading: true,
        hasError: false,
        errorMessage: null,
    },
    async startloadingCharacters() {
        const {data}=await rickAndMortyApi.get<Characters>('/character');
        // console.log('Start Loading Characters');
        this.loadedCharacters(data.results)
    },

    loadedCharacters(data: Result[] | string) {
        // console.log(data);
        if(typeof data==='string') {
            return this.loadCharactersFailed('La respuesta no es una lista de personajes');
        }
        const characters=data;
        this.characters={
            count: characters.length,
            errorMessage: null,
            hasError: false,
            isLoading: false,
            list: characters
        }
    },
    loadCharactersFailed(error: string) {
        this.characters={
            count: 0,
            errorMessage: error,
            hasError: true,
            isLoading: false,
            list: []
        }
    },
});

characterStore.startloadingCharacters();
export default characterStore;
import {createContext, ReactNode, useEffect, useState} from 'react';
import { marvelAPI} from './services/api';

interface Characters {
    name: string;
    id: number;
    comics: any;
    description: string;
    thumbnail: any;

}


interface MarvelProviderProps{
    children: ReactNode;
}

interface ParamsInterface{
    name: string;
}

interface MarvelContextData{
    characters: Characters[];
    foundedCharacter: Characters[];
    filterHero: (hero: ParamsInterface)=> Promise<void>;
    
}

export const MarvelContext = createContext<MarvelContextData>({} as MarvelContextData)

export function MarvelCharacterProvider({children}:MarvelProviderProps){
 const [characters, setCharacter] = useState<Characters[]>([])
 const [foundedCharacter, setFoundedCharacter] = useState<Characters[]>([])

    useEffect(()=>{
        marvelAPI.get("/characters?ts=1623177601&apikey=587e683a919504a8b9323de33aeebd54&hash=d419ee5d0a458ac5c15cb80156fb9b8e")
        .then(response=>{
                setCharacter(response.data.data.results)
            }
        )
    },[])

    async function filterHero({name} : ParamsInterface){
        await marvelAPI.get(`/characters?name=${name}&ts=1623177601&apikey=587e683a919504a8b9323de33aeebd54&hash=d419ee5d0a458ac5c15cb80156fb9b8e`)
        .then(response=>{
                setFoundedCharacter(response.data.data.results)
            }
        )
        
        //await marvelAPI.get(`/characters/${id}`).then(response => setCharacter(response.data.data.results))

    }

    return (
        <MarvelContext.Provider value={{characters,filterHero, foundedCharacter}}>
            {children}
        </MarvelContext.Provider>
    )


}
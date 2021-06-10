import {createContext, ReactNode, useEffect, useState} from 'react';
import { marvelAPI} from './services/api';

interface Characters {
    name: string;
    id: number;
    image_url: string;
    description: string;

}


interface MarvelProviderProps{
    children: ReactNode;
}

interface MarvelContextData{
    characters: Characters[];
    
}

export const MarvelContext = createContext<MarvelContextData>({} as MarvelContextData)

export function MarvelCharacterProvider({children}:MarvelProviderProps){
 const [characters, setCharacter] = useState([])

    useEffect(()=>{
        marvelAPI.get("/characters?ts=1623177601&apikey=587e683a919504a8b9323de33aeebd54&hash=d419ee5d0a458ac5c15cb80156fb9b8e")
        .then(response=>{
                setCharacter(response.data.data.results)
            }
        )
    },[])

    return (
        <MarvelContext.Provider value={{characters}}>
            {children}
        </MarvelContext.Provider>
    )


}